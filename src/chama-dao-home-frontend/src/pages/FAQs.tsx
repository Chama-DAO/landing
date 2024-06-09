import React from "react";
import { Link } from "react-router-dom";
import { Ask } from "../components/Ask";

function FAQs() {
  return (
    <div className="max-w-[1140px] my-0 mx-auto mt-4 sm:mt-12">
      <h1 className="text-3xl text-text font-bold text-center mb-4 font-heading">
        Frequently Asked Questions
      </h1>
      <div className="space-y-1 px-4">
        <details
          className="group border-s-4 border-accent bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Why Chama DAO?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 font-body">
            Chama DAO is a decentralized autonomous organization that aims to
            empower communities to pool their resources and invest in impactful
            projects. By leveraging the power of blockchain technology, Chama
            DAO enables members to participate in a more inclusive and
            transparent financial system. Whether you're looking to invest in
            sustainable projects, earn rewards, or participate in governance,
            Chama DAO has something for everyone. And by retaining the core and
            robust chama features we ensure that users feel at home with more
            power, security and transparency.
          </p>
        </details>

        <details className="group border-s-4 border-accent bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900 font-heading">
              About ChamCoin - CMC
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 font-body">
            ChamCoin (CMC) is the native token of Chama DAO. It is used to
            participate in governance, vote on proposals, and earn rewards. CMC
            holders can also stake their tokens to earn additional rewards and
            participate in the decision-making process. By holding CMC, users
            can shape the future of Chama DAO and help build a more inclusive
            and sustainable financial system. Early adopters & project investors
            will also receive airdrops as outlined on our{" "}
            <Link
              to="/whitepaper"
              className="underline text-primary font-semibold"
            >
              tokenomics section.
            </Link>
            .
          </p>
        </details>
        <details className="group border-s-4 border-accent bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900 font-heading">
              What are canisters and how do they play a role in Chama DAO and
              the Internet Computer
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 font-body">
            On the Internet Computer, smart contracts are called canisters.
            These are self-contained units that bundle together program code and
            its current state. They offer several advantages including:{" "}
            <strong>Isolation</strong> Each canister operates in isolation,
            preventing conflicts with other canisters. <strong>Security</strong>
            : Code execution within canisters is secure and tamper-proof.{" "}
            <strong>Flexibility</strong>: Canisters can be written in various
            programming languages, allowing for flexibility in development.
          </p>
        </details>
        <details className="group border-s-4 border-accent bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Why build on the Internet Computer
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 font-body">
            The Internet Computer is a revolutionary blockchain project that
            aims to reinvent the internet as we know it. By providing a secure,
            scalable, and efficient platform for building decentralized
            applications, the Internet Computer opens up new possibilities for
            developers and users alike. Chama DAO leverages the Internet
            Computer to create a more inclusive and accessible financial system
            that puts the power back in the hands of the people.
          </p>
        </details>
      </div>
      <Ask />
    </div>
  );
}

export default FAQs;
