import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";

const RegisterScreen = ({ open, setOpen, setLoginOpen }) => {
  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <Transition appear show={open} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-75" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div className="h-max mx-auto flex flex-col items-center">
                <h1>Clothify Store</h1>
                <h1 className="text-xl font-bold text-center pb-3">
                  Register Now
                </h1>
                <div className="bg-white shadow-xl px-10 py-2 flex flex-col gap-4 text-sm">
                  <div>
                    <label
                      className="text-gray-600 font-bold inline-block pb-2"
                      for="email"
                    >
                      Firstname
                    </label>
                    <input
                      className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                      type="email"
                      name="email"
                      placeholder="mehedi@jaman.com"
                    />
                  </div>
                  <div>
                    <label
                      className="text-gray-600 font-bold inline-block pb-2"
                      for="email"
                    >
                      Lastname
                    </label>
                    <input
                      className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                      type="email"
                      name="email"
                      placeholder="mehedi@jaman.com"
                    />
                  </div>
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
                    />
                  </div>
                  <div>
                    <label
                      className="text-gray-600 font-bold inline-block pb-2"
                      for="password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                      type="password"
                      name="password"
                      placeholder="******"
                    />
                  </div>
                
                  <div>
                    <input
                      classNameName="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
                      type="submit"
                      value="Login"
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
                  <a href="#" className="text-[#4F46E5] font-bold">
                    Sign in Here
                  </a>
                  {" "}for Free
                </p>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}

export default RegisterScreen