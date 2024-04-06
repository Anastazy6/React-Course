import { useMainPanel } from "../../../Contexts/DataModules/MainPanelProvider";
import GDPRClause from "./GDPRClause";

export default function MainPanel () {
  const sections = useMainPanel().sections;

  const renderedSections = sections  
  ? sections.map(ms => (
    <Section
      props={ ms }
    />
  ))
  : null;

  return (
    <>
      <GDPRClause />
      {/* { sections }   */}
    </>
  );
}