import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-8 lg:pt-16">
      {/* Newsletter Section */}
      <div className="gadgetContainer">
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center py-4">
          <div className="flex gap-2">
            <span className="text-3xl text-[#FF497C]">
              <i className="bx bxs-envelope"></i>
            </span>
            <p className="font-semibold text-3xl lg:text-2xl">
              Send Newsletter
            </p>
          </div>

          <div className="flex gap-2 md:flex-row flex-col justify-center items-center">
            <p className="font-medium text-lg md:w-1/2 w-full text-black/60">
              Sign-up for our newsletter
            </p>

            <div className="flex gap-2 shrink">
              <input
                placeholder="Enter email"
                type="text"
                className="px-2 py-1 border rounded focus:outline-[#FF497C]"
              />
              <button className="px-3 py-2 bg-[#FF497C] hover:bg-[#ab3154] text-sm text-white font-semibold rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="gadgetContainer">
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          {/* Bottom Bar */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2023
              <Link to="/" className="hover:underline">
                Gigagadgets™
              </Link>
              . All Rights Reserved.
            </span>

            {/* Social Icons - FIXED SVG PATHS */}
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              {/* Facebook */}
              <Link to="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              {/* Discord - Fixed Path from Flowbite Library */}
              <Link to="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Discord</span>
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.21a15.724 15.724 0 0 0 4.963 2.52 12.564 12.564 0 0 0 1.067-1.734 10.988 10.988 0 0 1-1.717-.814 8.29 8.29 0 0 0 1.619.84 16.212 16.212 0 0 0 8.776 0 8.274 8.274 0 0 0 1.623-.84 11.086 11.086 0 0 1-1.721.813 12.588 12.588 0 0 0 1.065 1.734 15.662 15.662 0 0 0 4.969-2.52 17.456 17.456 0 0 0-3.885-11.654ZM7.317 11.202a2.27 2.27 0 0 1-2.107-2.476 2.27 2.27 0 0 1 2.107-2.476 2.27 2.27 0 0 1 2.107 2.476 2.27 2.27 0 0 1-2.107 2.476Zm7.366 0a2.27 2.27 0 0 1-2.107-2.476 2.27 2.27 0 0 1 2.107-2.476 2.27 2.27 0 0 1 2.107 2.476 2.27 2.27 0 0 1-2.107 2.476Z" />
                </svg>
              </Link>

              {/* Twitter (X) - Fixed Path from Flowbite Library */}
              <Link to="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.996A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05a4.057 4.057 0 0 0 3.283 3.962 4.189 4.189 0 0 1-1.847.07 4.071 4.071 0 0 0 3.826 2.819A8.295 8.295 0 0 1 0 14.301 11.488 11.488 0 0 0 6.29 16.142c7.545 0 11.67-6.23 11.67-11.633 0-.178-.004-.355-.012-.533A8.354 8.354 0 0 0 20 1.892Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
