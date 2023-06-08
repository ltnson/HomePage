import {Typography} from '@mui/material';
import {PlushSVG, XcharSVG} from '../../../../assets/SVGSevieceDev/SerDevSVG';
import {useState} from 'react';

const Item = ({op}: {op: string}) => {
  const [hideContent, setHideContent] = useState<Boolean>(false);

  return (
    <li>
      <div className="md:pl-8 flex gap-4">
        <button onClick={() => setHideContent(!hideContent)}>
          {hideContent ? <XcharSVG /> : <PlushSVG />}
        </button>
        <Typography className="intro2">{op}</Typography>
      </div>
      <div className={hideContent ? 'px-12' : 'hidden'}>
        <Typography className="content">
          Handoff your cryptocurrency development to our team of qualified
          engineers. Our team has real-world experience creating a range of
          crypto tokens, bitcoins, altcoins, NFTs, custom smart contracts, etc.,
          with bank-level security features that help investors trade safely
          within a decentralized blockchain network.
        </Typography>
      </div>
    </li>
  );
};

export default Item;
