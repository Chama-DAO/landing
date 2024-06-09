import { HeroParallax } from "./ui/hero-parallax";
import icp from "../assets/icp.jpeg";
import token from "../assets/token.png";
import nodes from "../assets/nodes.jpeg";
import metrics from "../assets/metrics.png";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Finance Teams",
    link: "https://gomoonbeam.com",
    thumbnail: metrics,
    desc: "Users can create or join chamas, which operate as independent mini-DAOs of the whole Chama DAO.",
  },
  {
    title: "Educational Content",
    link: "https://cursor.so",
    thumbnail: nodes,
    desc: "Users can post and monetize educational content on the platform.",
  },
  {
    title: "Grants",
    link: "https://userogue.com",
    thumbnail: token,
    desc: "Organizations can offer grants to chams based on the projects being undertaken by the chama.",
  },

  {
    title: "Staking & Voting",
    link: "https://editorially.org",
    thumbnail: icp,
    desc: "Users can stake tokens to determine voting power and use their staked amount as loan collateral.",
  },
  {
    title: "Grants",
    link: "https://userogue.com",
    thumbnail: token,
    desc: "Organizations can offer grants to chams based on the projects being undertaken by the chama.",
  },
  {
    title: "Finance Teams",
    link: "https://gomoonbeam.com",
    thumbnail: metrics,
    desc: "Users can create or join chamas, which operate as independent mini-DAOs of the whole Chama DAO.",
  },
  {
    title: "Staking & Voting",
    link: "https://editorially.org",
    thumbnail: icp,
    desc: "Users can stake tokens to determine voting power and use their staked amount as loan collateral.",
  },
  {
    title: "Educational Content",
    link: "https://cursor.so",
    thumbnail: nodes,
    desc: "Users can post and monetize educational content on the platform.",
  },
];
