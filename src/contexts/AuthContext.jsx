import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db, googleProvider } from '../firebase'

const AuthContext = createContext(null)

function generateReferralCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
  let code = ''
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

function getReferralFromURL() {
  try {
    const params = new URLSearchParams(window.location.search)
    return params.get('ref') || null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        // Try to fetch or create user doc
        try {
          const userRef = doc(db, 'users', firebaseUser.uid)
          const userSnap = await getDoc(userRef)

          if (userSnap.exists()) {
            setUserData(userSnap.data())
          } else {
            // First login — create user document
            const referredBy = getReferralFromURL()
            const newUser = {
              user_id: firebaseUser.uid,
              email: firebaseUser.email || '',
              display_name: firebaseUser.displayName || 'Operator',
              referral_code: generateReferralCode(),
              referred_by: referredBy,
              total_points: 0,
              total_referrals: 0,
              join_date: serverTimestamp(),
            }
            await setDoc(userRef, newUser)
            setUserData(newUser)

            // If referred by someone, update their referral count
            if (referredBy) {
              try {
                const referrerRef = doc(db, 'users', referredBy)
                const referrerSnap = await getDoc(referrerRef)
                if (referrerSnap.exists()) {
                  const referrerData = referrerSnap.data()
                  await setDoc(referrerRef, {
                    total_referrals: (referrerData.total_referrals || 0) + 1,
                  }, { merge: true })
                }
              } catch (e) {
                console.warn('Referral tracking error:', e)
              }
            }
          }
        } catch (e) {
          // Firebase not configured or offline — use fallback data
          console.warn('Firestore unavailable, using local auth only:', e.message)
          setUserData({
            user_id: firebaseUser.uid,
            email: firebaseUser.email || '',
            display_name: firebaseUser.displayName || 'Operator',
            referral_code: generateReferralCode(),
            referred_by: null,
            total_points: 0,
            total_referrals: 0,
            join_date: new Date().toISOString(),
          })
        }
      } else {
        setUser(null)
        setUserData(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error('Google login error:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, userData, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
