//Email.jsx
// import pic from '../../asset/Logo/Logo.png'
// import React from 'react';
// const EmailStep = ({email,setEmail, nextStep }) => {

  
//   return (


//     <div className="flex flex-col items-center  justify-center  p-8  lg:p-12 bg-gray-100">
//       <div className="bg-white lg:p-28 p-4  rounded-3xl shadow-md w-full lg:max-w-4xl max-w-md">
//         <div className="flex justify-between items-start mb-8">
//           <img src={pic} alt="Logo" className="h-10" />
//         </div>
//         <div className="lg:grid flex flex-col grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">STEP 1</h2>
//             <h1 className="text-3xl font-bold mb-4">Enter your email address to continue</h1>
//             <p className="mb-6">
//             Log in to your account. If you don't have one, you will be prompted to create one.
//             </p>
//             </div>
//           <div className='lg:mt-10'>
//                       <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded mb-4"
//               placeholder="Email"
//             />
            
//             <div className='flex mt-4 justify-between'>
//           <a className='underline mt-2 text-gray-500' href=''>    <p className=''> Have an Account?</p></a>
//             <button
//               onClick={nextStep}
//               className="w-50 px-6  items-baseline bg-black text-white py-2 rounded-lg"
//             >
//               Continue
//             </button>
            
//         </div> 
 
//  </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmailStep;


// import React, { useState } from 'react';
// import pic from '../../asset/Logo/Logo.png';

// const EmailStep = ({ email, setEmail, nextStep }) => {
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Validate email format here if needed
//     try {
//       const raw = JSON.stringify({ username: email, password: '' });
//       const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
//         method: 'POST',
//         body: raw,
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (!response.ok) {
//         throw new Error('Login failed');
//       }
//       const result = await response.json();
//       localStorage.setItem('authToken', result.token); // Save the token
//       nextStep();
//     } catch (error) {
//       setError('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-8 lg:p-12 bg-gray-100">
//       <div className="bg-white lg:p-28 p-4 rounded-3xl shadow-md w-full lg:max-w-4xl max-w-md">
//         <div className="flex justify-between items-start mb-8">
//           <img src={pic} alt="Logo" className="h-10" />
//         </div>
//         <div className="lg:grid flex flex-col grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">STEP 1</h2>
//             <h1 className="text-3xl font-bold mb-4">Enter your email address to continue</h1>
//             <p className="mb-6">
//               Log in to your account. If you don't have one, you will be prompted to create one.
//             </p>
//           </div>
//           <div className='lg:mt-10'>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded mb-4"
//                 placeholder="Email"
//                 required
//               />
//               {error && <p className="text-red-500">{error}</p>}
//               <div className='flex mt-4 justify-between'>
//                 <a className='underline mt-2 text-gray-500' href=''><p> Have an Account?</p></a>
//                 <button
//                   type="submit"
//                   className="w-50 px-6 items-baseline bg-black text-white py-2 rounded-lg"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmailStep;

import { useState } from 'react';
import pic from '../../asset/Logo/Logo.png';
import { useNavigate } from 'react-router-dom';
const LoginStep = () => {
  const [localEmail, setLocalEmail] = useState('');
const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', localEmail);
    // setEmail(localEmail);
    // nextStep();
    navigate('/login-password')
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 lg:p-12 bg-gray-100">
      <div className="bg-white lg:p-28 p-4 rounded-3xl shadow-md w-full lg:max-w-4xl max-w-md">
        <div className="flex justify-between items-start mb-8">
          <img src={pic} alt="Logo" className="h-10" />
        </div>
        <div className="lg:grid flex flex-col grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">STEP 1</h2>
            <h1 className="text-3xl font-bold mb-4">Enter your email address to continue</h1>
            <p className="mb-6 text-balance">
              Log in to your account. If you don't have one, you will be prompted to create one.
            </p>
          </div>
          <div className='lg:mt-10'>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={localEmail}
                onChange={(e) => setLocalEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded mb-4"
                placeholder="Username"
                required
              />
              <div className='flex mt-4 justify-between'>
                <a className='underline mt-2 text-gray-500' href=''><p>Have an Account?</p></a>
                <button
                  type="submit"
                  className="w-50 px-6 items-baseline bg-black text-white py-2 rounded-lg"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginStep;


// import { useState } from 'react';
// import pic from '../../asset/Logo/Logo.png';

// const LoginStep = ({nextStep}) => {
//  const [email, setEmail,]= useState('')
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('username', email);
//     nextStep();
//   };

  

//   return (
//     <div className="flex flex-col  items-center justify-center p-8 lg:p-12 bg-gray-100">
//       <div className="bg-white lg:p-28 p-4 rounded-3xl shadow-md w-full lg:max-w-4xl max-w-md">
//         <div className="flex justify-between items-start mb-8">
//           <img src={pic} alt="Logo" className="h-10" />
//         </div>
//         <div className="lg:grid flex flex-col grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">STEP 1</h2>
//             <h1 className="text-3xl font-bold mb-4">Enter your credentials to continue</h1>
//             <p className="mb-6">
//               Log in to your account. If you don't have one, you will be prompted to create one.
//             </p>
//           </div>
//           <div className='lg:mt-10'>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded mb-4"
//                 placeholder="Username"
//                 required
//               />
//               <div className='flex mt-4 justify-between'>
//                 <a className='underline mt-2 text-gray-500' href=''><p>Have an Account?</p></a>
//                 <button
//                   type="submit"
//                   className="w-50 px-6 items-baseline bg-black text-white py-2 rounded-lg"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default LoginStep;



