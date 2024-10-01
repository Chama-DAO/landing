import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import edu from "../assets/edu.jpeg";
import stake from "../assets/loans.jpeg";
import loaning from "../assets/stake.jpeg";
import chamas from "../assets/chamas.jpeg";

const content = [
  {
    title: "Decentralized Accountability",
    description:
      "Ensure that no single person has disproportionate control. With decentralized governance, all decisions are made collectively, and every action is recorded on the blockchain.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          width={300}
          height={300}
          src={chamas}
          alt="Chamas"
          className="rounded-md h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Full Transparency",
    description:
      " Say goodbye to hidden financial records. ChamaDAO’s blockchain-powered ledger ensures that every transaction is visible and immutable, building trust among all members.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={stake}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: " Efficient Decision-Making",
    description:
      "Streamline your group’s decision-making process with automated voting mechanisms, reducing delays and empowering every member to have their voice heard instantly.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={edu}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Frictionless Transactions",
    description:
      "Manage contributions and withdrawals quickly and affordably. ChamaDAO integrates with your local banks & mobile money providers, reducing transaction fees and increasing operational efficiency.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={loaning}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function Features() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
