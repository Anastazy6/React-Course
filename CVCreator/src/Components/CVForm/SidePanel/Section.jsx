import Item from "./Item";
import {  
  useSidePanelDispatch
} from "../../../Contexts/DataModules/SidePanelProvider";

import {
  useSideItems,
  useSideItemsDispatch
} from "../../../Contexts/DataModules/SideItemsProvider";

import { findItemsByIds } from "../../../Util/Util";

import SectionManagemenent from "../Shared/Management";


export default function Section ({ title, id, type, maxLevel, itemsIDs }) {
  const dispatchPanel = useSidePanelDispatch();
  const dispatchItems = useSideItemsDispatch();
  const sideItems     = useSideItems();

  const thisSection = { title, type, maxLevel };
  
  const sectionTypes = [
    'flat',      // no skill measurement
    'languages', // measures a skill on an A1 - C2 scale
    'skills',    // uses stars for skill measuremenet
    'links',     // has a title and link inputs
    'object'     // for a title-description stuff 
  ].map(st => {
    return <option value={ st } key={ st }>{ st }</option>
  });

  console.log("penis " + maxLevel);

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


  function handleChangeSectionProperty (e) {
    const property = e.target.name;
    const value    = e.target.value;

    console.log(property);
    dispatchPanel({
      type    : 'updated_side_section',
      property: property,
      value   : value,
      id      : id
    });
  }
  
  function handleMoveUp () {
    dispatchPanel({
      type     : 'moved_section',
      id       : id,
      direction: 'up'
    });
  }

  function handleMoveDown () {
    dispatchPanel({
      type     : 'moved_section',
      section  : id,
      direction: 'down'
    });
  }


  function handleDeleteSection () {
    const confirmed = confirm("Are you sure? This action cannot be undone.");
    if (confirmed) dispatchPanel({
      type: 'deleted_side_section',
      id  : id
    });
  }
  

  function handleAddItem () {
    const nextItemId = sideItems.nextItemId;
   
    dispatchItems({
      type : 'created_side_item',
    });

    dispatchPanel({
      type  : 'added_item_to_section',
      id    : id,
      itemID: nextItemId
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

      <label>
        Title
        <input
          type    ='text'
          name    ='title'
          value   ={ title }
          onChange={ handleChangeSectionProperty }
        />
      </label>
      
      <label>
        Type
        <select
          name    ='type'
          value   ={ type }
          onChange={ handleChangeSectionProperty }
        >
          { sectionTypes }
        </select>
      </label>

      <LevelsInput
        type    ={ type          }
        maxLevel={ maxLevel ?? 7 }
        onChange={ handleChangeSectionProperty }
      />

      { renderedItems }


    </fieldset>
  );
}




function LevelsInput ({ type, maxLevel, onChange }) {
  if (!(type) === 'skills') return null;
 
    console.log("kutas " + maxLevel);

    return (
    <label>
      Max level
      <input
        type    ='number'
        name    ='maxLevel'
        value   ={ maxLevel ?? 7 }
        onChange={ onChange }
        min     = '2'
        max     = '10'
      />
    </label>
  );
}