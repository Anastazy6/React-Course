import { useSidePanel } from "../../../Contexts/DataModules/SidePanelProvider";
import AddSidePanelSection from "./AddSection";
import Section from "./Section";

export default function SidePanel () {
  const data = useSidePanel();

  const sections = data && data.map(ss => (
    <Section
      key      ={ ss.title    }
      title    ={ ss.title    }
      type     ={ ss.type     }
      maxLevel ={ ss.maxLevel }
      itemsIDs ={ ss.itemsIDs }
    />
  ));


  return (
    <>
      <AddSidePanelSection />
      { sections }
    </>
  );
} 