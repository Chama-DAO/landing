import { Link } from "react-router-dom";
import TokenDistribution from "../components/TokenDistribution";

const Whitepaper = () => {
  return (
    <div className="bg-white text-text font-body">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-heading text-primary mb-4">
          The ChamaDAO Whitepaper
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text mb-2">Abstract</h2>
          <p className="leading-relaxed">
            ChamaDAO aims to empower communities by integrating traditional
            Chama structures with DeFi on the ICP blockchain. By providing a
            platform for collective financial activities, educational resources,
            and grant opportunities, ChamaDAO will enhance financial inclusion
            and support economic growth in the communities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text mb-2">Introduction</h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Background on the Significance of Chamas in Financial Inclusion
          </h3>
          <p className="leading-relaxed">
            Chamas are traditional savings and investments groups that play a
            vital role in financial inclusion in many African communities,
            particularly in Kenya. These groups pool resources to save, invest,
            and lend among members, providing access to financial services where
            formal banking is often inaccessible or unaffordable.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Overview of DeFi and its Potential to Enhance Chamas
          </h3>
          <p className="leading-relaxed">
            DeFi leverages blockchain technology to offer financial services
            without intermediaries, making transactions more transparent,
            secure, and accessible. By integrating Chamas with DeFi, we can
            enhance their efficiency, security, and scalability. We can
            therefore decentralize these financial groups that are the supposed
            to be the blueprints of DAOs.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Introduction to ChamaDAO and its Vision
          </h3>
          <p className="leading-relaxed">
            ChamaDAO is a decentralized autonomous organization designed to
            bring Chamas into the digital age. Our vision is to create a
            decentralized platform where Chamas can manage their finances,
            access loans, earn interest, and receive grants all within a secure,
            transparent blockchain environment. And since chamas have
            historically been about collective action they will operate as
            mini-DAOs within the whole larger ChamaDAO, making decisions that
            affect them collectively & independently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Platform Architecture
          </h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Detailed Explanation of the ICP Blockchain
          </h3>
          <p className="leading-relaxed">
            The Internet Computer Protocol (ICP) is a blockchain technology that
            enables the development of decentralized applications (dApps) with
            high scalability, low costs, and enhanced security. More information
            about ICP can be found{" "}
            <span className="text-primary cursor-pointer">
              <a href="https://internetcomputer.org/">here</a>
            </span>
            .
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Description of the Smart Contract System (Canisters)
          </h3>
          <p className="leading-relaxed">
            Canisters are the smart contracts on the ICP blockchain that
            facilitate various operations within ChamaDAO. These canisters
            handle user authentication, transaction processing, staking,
            liquidity provision, and governance. They are designed to be secure,
            scalable, and efficient. In our platform these canisters will be
            responsible for processing transactions, managing user profiles, and
            executing financial & community operations,such as making a proposal
            to change an aspect of the chama a user is part of. There will also
            be canisters specifically for data storage and execution of commands
            set by chama members once a particular set of conditions(proposal)
            has passed. Actions such as releasing funds to a loanee or changing
            the interest rate on a loan will be handled automatically. This is
            just a tip of the ice berg of what can be achieved as far as
            automation and canister execution is concerned.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            User Profiles and Roles
          </h2>
          <p className="leading-relaxed">
            Users on ChamaDAO can sign up and create profiles providing optional
            information about themselves and their activities.User are allowed
            to specify their roles as either chama admins or just normal
            members. Chama admins will be responsible for creating the chama and
            inviting their fellow members, and from this point all the users
            have basically the same powers and functions as far as chama
            operations are concerned.In the future users will be able to stake
            the native ChamaDAO token to vote on proposals affecting the whole
            platform. The voting power will be determined based on the tokens
            staked and also transactions made through the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Chama (Finance Teams)
          </h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Definition & Structure
          </h3>
          <p className="leading-relaxed">
            A Chama is a group of members who pool resources for collective
            financial activities. Within ChamaDAO, each Chama operates as an
            independent DAO with decisions made collectively by its members. The
            important thing to note is that chama have always been{" "}
            <span className="italic text-primary">DAOs</span> in some sense as
            they are founded in the spirit of collective action and decision
            making. However, lack of transparency and effective data management
            has always been a challenge. ChamaDAO aims to solve this by
            providing a platform that is transparent, secure and efficient.
            Hence a chama will continue with operations as usual, but now
            on-chain, with verifiable data and automated processes.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Functionality: Creating, Joining, and Managing Chamas
          </h3>
          <p className="leading-relaxed">
            Users(Registered as chama admins) can create Chamas and invite
            others to join. Each Chama must have a minimum number of members to
            be active. Chamas can manage their accounts, decide on financial
            strategies, provide liquidity, stake tokens, and apply for grants.
            Only members who have signed up to the platform with their Internet
            Identity will be able to join and create chamas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Financial Operations
          </h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Transactions & Payments
          </h3>
          <p className="leading-relaxed">
            What ChamaDAO see its self as is a platform that will offer a
            blockchain infrastructure between web2 world and the decentralized
            world. All the transactions carried out by the users will be
            recorded on chain,and will be readily available to any chama member
            incase of dispute or need for verifications. In additions, since
            users will be allowed to choose their own banking platform either
            on-chain or off-chain, ChamaDAO canisters will sit at the middle to
            ensure that all the conditions set by the chama members are met
            before any transaction is executed. This will ensure that the chama
            members are in control of their funds and that they are not misused
            by any party in or out of the chama. This will create trustless
            agreements between chama members, and that ensure that users can
            always rely on the smart contacts to execute their commands once a
            condition is met.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Staking for Voting
          </h3>
          <p className="leading-relaxed">
            As mentioned before, once ChamaDAO launches its native token, users
            will be able stake the native token which will earn them the voting
            power to create and vote on proposal affecting the whole platform.
            However to avoid Token-Based Centralization/Plutocracy the voting
            power will be determined by the number of tokens staked and also the
            number of transactions made through the platform. This will ensure
            that the platform is not controlled by a few whales but by the
            community as a whole. In addition, the platform will also require
            that the tokens be locked/staked for a particular period of time
            before they can be used to vote. This will ensure that the users are
            committed to the platform and that they are not just staking for the
            sake of voting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Educational Content
          </h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Posting & Monetizing Educational Materials
          </h3>
          <p className="leading-relaxed">
            ChamaDAO will be the first chama management platform that will allow
            users to learn about finance, entrepreneurship, and other relevant
            topics. Users can post educational content related to finance,
            entrepreneurship, and other relevant topics. They can set a price
            for accessing this content with a percentage of the revenue going to
            ChamaDAO. However, it's important to note that once we launch all
            the materials on the platform will be free and offered by the
            ChamaDAO team alone. This is to ensure that the users are well
            informed about the platform and that they can make informed
            decisions about the platform. Once we roll out the feature where
            users can also post educational materials on the site to earn some
            tokens we plan to use the prowess of AI to validate these materials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Chama Investment
          </h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            How it will work
          </h3>
          <p className="leading-relaxed">
            The platform allows chama members to create projects which will be
            visible to the public, including the progress of these projects and
            where they have come short in terms of funding. At the moment the
            members are required to attach a link to a WhatsApp/Discord/Telegram
            group where they can discuss the subject on funding further with the
            potential investor. However, in the future we plan to integrate an
            on-site chat platform where these discussions will happen so that
            the ChamaDAO can obtain some revenue of the investment received by
            the chama. In addition we will also implement KYC & AML for the
            investor to ensure that the funds are not coming from illegal
            activities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Tokenomics
          </h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Distribution, Staking & Voting Mechanisms
          </h3>
          <TokenDistribution />
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">Roadmap</h2>
          <Link to="/roadmap">
            <p className="text-center font-body font-semibold text-xl text-primary cursor-pointer my-5">
              See Roadmap.
            </p>
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Conclusion
          </h2>
          <p className="leading-relaxed">
            ChamaDAO is poised to revolutionize community finance by integrating
            traditional Chama structures with today’s cutting-edge DeFi
            technology. Our platform aims to empower communities to manage their
            finances, access loans, earn interest, and receive grants in a
            secure and transparent environment.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Whitepaper;
