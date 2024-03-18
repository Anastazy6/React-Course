import { useData } from "../../../Contexts/DataProvider";
import AddSidePanelSection from "./AddSection";
import SideSection from "./Section";

export default function SidePanel () {
  const data = useData();

  const sideSections = data.sideSections && data.sideSections.map(ss => (
    <SideSection
      title ={ ss.title  }
      type  ={ ss.type   }
      levels={ ss.levels }
    />
  ));

  console.log(sideSections)

  return (
    <>
      <AddSidePanelSection />
      { sideSections }
    </>
  );
} 