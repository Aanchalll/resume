import { Card } from "@mui/material";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Links from "../components/Links";
import PersonalInformation from "../components/PersonalInformation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Mainpage() {
  return (
    <Card className="text-box">
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
      <Links />
      <PersonalInformation />
    </Card>
  );
}
