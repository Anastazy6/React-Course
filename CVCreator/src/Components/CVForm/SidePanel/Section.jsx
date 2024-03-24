import Item from "./Item";
import {  
  useSidePanelDispatch
} from "../../../Contexts/DataModules/SidePanelProvider";

import {
  useSideItems,
  useSideItemsDispatch
} from "../../../Contexts/DataModules/SideItemsProvider";



export default function Section ({ title, type, levels, itemsIDs }) {
  const dispatchPanel = useSidePanelDispatch();
  const dispatchItems = useSideItemsDispatch();
  const sideItems     = useSideItems();

  const items = sideItems.items.filter(
    sideItem => itemsIDs.includes(sideItem.id)
  );

  const renderedItems = items.map(item => (
    <Item
      id      ={ item.id    } 
      title   ={ item.title }
      level   ={ item.level }
      maxLevel={ levels     }
      type    ={ type       }
    />
  ));
  

  function handleDeleteSection () {
    dispatchPanel({
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
      itemId: nextItemId
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


