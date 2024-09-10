import React from 'react'
import ChatBots from "../assets/ChatBots.png";
function Navbar() {
  return (
    <div className="border-solid border divide-red-600 text-white">
      <div className="relative w-full  bg-slate-700 font-medium">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-10">
            <span className="size-10 rounded-full">
              <img
                src={ChatBots}
                alt=""
              />
            </span>
            <span className="font-bold  text-3xl hover:text-green-700">
              TicketMitra
            </span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center text-sm  font-medium text-white-600 hover:text-green-700"
                >
                  Home
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center text-sm  font-medium text-white-600 hover:text-green-700"
                >
                  About
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center text-sm  font-medium text-white-600 hover:text-green-700"
                >
                  Contact
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-7 lg:block">
            <button
              type="button"
              className="rounded-md bg-transparent px-3 py-2 text-sm   font-medium text-white-600 hover:text-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              Sign In
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm   font-medium text-white-600 hover:text-green-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log In
            </button>
          </div>
          <div className="size-8 m-4 rounded-full">
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
