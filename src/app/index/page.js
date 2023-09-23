// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Protected() {
//   const { data: session } = useSession();
//   console.log(session);
//   if (session) {
//     return (
//       <div>
//         <h1>Protected Content</h1>
//         <p>
//           Congratulations, {session.user.name}, you are successfully logged in!
//         </p>
//         <button onClick={() => signOut()}>Sign Out</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Protected Content</h1>
//       <p>Please log in to view.</p>
//       <button onClick={() => signIn()}>Sign in</button>
//     </div>
//   );
// }
