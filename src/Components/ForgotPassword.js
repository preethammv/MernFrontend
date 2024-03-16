import { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from 'react-router-dom';


function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    const [disableResetButton, setDisableResetButton] = useState(true);
    const [showAlert, setShowAlert] = useState(false); 
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      let payLoad = {
        email: email,
        password: newPassword,
      };
  
      axios
        .put("https://mernbackend-4u4u.onrender.com/resetPassword", payLoad)
        .then((res) => {
          if (res.data.success) {
            setShowAlert(true); 
            setTimeout(() => {
                setShowAlert(false);
                navigate('/');
            }, 3000);
          } else {
            alert("password reset failed");
          }
        })
        .catch((err) => {
          alert("something went wrong");
        });
    };
  
    const handleNewPassword = (e) => {
      setNewPassword(e.target.value);
      if (e.target.value && e.target.value === confirmPassword) {
        setDisableResetButton(false);
      } else {
        setDisableResetButton(true);
      }
    };
  
    const handleConfirmNewPassword = (e) => {
      setConfirmpassword(e.target.value);
      if (newPassword && newPassword === e.target.value) {
        setDisableResetButton(false);
      } else {
        setDisableResetButton(true);
      }
    };
  return (
    <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {showAlert && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                    <p className="font-bold">Password reset successful</p>
                </div>
            )}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor=" New password" className="block text-sm font-medium leading-6 text-gray-900">
                  New password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id=" NewPassword"
                  name="NewPassword"
                  type="NewPassword"
                  autoComplete="current-password"
                  required
                  value={newPassword}
                  onChange={handleNewPassword}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor=" New password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm new password
                </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="confirmPassword"
                  autoComplete="current-password"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmNewPassword}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={disableResetButton}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset password
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Remember password?{' '}
            <Link to="/">
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login here
            </a>
            </Link> 
        <div>
        <Link to="/deleteaccount">
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Delete Account
            </a>
            </Link>
        </div>
          
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
