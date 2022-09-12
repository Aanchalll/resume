import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function PortFolio() {
  let navigate = useNavigate();
  return (
   <>
    <Card className="text-box">
      <Button onClick={()=>{  navigate("/", { replace: true })}}> click me to go back</Button>
      portfoliorttdtdrtdrtdrr
    </Card>
    </>  
  );
}
