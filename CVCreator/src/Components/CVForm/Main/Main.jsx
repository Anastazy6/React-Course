import { useMainPanel } from "../../../Contexts/DataModules/MainPanelProvider";
import AddSection from "./AddSection";
import GDPRClause from "./GDPRClause";
import Locale from "./Locale";

import Section from "./Section";

export default function MainPanel () {
  const sections = useMainPanel().sections;

  const renderedSections = sections  
  ? sections.map(ms => (
    <Section
      props={ ms    }
      key  ={ ms.id }
    />
  ))
  : null;

  return (
    <>
      <GDPRClause />
      <Locale     />
      <AddSection />
      { renderedSections }
    </>
  );
}