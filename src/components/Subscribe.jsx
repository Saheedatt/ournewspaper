import React from "react";

function Subscribe() {
  return (
    <section className="flex flex-col items-center text-center p-4 border-b-2 border-solid- border-black bg-white">
      <h2 className="mb-2 font-bold text-xl">Sign up for Our Newsletter!</h2>
      <p className="mb-10 font-semibold">
        Stay updated with the latest news by subscribing here.
      </p>
      <form className="flex flex-col items-center">
        <input
          autoComplete="on"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email..."
          className="p-1 mr-4 w-68 border-b-2 border-black mb-3"
        />
        <button
          type="submit"
          className="bg-black px-2 py-1 text-white rounded cursor-pointer uppercase"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Subscribe;
