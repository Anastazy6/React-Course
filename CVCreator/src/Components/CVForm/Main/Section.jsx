import {
  useMainItems,
  useMainItemsDispatch
} from "../../../Contexts/DataModules/MainItemsProvider";

import {
  useMainPanel,
  useMainPanelDispatch
} from "../../../Contexts/DataModules/MainPanelProvider";
import { findItemsByIds } from "../../../Util/Util";

import SectionManagemenent from "../Shared/SectionManagement";
import Item from "./Item";

export default function Section ({ props }) {
  const id    = props.id;
  const title = props.title;

  const data      = useMainPanel();
  const mainItems = useMainItems() || { nextItemId: 0, items: [] };
  
  const dispatchPanel = useMainPanelDispatch();
  const dispatchItems = useMainItemsDispatch();

  const sectionItems = findItemsByIds(props.itemsIDs, mainItems.items);

  const renderedItems = sectionItems
  ? sectionItems.map(item => (
    <Item
      key    ={ item.id }
      item   ={ item    }
      section={ id      }
    />
  ))
  : null;


  function handleChange (e) {
    const property = e.target.name;

    const updatedSection = { ...props }
    updatedSection[property] = e.target.value;

    dispatchPanel({
      type   : 'updated_section',
      section: updatedSection
    });
  }


  function handleAddItem (e) {
    const itemID = mainItems.nextItemId;

    dispatchItems({
      type: "created_item",
    });

    dispatchPanel({
      type     : "added_item_to_section",
      itemID   : itemID,
      sectionID: id
    });
  }

  function handleMoveUp (e) {
    dispatchPanel({
      type     : "moved_section_up",
      sectionID: id
    })
  }

  function handleMoveDown (e) {
    dispatchPanel({
      type     : "moved_section_down",
      sectionID: id
    });
  }

  function handleDeleteSection (e) {
    dispatchPanel({
      type     : "deleted_section",
      sectionID: id 
    });
  }

  return (
    <fieldset>
      <legend>
        { title }
      </legend>
      <SectionManagemenent 
        title              ={ title               }
        handleAddItem      ={ handleAddItem       }
        handleMoveUp       ={ handleMoveUp        }
        handleMoveDown     ={ handleMoveDown      }
        handleDeleteSection={ handleDeleteSection }
      />

      <ShortText
        name    ='title'
        value   ={ title        }
        onChange={ handleChange }
      />
      <ShortText
        name    ='location'
        value   ={ props.location }
        onChange={ handleChange   }
      />
      <Date
        name    ='startDate'
        value   ={ props.startDate }
        onChange={ handleChange    }
      />
      <Date
        name    ='endDate'
        value   ={ props.endDate }
        onChange={ handleChange  }
      />
      { renderedItems } 
    </fieldset>
  )
}


function ShortText ({ name, value, onChange }) {
  return (
    <input
      type    ='text'
      name    ={ name     }
      value   ={ value    }
      onChange={ onChange }
    />
  )
}

function Date ({ name, value, onChange }) {
  return (
    <input
      type    ='date'
      name    ={ name     }
      value   ={ value    }
      onChange={ onChange }
    />
  )
}