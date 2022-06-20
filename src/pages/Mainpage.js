import { Card } from "@mui/material";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";

export default function Mainpage() {
  return (
    <Card className="text-box">
      <Introduction />
      <Skills/>
      <Experience/>
    </Card>
  );
}
