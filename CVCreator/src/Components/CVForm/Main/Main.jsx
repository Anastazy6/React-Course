import { useMainPanel } from "../../../Contexts/DataModules/MainPanelProvider";
import AddSection from "./Section/AddSection";
import GDPRClause from "./Customization/GDPRClause";
import Locale from "./Customization/Locale";

import Section from "./Section/Section";

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