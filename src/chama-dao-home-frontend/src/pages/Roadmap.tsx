import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import icpImage from "../assets/icp.jpeg";
import prelaunch from "../assets/metrics.png";
import launch from "../assets/nodes.jpeg";
import postLaunch from "../assets/token.png";
import finalImage from "../assets/launch.jpg";

export default function Roadmap() {
  return (
    <TracingBeam className="px-6">
      <h1 className="text-4xl font-bold text-text text-center font-rem my-4 font-heading">
        Roadmap
      </h1>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative mb-10">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2
              className={`rounded-full text-sm w-fit px-4 py-1 mb-4 font-body font-semibold ${
                item.badge === "Done"
                  ? "bg-accent text-black"
                  : "bg-primary text-white"
              }`}
            >
              {item.badge}
            </h2>

            <p className={twMerge("font-rem text-xl mb-4 text-primary")}>
              {item.title}
            </p>

            <div className="text-sm text-gray-500 prose prose-sm dark:prose-invert ">
              {item?.image && (
                <img
                  src={item.image}
                  alt="roadmap thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Phase 1: Genesis",
    description: (
      <>
        <ul className="font-rem text-text leading-relaxed font-body py-2">
          <li className="py-2">
            <span className="text-primary font-semibold py-2">
              User onboarding and education:
            </span>{" "}
            Educate users about the benefits of Chama DAO and how to get
            started.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold py-2">
              Wallet connection:{" "}
            </span>{" "}
            Connect users' wallets to the Chama DAO platform to enable token
            acquisition and airdrops
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold py-2">
              Basic staking features:
            </span>{" "}
            Allow users to stake their tokens to earn rewards and participate in
            governance.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold py-2">
              Chamas feature(Financial Teams)
            </span>{" "}
            Allow users to create and join chamas(financial teams)
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: icpImage,
  },
  {
    title: "Phase 2: Liquidity and Loans",
    description: (
      <>
        <ul className="leading-relaxed text-text font-body">
          <li className="py-2">
            <span className="text-primary font-semibold">
              Liquidity provision:
            </span>{" "}
            Allow users to provide liquidity to loaning canisters(smart
            contracts) and earn interest.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">Loaning system:</span>{" "}
            Implement a crypto loaning system and setup interest rates and other
            loans parameters.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">
              Chama Project and Financial goals:
            </span>{" "}
            Allow chama members to set and manage the goals and project of their
            chamas.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: prelaunch,
  },
  {
    title: "Phase 3: Educational content",
    description: (
      <>
        <ul className="font-rem leading-relaxed text-text font-body">
          <li className="py-2">
            <span className="text-primary font-semibold">
              Content creation:
            </span>{" "}
            Allow users to create and post educational content to the platform
            to earn some tokens
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">
              Content verification:
            </span>{" "}
            Use ICP's on chain AI to verify educational content posted by users.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">
              Grant Application and Management:
            </span>{" "}
            Allow investors to setup grants for different chamas depending on
            the chama's financial goals and projects. Also enable chamas to
            apply for these grants.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">
              Advanced staking and voting features:
            </span>{" "}
            Build on the staking and voting features implemented on the first
            phase to increase app's stability.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: launch,
  },
  {
    title: "Phase 4: Local Payment",
    description: (
      <>
        <ul className="text-text leading-relaxed font-body">
          <li className="py-2">
            <span className="text-primary font-semibold">
              Integrate M-Pesa Payment:
            </span>{" "}
            Allow users to buy and sell coin directly to their local mobile
            using{" "}
            <a
              href="https://www.safaricom.co.ke/main-mpesa/about-m-pesa"
              target="_blank"
              className="underline font-semibold text-primary"
            >
              M-Pesa
            </a>
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">User Feedback:</span>{" "}
            Collect feedback from early users and merchants to identify and
            address any immediate issues.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">
              Technology Refinement:
            </span>{" "}
            Make any necessary adjustments to smart contracts and platform
            features based on user feedback.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">
              Community Building:
            </span>{" "}
            Organize online events and contests to foster community spirit and
            increase engagement.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">Future Planning:</span>{" "}
            Begin planning the next phases of development, focusing on expanding
            merchant acceptance and additional features.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">
              Analytics and Tracking:
            </span>{" "}
            Implement basic analytics to monitor adoption rates and transaction
            volumes.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: postLaunch,
  },

  {
    title: "Future Plans",
    description: (
      <>
        <ul className="text-text leading-relaxed font-body">
          <li className="my-2">
            <span className="text-primary font-semibold">
              Mobile App Development:
            </span>{" "}
            Start developing a mobile wallet app for easier transactions.
          </li>
          <li className="my-2">
            <span className="text-primary font-semibold">
              Advanced Governance:
            </span>{" "}
            Develop and implement more sophisticated governance mechanisms based
            on community input.
          </li>
        </ul>
      </>
    ),
    badge: "Upcoming",
    image: finalImage,
  },
];
