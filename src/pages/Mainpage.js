import { Card } from "@mui/material";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Links from "../components/Links";
import PersonalInformation from "../components/PersonalInformation";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
export default function Mainpage() {
  return (
   <> <Sidebar/>
    <div className="text-box">
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
      <Links />
      <PersonalInformation />
    </div>
    </>  
  );
}
