import { useMainPanel } from "../../../Contexts/DataModules/MainPanelProvider";
import GDPRClause from "./GDPRClause";

export default function MainPanel () {
  const data = useMainPanel();

  // const sections = data 
  // ? data.map(ms => (
  //   //<Section
    
  //   ///>
  //   null
  // ))
  // : null;

  return (
    <>
      <GDPRClause />
      {/* { sections }   */}
    </>
  );
}