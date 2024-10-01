import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import transparency from "../../public/transparency.jpg";
import secure from "../../public/securevault.jpg";
import data from "../../public/sata.avif";
import decision from "../../public/decision.png";
import decentralized from "../../public/descentralizacion.webp";
import wallet from "../../public/wallet.avif";
import member from "../../public/welcome.jpg";

export function ProblemsSolved() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "  ",
    description: "",
    header: (
      <img src={transparency} alt="transparency" className="object-contain" />
    ),
  },
  {
    title: "Secure Fund Management",
    description:
      " Funds are managed through automated smart contracts, ensuring no single member can mismanage contributions. Every transaction is secure, transparent, and verifiable.",
    header: <img src={secure} alt="secure" className="object-contain" />,
  },
  {
    title: "",
    description: " ",
    header: <img src={decision} alt="decision" className="object-contain" />,
  },
  {
    title: "Access Historical Data",
    description:
      "View and analyze historical data to make informed chama proposal and track progress.",
    header: <img src={data} alt="data" className="object-contain" />,
  },
  {
    title: "Decentralized Accountability",
    description: "",
    header: (
      <img src={decentralized} alt="decentralized" className="object-contain" />
    ),
  },
  {
    title: "Easy Member Onboarding",
    description:
      "Onboard new members quickly and efficiently. ChamaDAO automates the process, giving new members immediate access to voting and financial participation.",
    header: <img src={member} alt="member" className="object-contain" />,
  },
  {
    title: "",
    description: "",
    header: <img src={wallet} alt="wallet" className="object-contain" />,
  },
];
