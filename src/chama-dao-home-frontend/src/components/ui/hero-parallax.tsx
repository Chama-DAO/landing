import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";
import hb from "../../assets/hb1.jpeg";
import { HoverBorderGradient } from "./hover-border-gradient";
import { MdLaunch } from "react-icons/md";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    desc: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className=" py-20 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <Link
        to="/app"
        className="w-full flex items-center justify-center mt-10 md:hidden"
      >
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className=" bg-white text-black flex items-center space-x-2 text-xl font-body"
        >
          <MdLaunch />
          <span>Launch App</span>
        </HoverBorderGradient>
      </Link>
      {/* <h1 className="text-2xl md:text-7xl font-bold text-center font-heading text-primary">
        Features
      </h1> */}
      {/* <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export const Header = () => {
  return (
    <div className=" max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <div
        className="absolute inset-0 bg-repeat md:bg-cover bg-center bg-contain opacity-30"
        style={{
          backgroundImage: `url(${hb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <h1 className="text-2xl md:text-7xl font-bold font-heading text-primary leading-relaxed py-4 relative">
        Empower you community <br />
        with ChamaDAO
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 font-body text-text relative">
        ChamaDAO is a decentralized platform designed to empower traditional
        Chama groups with modern blockchain solutions, offering financial growth
        and stability
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    desc: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link to={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-16 font-heading font-bold left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
      <h2
        className="absolute bottom-4 font-body
       left-4 opacity-0 group-hover/product:opacity-100 text-white"
      >
        {product.desc}
      </h2>
    </motion.div>
  );
};
