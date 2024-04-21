import { useMainItems   } from "../../../Contexts/DataModules/MainItemsProvider";
import { useMainPanel   } from "../../../Contexts/DataModules/MainPanelProvider";
import { findItemsByIds } from "../../../Util/Util";

import GDPRClause from "./Clause";
import Item       from "./Item";

// Wraps the Main Panel Preview and GDPR clause preview in a single wrapper element,
//   so that they're spatially related to each other
export default function MainPanelPreviewWrapper({ }) {

  return (
    <section
      id="main-panel-preview-wrapper"
    >
      <MainPanelPreview />
      <GDPRClause />
    </section>
  )
}


function MainPanelPreview ({ }) {
  const panel = useMainPanel();
  
  const sections = panel.sections 
  ? panel.sections.map(section => (
    <Section 
      props={ section }
      key  ={ section.id }
    />
  ))
  : null;

  return (
    <div
      id="main-panel-preview"
    >
      { sections }    
    </div>
  )
}


function Section ({ props }) {
  const mainItems = useMainItems().items;
  const sectionItems = findItemsByIds(props.itemsIDs, mainItems);

  const renderedItems = sectionItems
  ? sectionItems.map(item => <Item props={ item } key={ item.id } />)
  : null;

  return (
    <section
      className="main-panel-section-preview"
    >
      <div
        className="main-section-preview-title"
      >
        <h3
          className="linethrough-header"
        >
          { props.title }
        </h3>
      </div>


      { renderedItems }

    </section>
  )
}