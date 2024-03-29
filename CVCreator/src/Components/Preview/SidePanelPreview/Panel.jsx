import { useSideItems } from "../../../Contexts/DataModules/SideItemsProvider";
import { useSidePanel } from "../../../Contexts/DataModules/SidePanelProvider";

import Item from "./Item";

export default function SidePanelPreview () {
  const sidePanel = useSidePanel();

  const renderedSections = sidePanel.map(section => {
    console.log(section);
    return <Section
      key     ={ section.title    }
      title   ={ section.title    }
      type    ={ section.type     }
      itemsIDs={ section.itemsIDs }
      maxLevel={ section.levels   }
    />
  });


  return (
    // Wrapper
      // List of sections
        // Lists of items, with levels if leveled
    <article
      id="side-panel-preview"
    >
    { renderedSections }
      
    </article>
  );
}


function Section ({ title, type, itemsIDs, maxLevel }) {
  const items = useSideItems().items.filter(
    item => itemsIDs.includes(item.id)
  );

  const renderedItems = items.map(item => (
    <Item
      key     ={ item.id  }
      item    ={ item     }
      type    ={ type     }
      maxLevel={ maxLevel }
    />
  ));

  return (
    <section
      className="side-panel-section"
    >
      <div
        className="side-section-title"
      >
        <hr />
        <h3
        >
          { title }
        </h3>

      </div>
        { renderedItems }
    </section>
  );
}




