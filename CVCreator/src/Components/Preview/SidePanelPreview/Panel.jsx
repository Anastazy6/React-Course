import { useSideItems } from "../../../Contexts/DataModules/SideItemsProvider";
import { useSidePanel } from "../../../Contexts/DataModules/SidePanelProvider";

import { findItemsByIds } from "../../../Util/Util";

import Item from "./Item";

export default function SidePanelPreview () {
  const sidePanel = useSidePanel();

  const renderedSections = sidePanel.sections && sidePanel.sections.map(section => {
    return <Section
      key     ={ section.id       }
      title   ={ section.title    }
      type    ={ section.type     }
      itemsIDs={ section.itemsIDs }
      maxLevel={ section.maxLevel }
    />
  });


  return (
    <section
      id="side-panel-preview-wrapper"
    >
      <div
        id="side-panel-preview"
      >
        { renderedSections }
      </div>
      <hr className="panel-separator" />
    </section>
  );
}


function Section ({ title, type, itemsIDs, maxLevel }) {
  const sideItems = useSideItems();

  const items = findItemsByIds(itemsIDs, sideItems.items);

  const renderedItems = items
  ? items.map(item => (
    <Item
      key     ={ item.id  }
      item    ={ item     }
      type    ={ type     }
      maxLevel={ maxLevel }
    />
  ))
  : null;

  return (
    <section
      className="side-panel-section"
    >
      <div
        className="side-section-title"
      >
        <div
          className="linethrough-header-wrapper"
        >
          <hr className="linethrough-hr" />
          <h3
            className="linethrough-header"
          >
            { title }
          </h3>
        </div>

      </div>
        { renderedItems }
    </section>
  );
}




