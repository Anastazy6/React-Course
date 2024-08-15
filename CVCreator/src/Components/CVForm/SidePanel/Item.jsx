import { useSideItemsDispatch } from "../../../Contexts/DataModules/SideItemsProvider";
import { useSidePanelDispatch } from "../../../Contexts/DataModules/SidePanelProvider";
import { arrayRange } from "../../../Util/Util";

import { ItemManagement } from "../Shared/Management";


export default function Item ({ item, section }) {
  const dispatchItems = useSideItemsDispatch();
  const dispatchPanel = useSidePanelDispatch();


  function handleTitleChange (e) {
    dispatchItems({
      type    : "updated_items",
      id      : item.id,
      secValue: item.secValue,
      title   : e.target.value
    })
  }

  function handleSecondaryValueChange (e) {
    dispatchItems({
      type    : "updated_items",
      id      : item.id,
      secValue: e.target.value,
      title   : item.title
    });
  }

  function handleDelete () {
    dispatchItems({
      type: "deleted_item",
      id  : item.id
    });

    dispatchPanel({
      type  : 'deleted_item',
      itemID: item.id
    });
  }

  function handleMoveUp () {
    dispatchPanel({
      type     : "moved_item",
      itemID   : item.id,
      section  : section.title,
      direction: 'up'
    });
  }


  function handleMoveDown () {
    dispatchPanel({
      type     : "moved_item",
      itemID   : item.id,
      section  : section.title,
      direction: 'down'
    });
  }


  const secondaryInput = selectSecondaryInput(
    section,
    item,
    handleSecondaryValueChange
  );

  return (
    <div
      className='side-item-form'  
    >
      <div
        className={ `side-item-${ section.type ?? 'untyped'}-input side-item-input-group` }
      >
        <Title 
          value   ={ item.title }
          onChange={ handleTitleChange }
        />
        { secondaryInput }
      </div>
      <ItemManagement
        handleMoveUp  ={ handleMoveUp   }
        handleMoveDown={ handleMoveDown }
        handleDelete  ={ handleDelete   }
      />
    </div>
  );
}


function Title ({ value, onChange }) {
  return (
    <input
      name    ='title'
      type    ='text'
      value   ={ value }
      onChange={ onChange }
      required
      placeholder="Title"
    />
  )
}


function LangLevel ({ value, onChange }) {
  
  const langLevels  = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Native'];
  const options = langLevels.map(l => (
    <option 
      key  ={ l }
      value={ l }
    >
      { l }
    </option>
  ));

  return (
    <select
      name    ='level'
      value   ={ value }
      onChange={ onChange }
      required
    >
      { options }
    </select>
  );
}


function StandardLevel ({ value, onChange, maxLevel }) {
  const levels  = arrayRange(0, maxLevel, 1); 
  const options = levels.map(i => (
    <option
      key  ={ i }
      value={ i }
    >
      { i }
    </option>
  ));

  return (
    <select
      name    ='level'
      value   ={ value }
      onChange={ onChange }
      required
    >
      { options }
    </select>
  );
}

function Link ({ value, onChange }) {
  return (
    <input
      name    ='link'
      type    ='url'
      value   ={ value }
      onChange={ onChange }
      required
      placeholder="URL"
    />
  )
}


function selectSecondaryInput (section, item, onChange) {
  switch (section.type) {
    case 'languages': {
      return (
        <LangLevel     
          value   ={ item.secValue }
          onChange={ onChange      }
        />
      );
    }
    case 'skills': {
      return (
       <StandardLevel 
          value   ={ item.secValue    }
          onChange={ onChange         }
          maxLevel={ section.maxLevel }
        />
      );
    }
    case 'object': {
      return (
        <input
          type  ='text'
          value ={ item.secValue } 
          onChange={ onChange}
          placeholder="Secondary value"
        />
      );
    }
    case 'links': {
      return (
        <Link 
          value   ={ item.secValue }
          onChange={ onChange      }
        />
      );
    }
    default: {
      return null;
    }
  }
}