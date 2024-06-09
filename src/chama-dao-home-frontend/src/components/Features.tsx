import icp from "../assets/icp.jpeg";
import token from "../assets/token.png";
import nodes from "../assets/nodes.jpeg";
import metrics from "../assets/metrics.png";
import { LayoutGrid } from "./ui/layout-grid";

export default function Features() {
  return (
    <div className="h-screen py-20 w-full">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading">
        Features
      </h2>
      <LayoutGrid cards={cards} />
      <div className="w-full flex items-center justify-center">
        <a href="/whitepaper">
          <button className=" bg-primary rounded-md px-4 py-2 font-body text-white text-2xl">
            More Features
          </button>
        </a>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white font-heading">
        Chamas(Finance Teams)
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 text-white font-body">
        Users can create or join chamas, which operate as independent mini-DAOs
        of the whole Chama DAO.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Educational Content</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 text-white font-body">
        Users can post and monetize educational content on the platform earning
        tokens.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white font-heading">
        Staking and Voting
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 font-body text-white">
        Users can stake tokens to determine voting power and use their staked
        amount as loan collateral.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Liquidity Provision</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 text-white font-body">
        Users and chamas can provide liquidity to canisters and earn interest.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: token,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: icp,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: metrics,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: nodes,
  },
];
