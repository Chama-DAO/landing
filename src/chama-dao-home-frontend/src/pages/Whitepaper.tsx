import { Link } from "react-router-dom";
import TokenDistribution from "../components/TokenDistribution";

const Whitepaper = () => {
  return (
    <div className="bg-white text-text font-body">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-heading text-primary mb-4">
          ChamaDAO Whitepaper
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
            enhance their efficiency, security, and scalability.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Introduction to ChamaDAO and its Vision
          </h3>
          <p className="leading-relaxed">
            ChamaDAO is a decentralized autonomous organization designed to
            bring Chamas into the digital age. Our vision is to create a
            decentralized platform where Chamas can manage their finances,
            access loans, earn interest, and receive grants all within a secure,
            transparent blockchain environment.
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
            high scalability, low costs, and enhanced security.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Description of the Smart Contract System (Canisters)
          </h3>
          <p className="leading-relaxed">
            Canisters are the smart contracts on the ICP blockchain that
            facilitate various operations within ChamaDAO. These canisters
            handle user authentication, transaction processing, staking,
            liquidity provision, and governance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            User Profiles and Roles
          </h2>
          <p className="leading-relaxed">
            Users on ChamaDAO can sign up and create profiles providing optional
            information about themselves and their activities. Users can be
            categorized as investors/VCs or normal users. They have the ability
            to create or join Chamas, provide liquidity, stake tokens, post
            educational content, and apply for grants.
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
            independent DAO with decisions made collectively by its members.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Functionality: Creating, Joining, and Managing Chamas
          </h3>
          <p className="leading-relaxed">
            Users can create Chamas and invite others to join. Each Chama must
            have a minimum number of members to be active. Chamas can manage
            their accounts, decide on financial strategies, provide liquidity,
            stake tokens, and apply for grants.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Financial Operations
          </h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Liquidity Provision & Interest Earning
          </h3>
          <p className="leading-relaxed">
            Users and Chamas can provide liquidity to canisters, earning
            interest on their contributions. This interest is distributed among
            liquidity providers with a small percentage going to ChamaDAO as
            revenue.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Staking for Voting & Loan Collateralization
          </h3>
          <p className="leading-relaxed">
            Users can stake their tokens to gain voting power and access loans.
            Staked tokens determine a user’s influence within the platform and
            serve as collateral for over-collateralize loans.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Over-Collateralize Loan System
          </h3>
          <p className="leading-relaxed">
            ChamaDAO’s loan system is modeled after DeFi platforms like Aave,
            requiring borrowers to provide collateral greater than the loan
            amount.
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
            Users can post educational content related to finance,
            entrepreneurship, and other relevant topics. They can set a price
            for accessing this content with a percentage of the revenue going to
            ChamaDAO.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Revenue Sharing Model
          </h3>
          <p className="leading-relaxed">
            Revenue from educational content is shared between the content
            creator and ChamaDAO.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Grants & Funding
          </h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Process for Organizations to Offer Grants
          </h3>
          <p className="leading-relaxed">
            Organizations looking to support community development can offer
            grants through ChamaDAO. They can specify eligibility criteria and
            the application process.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Eligibility Criteria and Application Process for Chamas
          </h3>
          <p className="leading-relaxed">
            Chamas can apply for grants by submitting project proposals that
            meet the specified criteria.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">
            Governance
          </h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Overview of the DAO Governance Model
          </h3>
          <p className="leading-relaxed">
            ChamaDAO operates as a decentralized autonomous organization with
            governance decisions made collectively by its members. Users stake
            tokens to gain voting power, participating in decisions that affect
            the platform’s development and operations.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Tokenomics: Distribution, Staking & Voting Mechanisms
          </h3>
          <p className="leading-relaxed">
            <TokenDistribution />
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-heading text-text my-2 mb-2">Roadmap</h2>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Phased Feature Releases
          </h3>
          <p className="leading-relaxed">
            Phase 1: User onboarding, profile creation, wallet connection, basic
            staking features, creating and joining Chamas.
          </p>
          <p className="leading-relaxed">
            Phase 2: Liquidity provision, interest earning, over-collateralized
            loan system, Chama project management, and financial goals.
          </p>
          <p className="leading-relaxed">
            Phase 3: AI system for content verification, grant application &
            management, advanced staking and voting features.
          </p>
          <p className="leading-relaxed">
            Phase 4: Custom canister creation for liquidity provision by users,
            enhanced chat & discussion features for Chamas, M-PESA integration.
          </p>
          <h3 className="text-2xl font-heading text-gray-500 mb-2">
            Long-term Vision
          </h3>
          <p className="leading-relaxed">
            ChamaDAO aims to become a leading platform for decentralized
            community finance, continually evolving to meet user needs and
            technological advancements.
          </p>
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
