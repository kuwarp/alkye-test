// step.jsx
// import  { useState } from 'react';
// import EmailStep from './Email';
// import PasswordStep from './Password';
// const StepForm = () => {
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const nextStep = () => setStep(step + 1);
//   const previousStep = () => setStep(step - 1);

//   const handleFinish = async () => {
//     if (email && password) {
//       const raw = JSON.stringify({ email, password });

//       try {
//         const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
//           method: 'POST',
//           body: raw,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Login failed');
//         }

//         const result = await response.json();
//         const token = result.token;

//         if (token) {
//           localStorage.setItem('authToken', token);
//           console.log('Login successful');
//         } else {
//           throw new Error('Token not received');
//         }
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     } else {
//       console.error('Username or password is missing');
//     }
//   };

//   return (
//     <div >
//       {step === 1 && (
//         <EmailStep email={email} 
//         setEmail={setEmail}    
             
//          nextStep={nextStep} />
//       )}
//       {step === 2 && (
//         <PasswordStep
//         email={email}
//           password={password}
//           setPassword={setPassword}
//           previousStep={previousStep}
//           handleFinish={handleFinish}
//         />
//       )}
//     </div>
//   );
// };

// export default StepForm;


import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

function StepForm() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      // Replace with your login API URL
      const loginApiUrl = 'https://untitled-twkmuar27a-uc.a.run.app/api/login/';
      
      fetch(loginApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => response.json(),
      )
        .then(data => {
          if (data.token) {
            setToken(data.token);
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            navigate('/dashboard', { state: { token: data.token } });
          }
           else {
            console.error('Login failed:', data);
            navigate('/');
          }
        })
         .catch(error => {
          console.error('Error during login:', error);
          navigate('/');
        });
    } else {
      console.error('Username or password is missing');
     
    }
  }, [navigate]);

  return (
    <>
     <p> Logging in..........</p>    </>
  );
}

export default StepForm;

// import { useState } from 'react';
// import LoginStep from './Email';
// import PasswordStep from './Password';

// const StepForm = () => {
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const nextStep = () => setStep(step + 1);
//   const previousStep = () => setStep(step - 1);

//   const handleFinish = async () => {
//     if (email && password) {
//       const raw = JSON.stringify({ email, password });

//       try {
//         const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
//           method: 'POST',
//           body: raw,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || 'Login failed');
//         }

//         const result = await response.json();
//         const token = result.token;

//         if (token) {
//           localStorage.setItem('authToken', token);
//           console.log('Login successful');
//         } else {
//           throw new Error('Token not received');
//         }
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     } else {
//       console.error('Username or password is missing');
//     }
//   };

//   return (
//     <div>
//       {step === 1 && (
//         <LoginStep
//           setEmail={setEmail}
//           nextStep={nextStep}
//         />
//       )}
//       {step === 2 && (
//         <PasswordStep
//           setPassword={setPassword}
//           previousStep={previousStep}
         
//           />
//       )}
//     </div>
//   );
// };

// export default StepForm
