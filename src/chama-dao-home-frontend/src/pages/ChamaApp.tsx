import React from "react";
import appImage from "../assets/app.webp";
import useCountDown from "../hooks/useCountDown";
import { Link } from "react-router-dom";

function ChamaApp() {
  const { days, hours, minutes, seconds } = useCountDown();

  return (
    <div>
      <div className="flex h-screen flex-col bg-white max-w-[1100px] mx-auto my-0">
        <img
          src={appImage}
          alt=""
          className="h-64 w-full object-cover md:rounded-md shadow-md"
        />

        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            {days > 0 && hours > 0 && minutes > 0 && seconds > 0 ? (
              <section>
                <div className="my-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl font-body">
                    Coming soon
                  </h1>

                  <p className="mt-4 text-gray-500 font-body">
                    This will be an awesome place soon😊
                  </p>
                  <div>
                    <h1 className="mt-4 text-gray-500 font-body my-4">
                      Alpha 1 Launch Countdown
                    </h1>
                    <span className="mx-1 font-body text-gray-500 text-sm font-bold p-2 shadow rounded-md bg-gray-200">
                      {days}d{" "}
                    </span>
                    <span className="mx-1 font-body text-gray-500 text-sm font-bold p-2 shadow rounded-md bg-gray-200">
                      {hours}h{" "}
                    </span>
                    <span className="mx-1 font-body text-gray-500 text-sm font-bold p-2 shadow rounded-md bg-gray-200">
                      {minutes}m{" "}
                    </span>
                    <span className="mx-1 font-body text-gray-500 text-sm font-bold p-2 shadow rounded-md bg-gray-200">
                      {seconds}s
                    </span>
                  </div>
                </div>
              </section>
            ) : (
              <div>
                <h1 className="text-gray-900 font-semibold font-body text-lg">
                  The first Alpha test for ChamaDAO is LIVE🚀
                </h1>
                <p className="text-gray-500 font-body">
                  Checkout our{" "}
                  <a
                    href="https://x.com/thechamadao?s=21"
                    className="text-blue-600"
                    target="_blank"
                  >
                    X/Twitter
                  </a>{" "}
                  page for more details
                </p>
              </div>
            )}
          </div>

          <Link
            to="/"
            className="mt-6 inline-block rounded bg-primary px-5 py-3 text-sm font-medium text-white font-body"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChamaApp;
