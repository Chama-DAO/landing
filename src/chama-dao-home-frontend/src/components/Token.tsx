import React, { useEffect, useState } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { Link } from "react-router-dom";

function Token() {
  const [price, setPrice] = useState<number>(0);

  const fetchPrice = async () => {
    const res = await fetch(
      "https://www.binance.com/fapi/v1/ticker/price?symbol=ICPUSDT"
    );
    const data = await res.json();
    return data?.price ? data.price : 0;
  };
  useEffect(() => {
    const setTokenPrice = async () => {
      let fetchedPrice = await fetchPrice();
      setPrice(fetchedPrice);
      //   console.log(price);
    };
    setTokenPrice();
  }, []);

  return (
    <div className="mt-12">
      <h1 className=" text-center text-3xl px-2 font-extrabold text-gray-900 py-10 sm:text-5xl font-heading">
        The Token Powering Impact
      </h1>{" "}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl font-heading">
                    ChamCoin - CMC
                  </h2>

                  <p className="mt-4 text-gray-500 font-body">
                    CMC is Chama DAO's native token, unlocking a world of
                    collective impact and governance. Hold CMC to invest in
                    impactful projects, vote on key decisions, get loans and
                    educational materials and shape the future of the DAO.
                  </p>
                </header>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  <Link to="/whitepaper">
                    <div className="flex justify-between gap-2 items-center text-white">
                      <MdGeneratingTokens />
                      <p className="font-body">See Whitepaper</p>
                    </div>
                  </Link>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block">
                    <img
                      src="https://images.ctfassets.net/q5ulk4bp65r7/5Dhk0rBQjluyfM7qXWuXC4/d3be5bb4b28724813348f9d8f2de8d56/Learn_Illustration_What_is_a_Token.jpg"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 font-heading">
                        Token Price
                      </h3>

                      <p className="mt-1 text-sm text-gray-700 font-body">
                        undisclosed
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.binance.com/en/price/internet-computer"
                    target="_blank"
                    className="group block"
                  >
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/024/092/997/original/internet-computer-icp-glass-crypto-coin-3d-illustration-free-png.png"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 font-heading">
                        ICP Live Price
                      </h3>

                      <p className="mt-1 text-sm text-gray-700 font-body">
                        ${price}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Token;
