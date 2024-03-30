import { useSideItemsDispatch } from "../../../Contexts/DataModules/SideItemsProvider";
import { useSidePanelDispatch } from "../../../Contexts/DataModules/SidePanelProvider";
import { arrayRange } from "../../../Util/Util";


export default function Item ({ item, section }) {
  const dispatchItems = useSideItemsDispatch();
  const dispatchPanel = useSidePanelDispatch();


  function handleTitleChange (e) {
    dispatchItems({
      type : "updated_items",
      id   : item.id,
      level: item.level,
      title: e.target.value
    })
  }

  function handleLevelChange (e) {
    dispatchItems({
      type : "updated_items",
      id   : item.id,
      level: e.target.value,
      title: item.title
    });
  }

  // TODO: remove ID references to the deleted item from the side section it belonged to
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
      type   : "moved_item_up",
      itemID : item.id,
      section: section.title
    });
  }


  function handleMoveDown () {
    dispatchItems({
      type   : "moved_item_down",
      itemID : item.id,
      section: section.title
    });
  }
  
  const levelPicker = section.type === 'flat'
  ? null
  : section.type === 'languages'
    ? <LangLevel     
        value   ={ item.level }
        onChange={ handleLevelChange }
      />
    : <StandardLevel 
        value   ={ item.level }
        onChange={ handleLevelChange }
        maxLevel={ section.maxLevel }
      />;

  return (
    <div
      className='side-item-form'  
    >
      <Title 
        value   ={ item.title }
        onChange={ handleTitleChange } 
      />
      { levelPicker }
      <Button 
        name   ="Move up"
        onClick={ handleMoveUp }
      />
      <Button
        name   ="Move down"
        onClick={ handleMoveDown }
      />
      <Button
        name   ="Delete"
        onClick={ handleDelete }
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
  const levels  = arrayRange(1, maxLevel, 1); 
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


function Button ({ name, onClick }) {
  return (
    <button
      role   ='btn'
      onClick={ onClick }
    >
      { name }
    </button>
  )
}

