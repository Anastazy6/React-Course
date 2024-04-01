import Item from "./Item";
import {  
  useSidePanelDispatch
} from "../../../Contexts/DataModules/SidePanelProvider";

import {
  useSideItems,
  useSideItemsDispatch
} from "../../../Contexts/DataModules/SideItemsProvider";

import { findItemsByIds } from "../../../Util/Util";


export default function Section ({ title, type, maxLevel, itemsIDs }) {
  const dispatchPanel = useSidePanelDispatch();
  const dispatchItems = useSideItemsDispatch();
  const sideItems     = useSideItems();

  const thisSection = { title, type, maxLevel };


  const items = findItemsByIds(itemsIDs, sideItems.items);

  const renderedItems = items
  ? items.map(item => (
    <Item
      key     ={ item.id     }
      item    ={ item        }
      section ={ thisSection }
    />
  ))
  : null;
  

  function handleDeleteSection () {
    const confirmed = confirm("Are you sure? This action cannot be undone.");
    if (confirmed) dispatchPanel({
      type : 'deleted_side_section',
      title: title
    });
  }


  function handleAddItem () {
    const nextItemId = sideItems.nextItemId;
    
    dispatchItems({
      type : 'created_side_item',
    });

    dispatchPanel({
      type  : 'added_item_to_section',
      title : title,
      itemID: nextItemId
    });
  }

  return (
    <fieldset>
       <legend>
        { title }
       </legend>
      
      <Button
        handleClick={ handleAddItem }
        text='Add Item'
      />

      { renderedItems }

      <Button 
        handleClick={ handleDeleteSection } 
        text='Delete Section'
      />
    </fieldset>
  );
}


function Button ({ handleClick, text }) {
  return (
    <button
      role="btn"
      onClick={ handleClick }
    >
      { text }
    </button>
  )
}


