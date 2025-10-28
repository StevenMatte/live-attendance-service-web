import { RiGoogleFill } from 'react-icons/ri';

export default function LoginCard() {
  return (
    <>
      <div className="">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-center lg:text-3xl font-bold tracking-tight text-blue-500">Welcome Back</h1>
            <h4 className="mt-5 text-center text-base font-bold tracking-tight text-gray-600">Login to Access your Account</h4>
          </div>
        
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <button
              type="submit"
              className="gap-3 flex w-full outline-1 outline-blue-300 outline justify-center rounded-2xl bg-white px-3 py-3 text-sm/6 font-semibold text-gray-400 hover:bg-blue-500 hover:text-white hover:outline-1 hover:outline-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 text-center"
            >
              <RiGoogleFill className="w-6 h-6" />
              Login with Google
            </button>
          </div>

          <div className="mt-5 flex items-center w-full"> 
              <div className="w-full border-t border-gray-300"></div>
              <p className="text-center text-sm/6 text-gray-400 whitespace-nowrap px-4">
                  or Login with Email
              </p>
              <div className="w-full border-t border-gray-300"></div>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
            
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-bold text-black">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="example@ivteknologi.com"
                    className="block w-full rounded-2xl bg-white/5 px-3 py-3 text-base text-black outline-1 -outline-offset-1 outline-black/40 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-bold text-black">
                    Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-2xl bg-white/5 px-3 py-3  text-base text-black outline-1 -outline-offset-1 outline-black/40 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                  />
                </div>

                <div className="mt-4 text-sm flex justify-between items-center"> 
                  <label htmlFor="Option1" className="inline-flex items-center gap-3">
                      <input 
                          type="checkbox" 
                          className="size-5 rounded-2xl border-gray-300 shadow-sm text-blue-600 focus:ring-blue-600" 
                          id="Option1" 
                      />
                      <span className="font-semibold text-gray-500"> Remember me </span>
                  </label>
                  <a href="#" className="font-semibold text-blue-400 hover:text-blue-300">
                      Forgot password?
                  </a>
              </div>
                

              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-2xl bg-blue-400 px-3 py-3 text-md/6 font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Login
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}