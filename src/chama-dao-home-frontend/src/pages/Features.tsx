import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

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
          src="https://familybank.co.ke/family-bank/wp-content/uploads/2019/08/chama-account-1200px.jpg"
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
          src="https://cdn.standardmedia.co.ke/images/wysiwyg/images/Xu4dWpNkruv6fgPBD1cPVbSAoXrtGEMwvPeytuyl.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Loand and Grants",
    description:
      "As a chama you can receive grants or loans with little or paperwork from different smart contracts on the platform depending on the amount you've staked. Individuals can also get quick loans using their staked amount as collateral.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://cdn.standardmedia.co.ke/images/wednesday/riding_on_chamas61d4b79eb0cfe.jpg"
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
          src="https://images.squarespace-cdn.com/content/v1/5a5baed98dd041eb3ccb3b54/1541536856890-0CME1CWRQX6JDG62LDJC/IMG_6745.jpg"
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
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
