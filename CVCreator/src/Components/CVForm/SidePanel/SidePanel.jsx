import { useSidePanel } from "../../../Contexts/DataModules/SidePanelProvider";
import AddSidePanelSection from "./AddSection";
import Section from "./Section";

export default function SidePanel () {
  const data = useSidePanel();

  const sections = data.sections && data.sections.map(ss => (
    <Section
      key      ={ ss.id                 }
      id       ={ ss.id                 }
      title    ={ ss.title    ?? ''     }
      type     ={ ss.type     ?? 'flat' }
      maxLevel ={ ss.maxLevel ?? 7      }
      itemsIDs ={ ss.itemsIDs ?? []     }
    />
  ));


  return (
    <>
      <AddSidePanelSection />
      { sections }
    </>
  );
} 