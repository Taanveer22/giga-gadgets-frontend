const Feedback = () => {
  return (
    <div>
      <div className="gadgetContainer py-24 mt-20 bg-linear-to-r from-orange-200 to-slate-300">
        {/* header */}
        <div className="text-center md:text-left mb-12">
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-quote-single-left"></i>
            </span>
            Testimonials
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold text-gray-900">
            Users Feedback
          </p>
        </div>

        {/* Container */}
        <div className="text-gray-600 body-font">
          <div className="mx-auto mt-8">
            <div className="flex flex-wrap -m-4">
              {/* Testimonial 1 */}
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 shadow-lg rounded">
                  <svg
                    xmlns="http://www.w3.org"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    I recently purchased the Apple MacBook Air, and I'm
                    impressed with its fantastic piece of technology. From
                    design to performance, it exceeded my expectations.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co.com/0sG0ppQ/girl2.jpg"
                      className="w-12 h-12 rounded-full shrink-0 object-cover object-center"
                    />
                    <span className="grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Mr X
                      </span>
                      <span className="text-gray-500 text-sm">DEVELOPER</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 shadow-lg p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    The HP Pavilion is a reliable and affordable line for
                    everyday computing. It offers good value for the price while
                    maintaining solid performance.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co.com/F3z1tvs/girl1.jpg"
                      className="w-12 h-12 rounded-full shrink-0 object-cover object-center"
                    />
                    <span className="grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Ms. Y
                      </span>
                      <span className="text-gray-500 text-sm">DESIGNER</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 shadow-lg p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    The Dell XPS is a powerhouse for creative professionals. Its
                    4K OLED display provides stunning color accuracy and deep
                    blacks for high-end editing.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="https://i.ibb.co.com/GngmQ5H/boy1.png"
                      className="w-12 h-12 rounded-full shrink-0 object-cover object-center"
                    />
                    <span className="grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Mr. Z
                      </span>
                      <span className="text-gray-500 text-sm">
                        VIDEO EDITOR
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
