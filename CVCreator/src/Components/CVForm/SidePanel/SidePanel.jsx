import { useSidePanel } from "../../../Contexts/DataModules/SidePanelProvider";
import AddSidePanelSection from "./AddSection";
import Section from "./Section";

export default function SidePanel () {
  const data = useSidePanel();
  console.log(typeof data);

  const sections = data && data.map(ss => (
    <Section
      key   ={ ss.title  }
      title ={ ss.title  }
      type  ={ ss.type   }
      levels={ ss.levels }
    />
  ));

  console.log(sections)

  return (
    <>
      <AddSidePanelSection />
      { sections }
    </>
  );
} 