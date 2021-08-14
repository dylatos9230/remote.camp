import React from "react";

interface Props {}

const Footer: React.FC<Props> = (Props) => {
  return (
    <footer className="mx-auto sm:px-6 lg:px-8 bg-white dark:bg-gray dark:text-white-100 relative pt-1 border-gray-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-white-100 dark:hover:text-white-200 uppercase mb-2">
                Remote jobs
              </span>
              <span className="my-2">
                <a href="/remote-jobs/remote-frontend-jobs">
                  remote-frontend-jobs
                </a>
              </span>
              <span className="my-2">
                <a href="/remote-jobs/remote-backend-jobs">
                  remote-backend-jobs
                </a>
              </span>
              <span className="my-2">
                <a href="/remote-jobs/remote-ui-ux-jobs">remote-ui-ux-jobs</a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-white-100 dark:hover:text-white-200 uppercase mt-4 md:mt-0 mb-2">
                Categories
              </span>
              <span className="my-2">
                <a href="/categories/design">Design</a>
              </span>
              <span className="my-2">
                <a href="/categories/marketing">Marketing</a>
              </span>
              <span className="my-2">
                <a href="/categories/fullstack">Fullstack</a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-white-100 dark:hover:text-white-200 uppercase mt-4 md:mt-0 mb-2">
                Company
              </span>
              <span className="my-2">
                <a href="/about-us">About us</a>
              </span>
              <span className="my-2">
                <a href="/privacy-policy">Privacy Policy</a>
              </span>
              <span className="my-2">
                <a href="/terms-of-service">Terms of Service</a>
              </span>
              <span className="my-2">
                <a href="/faqs">FAQs</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-gray-700 dark:text-white-100 dark:hover:text-white-200 font-semibold mb-2">
              © 2020 - 2021 All rights reserved by Remote Camp Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
