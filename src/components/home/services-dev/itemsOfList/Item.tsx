import { PlushSVG, XcharSVG } from "../../../../assets/SVGSevieceDev/SerDevSVG";
import { useState } from "react";

const Item = ({ op }: { op: string }) => {
  const [hideContent, setHideContent] = useState<Boolean>(false);

  return (
    <li>
      <div className="">
        <button className="" onClick={() => setHideContent(!hideContent)}>
          {hideContent ? <XcharSVG /> : <PlushSVG />}
        </button>
        <span className="lg:text-xl pl-4  text-lg">{op}</span>
      </div>
      <div className={hideContent ? "px-12" : "hidden"}>
        <p>
          Handoff your cryptocurrency development to our team of qualified
          engineers. Our team has real-world experience creating a range of
          crypto tokens, bitcoins, altcoins, NFTs, custom smart contracts, etc.,
          with bank-level security features that help investors trade safely
          within a decentralized blockchain network.
        </p>
      </div>
    </li>
  );
};

export default Item;
