import React from "react";

const TokenDistribution = () => {
  return (
    <div className="">
      <p className="leading-relaxed font-body">
        We will need to gather funds by doing a pre-sale. In token pre-sale, the
        team will distribute 10% of the token to early investors before it goes
        public. 15% will be allocated and locked for 3 years in the founder's
        pool. 10% will be used to pay employees, consultants and advisors of the
        DAO. 65% will go to the community for purchase, staking, holding,
        various incentives and even airdrops.
      </p>

      <h2 className="text-2xl font-semibold text-primary mb-4">Total Supply</h2>
      <p className="text-lg mb-6">Total Tokens: 1,000,000,000</p>

      <h2 className="text-2xl font-semibold text-primary mb-4">
        Token Distribution
      </h2>
      <p className="text-gray-500 my-2">
        Once ChamaDAO reaches the token distribution phase, the tokens will be
        distributed as follows:
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 shadow-lg rounded-lg mb-8 font-body">
          <thead>
            <tr>
              <th className="py-3 px-5 bg-primary text-white font-heading">
                Item
              </th>
              <th className="py-3 px-5 bg-primary text-white font-heading">
                Token Allocation
              </th>
              <th className="py-3 px-5 bg-primary text-white font-heading">
                Description
              </th>
              <th className="py-3 px-5 bg-primary text-white font-heading">
                Vesting Period
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t py-3 px-5">Token Presale</td>
              <td className="border-t py-3 px-5">30% (300,000,000 tokens)</td>
              <td className="border-t py-3 px-5">
                Tokens allocated for presale to raise funds for the project.
              </td>
              <td className="border-t py-3 px-5">
                Airdropped to presalers in batches over 12 months to avoid
                market saturation.
              </td>
            </tr>
            <tr>
              <td className="border-t py-3 px-5">Airdrops</td>
              <td className="border-t py-3 px-5">10% (100,000,000 tokens)</td>
              <td className="border-t py-3 px-5">
                Tokens reserved for community members who participate in various
                activities and promotions.
              </td>
              <td className="border-t py-3 px-5">
                Distributed periodically to maintain engagement and incentivize
                ongoing participation.
              </td>
            </tr>
            <tr>
              <td className="border-t py-3 px-5">Founder's Pool</td>
              <td className="border-t py-3 px-5">20% (200,000,000 tokens)</td>
              <td className="border-t py-3 px-5">
                Tokens allocated and locked for the founders.
              </td>
              <td className="border-t py-3 px-5">
                Locked for 5 years to ensure long-term commitment and stability.
              </td>
            </tr>
            <tr>
              <td className="border-t py-3 px-5">Team and Advisors</td>
              <td className="border-t py-3 px-5">15% (150,000,000 tokens)</td>
              <td className="border-t py-3 px-5">
                Tokens allocated to pay employees, consultants, and advisors.
              </td>
              <td className="border-t py-3 px-5">
                Released gradually over 2 years to align interests and
                incentivize long-term contributions.
              </td>
            </tr>
            <tr>
              <td className="border-t py-3 px-5">Community Incentives</td>
              <td className="border-t py-3 px-5">15% (150,000,000 tokens)</td>
              <td className="border-t py-3 px-5">
                Tokens used for community purchases, staking, holding, various
                incentives, and additional airdrops.
              </td>
              <td className="border-t py-3 px-5">
                Released periodically to encourage participation and engagement
                within the community.
              </td>
            </tr>
            <tr>
              <td className="border-t py-3 px-5">Reserve Fund</td>
              <td className="border-t py-3 px-5">10% (100,000,000 tokens)</td>
              <td className="border-t py-3 px-5">
                Tokens held in reserve for future use, such as strategic
                partnerships, additional incentives, or unforeseen expenses.
              </td>
              <td className="border-t py-3 px-5">
                Kept in reserve with a flexible release schedule as needed.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-primary mb-4">Token Usage</h2>
      <p className="text-gray-500">
        Once we launch ChamaDAO token this is how we plan on how we will use it:
      </p>
      <ul className="list-disc list-inside text-lg mb-6 font-body">
        <li className="leading-relaxed my-2">
          Pre-sale Participants: Tokens will be sold to early investors,
          providing initial funding for the project.
        </li>
        <li className="leading-relaxed my-2">
          Airdrops: Tokens will be distributed to users who engage in specific
          activities, promote the project, or win contests.
        </li>
        <li className="leading-relaxed my-2">
          Founder’s Pool: Tokens will be locked for founders to ensure their
          commitment to the project for the long term.
        </li>
        <li className="leading-relaxed my-2">
          Team and Advisors: Tokens will be used to compensate the team and
          advisors, ensuring they have a vested interest in the project's
          success.
        </li>
        <li className="leading-relaxed my-2">
          Community Incentives: Tokens will be distributed to the community to
          incentivize holding, staking, and active participation.
        </li>
        <li className="leading-relaxed my-2">
          Reserve Fund: Tokens will be available for future needs, ensuring the
          project's adaptability and sustainability.
        </li>
      </ul>
    </div>
  );
};

export default TokenDistribution;
