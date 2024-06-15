import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import edu from "../assets/edu.jpeg";
import stake from "../assets/loans.jpeg";
import loaning from "../assets/stake.jpeg";
import chamas from "../assets/chamas.jpeg";

const content = [
  {
    title: "Finance Teams (Chamas)",
    description:
      "Chamas have been a robust structure used by local communities in Kenya and have proven how effective they can be when used correctly. Chama foster communal participation which is actually one of the main themes focused on by Chama DAO.",
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
    title: "Staking and Voting",
    description:
      "Be at the core every decision that is made by your chama. Unlike most traditional where some of the decisions are made by a few individuals, Chama DAO ensures all members of the Chama have a say in all decisions made.",
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
    title: "Loans and Grants",
    description:
      "As a chama you can receive grants or loans with little or paperwork from different smart contracts on the platform depending on the amount you've staked. Individuals can also get quick loans using their staked amount as collateral.",
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
  {
    title: "Educational Content",
    description:
      "Get access to a ton of educational materials from understanding crypto to how you can manage and scale a business of your choice both as an individual and as a chama. In addition you can become a content provider posting educational materials to the platform and earing some tokens.",
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
];
export default function Features() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
