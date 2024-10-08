import {
  useMainItems,
  useMainItemsDispatch
} from "../../../../Contexts/DataModules/MainItemsProvider";

import {
  useMainPanel,
  useMainPanelDispatch
} from "../../../../Contexts/DataModules/MainPanelProvider";
import { findItemsByIds } from "../../../../Util/Util";

import SectionManagemenent from "../../Shared/Management";
import ToggleableFieldset from "../../ToggleableFieldset";
import Item from "../Item/Item";

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
      key        ={ item.id }
      item       ={ item    }
      sectionType={ props.type ?? undefined }
      sectionID  ={ props.id }
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
      type     : "moved_section",
      id       : id,
      direction: 'up'
    })
  }

  function handleMoveDown (e) {
    dispatchPanel({
      type     : "moved_section",
      id       : id,
      direction: 'down'
    });
  }

  function handleDeleteSection (e) {
    dispatchPanel({
      type     : "deleted_section",
      sectionID: id 
    });
  }

  return (
    <ToggleableFieldset
      legend={ title }
    >
      <Title 
        value   ={ props.title  }
        onChange={ handleChange }
      />
      <Type
        value   ={ props.type   }
        onChange={ handleChange }
      />
    
      <SectionManagemenent
        title              ={ title               } 
        handleAddItem      ={ handleAddItem       }
        handleMoveUp       ={ handleMoveUp        }
        handleMoveDown     ={ handleMoveDown      }
        handleDeleteSection={ handleDeleteSection }
      />


      { renderedItems } 
    </ToggleableFieldset>
  )
}


function Title ({ value, onChange }) {
  return (
    <label>
      Section title
      <input
        name     ='title'
        value   ={ value    }
        onChange={ onChange } 
        
        placeholder = "Section title"
      />
    </label>
  );
}


function Type ({ value, onChange }) {
  const options = [
    'Employment',
    'Education',
    'Courses',
    'General information',
    'Projects',
    'Other'
  ].map(o => (
    <option
      key  ={ o }
      value={ o }
    >{ o }
    </option>
  ));
  
  return (
    <label>
      Section type
      <select
        name    ='type'
        value   ={ value    }
        onChange={ onChange }
      >
        { options }
      </select>
    </label>
  );
}