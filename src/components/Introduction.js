import { Box, Divider } from "@mui/material";
import { MainContent } from "../utils/Content";
export default function Introduction() {
  return (
    <Box id="introduction" className="animationWord">
     {/* <div id="body2">
    <div className="sign">
      <span className="fast-flicker">b</span>rea<span className="flicker">t</span>he
    </div>
  </div> */}

      <h1 className="heading-primary ">
        <span className="heading-primary-main text-transform-uppercase">
        {MainContent.introduction.name}
        </span>
        <span className="heading-primary-sub">{MainContent.introduction.info}</span>
      </h1>
      <Divider />
    </Box>
  );
}
