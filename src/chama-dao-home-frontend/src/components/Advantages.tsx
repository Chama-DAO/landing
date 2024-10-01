import { HoverEffect } from "./ui/hover-effect";

export function Advantages() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl font-heading">
        Why the Internet Computer?
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Data Ownership",
    description:
      "Control your own identities and data within the DAO. No more third-party data breaches.",
    link: "https://internetcomputer.org/",
  },
  {
    title: "Reverse Gas Model",
    description:
      "ChamaDAO uses a reverse gas model to no more gas fees and that the DAO pays for all transactions.",
    link: "https://internetcomputer.org/",
  },
  {
    title: " Speed & Scalability",
    description:
      " ChamaDAO is built on the Internet Computer, which is fast, secure and scalable.",
    link: "https://internetcomputer.org/",
  },
  {
    title: "Interoperability",
    description:
      "Easily integrate with other Web3 applications and services built on ICP or other blockchains.",
    link: "https://internetcomputer.org/",
  },
  {
    title: "On-chain Gorvernance",
    description:
      "ChamaDAO is governed by its users, who can vote on proposals and shape the future of the DAO.",
    link: "https://internetcomputer.org/",
  },
  {
    title: "Decentralized Finance",
    description:
      "ChamaDAO offers a suite of DeFi products, including lending, borrowing, staking and yield farming.",
    link: "https://internetcomputer.org/",
  },
];
