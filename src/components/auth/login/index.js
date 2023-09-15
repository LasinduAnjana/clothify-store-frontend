import { BASE_URL } from "@/config/apiConfig";
import { Transition, Dialog } from "@headlessui/react";
import axios from "axios";
import { Fragment, useState } from "react";
import Cookies from "universal-cookie";


const cookies = new Cookies();

const LoginScreen = ({ open, setOpen, setRegisterOpen }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function closeModal() {
    setOpen(false);
  }

  function registerOpen() {
    closeModal();
    setRegisterOpen(true)
  }

  function login() {
    axios.post(`${BASE_URL}auth/authenticate`, {
      email: email,
      password: password
    })
    .then((res) => {
      cookies.set("clothifyStore", res.data.accessToken, {
        path:"/",
        maxAge: 60 * 60 * 24
      });
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      alert("login failed")
    })
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="h-max mx-auto flex flex-col items-center">
                  <h1>Clothify Store</h1>
                  <h1 className="text-xl font-bold text-center pb-10">
                    Sign in to your account
                  </h1>
                  <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
                    <div>
                      <label
                        className="text-gray-600 font-bold inline-block pb-2"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                        type="email"
                        name="email"
                        placeholder="mehedi@jaman.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-600 font-bold inline-block pb-2"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                        type="password"
                        name="password"
                        placeholder="******"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex">
                      <div className="w-1/2">
                        <input type="checkbox" name="remeberMe" />
                        <label for="remeberMe">Remeber me</label>
                      </div>
                      <div className="w-1/2">
                        <a className="font-bold text-blue-600" href="">
                          Forgot password ?
                        </a>
                      </div>
                    </div>
                    <div>
                      <input
                        classNameName="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
                        type="submit"
                        value="Login"
                        onClick={e => {
                          login()
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-center">Or continue with</p>
                    </div>
                    <div className="flex gap-4">
                      <button className="bg-[#1D9BF0] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">
                        Twitter
                      </button>
                      <button className="bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">
                        Github
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-10">
                    Not a member?{" "}
                    <button className="text-[#4F46E5] font-bold" onClick={e => registerOpen()}>
                      Sign in Here
                    </button>
                    {" "}for Free
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginScreen;
