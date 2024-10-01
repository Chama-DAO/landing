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
    title: "Phase 1: Genesis - Q4 2021",
    description: (
      <>
        <ul className="font-rem text-text leading-relaxed font-body py-2">
          <li className="py-2">
            <span className="text-primary font-semibold py-2">
              Alpha & Beta tests:
            </span>{" "}
            Conduct controlled alpha & beta test to gather feedback and improve
            the platform. We plan to have one alpha test and two beta test by
            the end of the 2024.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold py-2">
              Iteration Development:{" "}
            </span>{" "}
            Implement feedback from the tests to improve the platform and add
            new features based on user feedback.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold py-2">
              Launch preparation:
            </span>{" "}
            Prepare the platform for the mainnet launch by conducting security
            audits and finalizing the platform's features. Plus increased
            marketing efforts to attract more users and hit the ground running.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: icpImage,
  },
  {
    title: "Phase 2: Product Launch - Q1 2025",
    description: (
      <>
        <ul className="leading-relaxed text-text font-body">
          <li className="py-2">
            <span className="text-primary font-semibold">
              Launch the platform:
            </span>{" "}
            Release The ChamaDAO to the public and start onboarding users.
            Continued marketing efforts to attract more users.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">CMC Token</span> Begin
            working on the ChamaDAO token and its integration with the ICP
            ecosystem. As well as raising funds for the project. Also intense
            marketing efforts to popularize the CMC token to our user base.
          </li>
          <li className="py-2">
            <span className="text-primary font-semibold">
              Finalize ChamaDAO features:
            </span>{" "}
            Implement any remaining major features that were not included in the
            initial launch and beta tests. This includes features such as
            staking, voting, and governance mechanisms.
          </li>
        </ul>
      </>
    ),
    badge: "Upcoming",
    image: prelaunch,
  },
  {
    title: "Phase 3: Educational content & Investments Q2 2025",
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
              Investment Application and Management:
            </span>{" "}
            Allow investors to setup grants & investments for different chamas
            depending on the chama's financial goals and projects. Also enable
            chamas to apply for these grants.
          </li>
        </ul>
      </>
    ),
    badge: "Upcoming",
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
    badge: "Upcoming",
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
    badge: "Future",
    image: finalImage,
  },
];
