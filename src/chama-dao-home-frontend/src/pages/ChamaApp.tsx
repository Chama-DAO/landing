import React from "react";

function ChamaApp() {
  return (
    <div>
      <div className="flex h-screen flex-col bg-white max-w-[1100px] mx-auto my-0">
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*foWIVJFs1URgyR7WxLWbUA.png"
          alt=""
          className="h-64 w-full object-cover"
        />

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl font-body">
              Coming soon
            </h1>

            <p className="mt-4 text-gray-500 font-body">
              This will be an awesome place soon😊
            </p>

            <a
              href="#"
              className="mt-6 inline-block rounded bg-primary px-5 py-3 text-sm font-medium text-white font-body"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChamaApp;
