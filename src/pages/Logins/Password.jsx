

import { useState } from 'react';
import pic from '../../asset/Logo/Logo.png';
import { useNavigate } from 'react-router-dom';

const PasswordStep = () => {
  const [localPassword, setLocalPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem('password', localPassword);
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 lg:p-12 bg-gray-100">
      <div className="bg-white lg:p-14 p-4 rounded-3xl shadow-md w-full lg:max-w-4xl max-w-md">
        <div className="flex justify-between items-start mb-8">
          <img src={pic} alt="Logo" className="h-10" />
        </div>
        <div className="lg:grid flex flex-col grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">STEP 2</h2>
            <h1 className="text-3xl font-bold mb-4">Create an account to continue</h1>
            <p className="mb-6">
              You'll be able to log in to Dingoo with this email address and password.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter a password to create your account with
            </label>
            <form >
              <input
                type="password"
                value={localPassword}
                onChange={(e) => setLocalPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded mb-4"
                placeholder="Choose a password"
                required
              />
              <div className='flex gap-6'>
                <p className="text-xs underline text-balance text-gray-600 mb-4">
                  Use a minimum of 6 characters (case sensitive) with at least one number or special character.
                </p>
                <button
                onClick={handleSubmit}
                 
                  className="p-4 items-baseline bg-black text-white py-2 rounded-lg"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="text-xs text-justify mt-4 w-full text-gray-500">
          Dingoo will use your data to personalize and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.
        </p>
      </div>
    </div>
  );
};


export default PasswordStep;

