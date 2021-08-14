import React from "react";
import "./Main.module.css";

interface Props {}

const Main: React.FC<Props> = (Props) => {
  return (
    <div className=" min-h-screen ">
      <header className="bg-hero-pattern py-2 px-2 sm:px-6 lg:px-8 min-w-full mx-auto  bg-gray-100 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center mt-2 flex flex-col">
          <h1 className="sm:text-4xl text-gray-600 dark:text-white-300 subpixel-antialiased font-semibold tracking-wide">
            The
            <span className="line-through font-normal text-gray-500 dark:text-white-700"> future </span>
            <span> present </span>
              of work is
            <span className="text-brand font-bold tracking-wide italic"> Remote Camp</span>
          </h1>
          <h2 className="text-base mt-2 text-gray-500 dark:text-white-700">
            Get a high paying remote job from anywhere
          </h2>
        </div>
        <div className="lg:max-w-4xl md:max-w-prose mx-auto flex flex-col mt-6 justify-center items-center">
          <div className="relative w-full">
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-300">
            {/*  logo */}
            </div>
            <input
              type="search"
              className=" block w-full p-4 placeholder-gray-400 bg-white-100 rounded-full shadow outline-none focus:outline-none sm:leading-5 pl-14 dark:bg-gray dark:text-white-600"
              name="Search jobs"
              aria-label="Search jobs"
              placeholder="Search Job title, Technologies"
            />
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 mb-1">
              <a href="/categories/remote-all-categories-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-white-300  bg-brand-400  hover:text-white-400 dark:hover:bg-gray-300 dark:bg-gray-300 dark:text-gray dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  All Categories
                </span>
              </a>
              <a href="/categories/remote-frontend-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Frontend
                </span>
              </a>
              <a href="/categories/remote-backend-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Backend
                </span>
              </a>
              <a href="/categories/remote-fullstack-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Fullstack
                </span>
              </a>
              <a href="/categories/remote-mobile-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Mobile
                </span>
              </a>
              <a href="/categories/remote-ux-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  UX
                </span>
              </a>
              <a href="/categories/remote-design-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Design
                </span>
              </a>
              <a href="/categories/remote-product-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Product
                </span>
              </a>
              <a href="/categories/remote-marketing-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Marketing
                </span>
              </a>
              <a href="/categories/remote-devops-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Devops
                </span>
              </a>
              <a href="/categories/remote-qa-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  QA
                </span>
              </a>
              <a href="/categories/remote-engineering-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Engineering
                </span>
              </a>
              <a href="/categories/remote-others-jobs">
                <span className="rounded-full py-1.5 px-3 text-sm text-gray-400 dark:text-white-800 bg-brand-50 dark:bg-gray hover:bg-brand-400 hover:text-white-300 dark:hover:bg-gray-300 dark:hover:text-gray border-gray-500 dark:border-white-900 cursor-pointer flex justify-center items-center">
                  Others
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="bg-white-400 sm:bg-white-200 dark:bg-gray-800 sm:p-10 mx-auto md:max-w-prose lg:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-0">
          <a href="/remote-jobs/senior-devops-engineer-at-rebilly-aug-13th-2021">
            <div className="flex flex-col w-full gap-1 p-2 cursor-pointer bg-pure-white hover:bg-white-300 dark:bg-gray-600 dark:hover:bg-gray sm:rounded sm:p-4 sm:border-none sm:shadow-card">
              <div className="grid grid-cols-4">
                <div className="flex items-center flex-1 col-span-3">
                  <div className="flex flex-row items-start gap-1">
                    <div className="flex items-center justify-center flex-shrink-0 h-14 w-14">
                      <img
                        className="p-1 bg-transparent rounded-lg h-14 w-14"
                        src="https://remoteok.io/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=50/https://remoteOK.io/assets/jobs/b7ad89414b676a766292dfea051626df1628890373.png?1628890373"
                        alt="Logo of the company"
                      />
                    </div>
                    <div className="text-left">
                      <h2 className="text-base font-semibold text-gray-500 dark:text-white-600">
                        Senior DevOps Engineer
                      </h2>
                      <h3 className="text-sm text-gray-400 dark:text-white-800">
                        Rebilly
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse flex-none">
                  <div className="text-base text-right">
                    <span className="font-semibold text-gray-400 dark:text-white-700">
                      $60.0k - $170.0k
                    </span>
                    <div className="text-xs leading-5 text-gray-300 dark:text-white-800">
                      about 20 hours
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between flex-1">
                <div className="flex flex-wrap items-center content-center justify-center gap-1">
                  <span className="py-0.5 px-2 rounded-full text-xs text-gray bg-lavender dark:text-white-300 dark:bg-gray-400 hover:underline">
                    gitops
                  </span>
                </div>
                <div className="text-right">
                  <span className="py-0.5 px-2 rounded-full text-xs tracking-wide text-gray dark:text-white-700 dark:bg-gray-400">
                    🌏 Worldwide
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="/remote-jobs/senior-devops-engineer-at-rebilly-aug-13th-2021">
            <div className="flex flex-col w-full gap-1 p-2 cursor-pointer bg-pure-white hover:bg-white-300 dark:bg-gray-600 dark:hover:bg-gray sm:rounded sm:p-4 sm:border-none sm:shadow-card">
              <div className="grid grid-cols-4">
                <div className="flex items-center flex-1 col-span-3">
                  <div className="flex flex-row items-start gap-1">
                    <div className="flex items-center justify-center flex-shrink-0 h-14 w-14">
                      <img
                        className="p-1 bg-transparent rounded-lg h-14 w-14"
                        src="https://remoteok.io/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=50/https://remoteOK.io/assets/jobs/b7ad89414b676a766292dfea051626df1628890373.png?1628890373"
                        alt="Logo of the company"
                      />
                    </div>
                    <div className="text-left">
                      <h2 className="text-base font-semibold text-gray-500 dark:text-white-600">
                        Senior DevOps Engineer
                      </h2>
                      <h3 className="text-sm text-gray-400 dark:text-white-800">
                        Rebilly
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse flex-none">
                  <div className="text-base text-right">
                    <span className="font-semibold text-gray-400 dark:text-white-700">
                      $60.0k - $170.0k
                    </span>
                    <div className="text-xs leading-5 text-gray-300 dark:text-white-800">
                      about 20 hours
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between flex-1">
                <div className="flex flex-wrap items-center content-center justify-center gap-1">
                  <span className="py-0.5 px-2 rounded-full text-xs text-gray bg-lavender dark:text-white-300 dark:bg-gray-400 hover:underline">
                    gitops
                  </span>
                </div>
                <div className="text-right">
                  <span className="py-0.5 px-2 rounded-full text-xs tracking-wide text-gray dark:text-white-700 dark:bg-gray-400">
                    🌏 Worldwide
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="/remote-jobs/senior-devops-engineer-at-rebilly-aug-13th-2021">
            <div className="flex flex-col w-full gap-1 p-2 cursor-pointer bg-pure-white hover:bg-white-300 dark:bg-gray-600 dark:hover:bg-gray sm:rounded sm:p-4 sm:border-none sm:shadow-card">
              <div className="grid grid-cols-4">
                <div className="flex items-center flex-1 col-span-3">
                  <div className="flex flex-row items-start gap-1">
                    <div className="flex items-center justify-center flex-shrink-0 h-14 w-14">
                      <img
                        className="p-1 bg-transparent rounded-lg h-14 w-14"
                        src="https://remoteok.io/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=50/https://remoteOK.io/assets/jobs/b7ad89414b676a766292dfea051626df1628890373.png?1628890373"
                        alt="Logo of the company"
                      />
                    </div>
                    <div className="text-left">
                      <h2 className="text-base font-semibold text-gray-500 dark:text-white-600">
                        Senior DevOps Engineer
                      </h2>
                      <h3 className="text-sm text-gray-400 dark:text-white-800">
                        Rebilly
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse flex-none">
                  <div className="text-base text-right">
                    <span className="font-semibold text-gray-400 dark:text-white-700">
                      $60.0k - $170.0k
                    </span>
                    <div className="text-xs leading-5 text-gray-300 dark:text-white-800">
                      about 20 hours
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between flex-1">
                <div className="flex flex-wrap items-center content-center justify-center gap-1">
                  <span className="py-0.5 px-2 rounded-full text-xs text-gray bg-lavender dark:text-white-300 dark:bg-gray-400 hover:underline">
                    gitops
                  </span>
                </div>
                <div className="text-right">
                  <span className="py-0.5 px-2 rounded-full text-xs tracking-wide text-gray dark:text-white-700 dark:bg-gray-400">
                    🌏 Worldwide
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="/remote-jobs/senior-devops-engineer-at-rebilly-aug-13th-2021">
            <div className="flex flex-col w-full gap-1 p-2 cursor-pointer bg-pure-white hover:bg-white-300 dark:bg-gray-600 dark:hover:bg-gray sm:rounded sm:p-4 sm:border-none sm:shadow-card">
              <div className="grid grid-cols-4">
                <div className="flex items-center flex-1 col-span-3">
                  <div className="flex flex-row items-start gap-1">
                    <div className="flex items-center justify-center flex-shrink-0 h-14 w-14">
                      <img
                        className="p-1 bg-transparent rounded-lg h-14 w-14"
                        src="https://remoteok.io/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=50/https://remoteOK.io/assets/jobs/b7ad89414b676a766292dfea051626df1628890373.png?1628890373"
                        alt="Logo of the company"
                      />
                    </div>
                    <div className="text-left">
                      <h2 className="text-base font-semibold text-gray-500 dark:text-white-600">
                        Senior DevOps Engineer
                      </h2>
                      <h3 className="text-sm text-gray-400 dark:text-white-800">
                        Rebilly
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse flex-none">
                  <div className="text-base text-right">
                    <span className="font-semibold text-gray-400 dark:text-white-700">
                      $60.0k - $170.0k
                    </span>
                    <div className="text-xs leading-5 text-gray-300 dark:text-white-800">
                      about 20 hours
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between flex-1">
                <div className="flex flex-wrap items-center content-center justify-center gap-1">
                  <span className="py-0.5 px-2 rounded-full text-xs text-gray bg-lavender dark:text-white-300 dark:bg-gray-400 hover:underline">
                    gitops
                  </span>
                </div>
                <div className="text-right">
                  <span className="py-0.5 px-2 rounded-full text-xs tracking-wide text-gray dark:text-white-700 dark:bg-gray-400">
                    🌏 Worldwide
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Main;
