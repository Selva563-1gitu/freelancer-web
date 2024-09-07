import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth } from '../firebase';

const AuthContext = createContext({});
const db = getFirestore();

// export const AuthProviderold = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true); // loading state to prevent early route access

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         // Fetch user data from Firestore
//         const userRef = doc(db, 'users', user.uid);
//         const userSnap = await getDoc(userRef);
//         if (userSnap.exists()) {
//           setCurrentUser({ uid: user.uid, email: user.email, ...userSnap.data() });
//         } else {
//           console.error('No such document!');
//         }
//       } else {
//         setCurrentUser(null);
//       }
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };
export const AuthProvider=({children})=>{
  const [currentUser, setCurrentUser] = useState("null");

  return(

    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
