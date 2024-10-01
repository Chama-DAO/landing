import transparency from "../../public/transparency.jpg";
import secure from "../../public/securevault.jpg";
import data from "../../public/sata.avif";
import decision from "../../public/decision.png";
import decentralized from "../../public/descentralizacion.webp";
import wallet from "../../public/wallet.avif";
import member from "../../public/welcome.jpg";
import { LayoutGrid } from "./ui/layout-grid";

export default function Features() {
  return (
    <div className="h-screen py-20 w-full">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text2xl font-heading">
        Click to see what ChamaDAO Solves for You
      </h2>
      <LayoutGrid cards={cards} />
      <div className="w-full flex items-center justify-center">
        <a href="/whitepaper">
          <button className=" bg-primary rounded-md px-4 py-2 font-body text-white text-lg">
            Learn more
          </button>
        </a>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-gray-300 font-heading">
        Full Transparency
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-gray-200  font-body">
        Say goodbye to hidden financial records. ChamaDAO’s blockchain-powered
        ledger ensures that every transaction is visible and immutable, building
        trust among all members.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-gray-300">
        Decentralized Accountability
      </p>
      <p className="font-normal text-base my-4 max-w-lg  text-gray-200 font-body">
        Ensure that no single person has disproportionate control. With
        decentralized governance, all decisions are made collectively, and every
        action is recorded on the blockchain.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-gray-300 font-heading">
        Efficient Decision-Making
      </p>
      <p className="font-normal text-base my-4 max-w-lg font-body text-gray-200">
        Streamline your group’s decision-making process with automated voting
        mechanisms, reducing delays and empowering every member to have their
        voice heard instantly.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-gray-300">
        Frictionless Transactions
      </p>

      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 text-gray-200 font-body">
        Manage contributions and withdrawals quickly and affordably. ChamaDAO
        integrates with your local banks & mobile money providers, reducing
        transaction fees and increasing operational efficiency.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: transparency,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: decentralized,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-2",
    thumbnail: decision,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail: wallet,
  },
];
