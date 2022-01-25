import React, { useState }  from "react";
import { Link } from "react-router-dom";


const SignOut = () => {

    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`The name you entered was: ${fullname}, ${email} and ${password}`);
    };

  return (
    <div className="w-full max-w-xl max-h-full m-auto bg-blue-100 rounded py-10 px-5 mt-20">
      {/* form section */}
      <form onSubmit={handleSubmit}>
        <div>
          <label
            className="block mb-2 text-indigo-500 font-bold"
            htmlFor="fullname"
          >
            Fullname
          </label>
          <input
            className="w-full p-2 mb-8 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="text"
            id="fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block mb-2 text-indigo-500 font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 mb-8 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block mb-2 text-indigo-500 font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full p-2 mb-8 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            className="w-full bg-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
          />
        </div>
      </form>
      {/* footer section */}
      <footer>
        <a
          className="text-indigo-700 hover:text-indigo-400 font-bold text-sm float-left"
          href="#"
        >
          Forgot Password?
        </a>
        <a className="text-indigo-700 hover:text-indigo-400 font-bold text-sm float-right">
          <Link to="/signin">Already have Account?</Link>
        </a>
      </footer>
    </div>
  );
};

export default SignOut;
