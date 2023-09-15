const Footer = () => {
  return (
    <footer className="mt-4 px-8 pt-8 pb-4 lg:px-32 lg:pt-12 lg:pb-8 w-full bg-black tect-white">
      <div className="w-full flex flex-col content-center text-center pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Subscribe to our newsletter.
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">
        Sign up to receive updates on new collections, promotions, latest updates & more
        </p>
        <div className="mt-6 flex lg:px-64 md:px-32 sm:px-16 px-2 w-full">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-2 md:px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-white">
        <div className="py-4 text-center">
          <p>About Brand</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="py-4 text-center">
          <p>Customer Services</p>
          <p>Address</p>
          <p>clothifystore@gmail.com</p>
          <p>+94 77 123 4567</p>
          <p>+94 71 123 4567</p>
        </div>
        <div className="py-4 text-center">
          <p>Socials</p>
          <p>facebook</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="text-center text-white">
        <span>Copyright © 2023 Clothify Store. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
