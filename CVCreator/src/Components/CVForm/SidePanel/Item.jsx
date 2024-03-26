import { useSideItemsDispatch } from "../../../Contexts/DataModules/SideItemsProvider";


export default function Item ({ id, title, level, maxLevel, type }) {
  const dispatch = useSideItemsDispatch();


  function handleTitleChange (e) {
    dispatch({
      type : "updated_items",
      id   : id,
      level: level,
      title: e.target.value
    })
  }

  function handleLevelChange (e) {
    dispatch({
      type : "updated_items",
      id   : id,
      level: e.target.value,
      title: title
    });
  }

  // TODO: remove ID references to the deleted item from the side section it belonged to
  function handleDelete (e) {
    dispatch({
      type: "deleted_item",
      id  : id
    });
  }

  
  const levelPicker = type === 'flat'
  ? null
  : type === 'languages'
    ? <LangLevel     
        value   ={ level }
        onChange={ handleLevelChange }
      />
    : <StandardLevel 
        value   ={ level }
        onChange={ handleLevelChange }
        maxLevel={ maxLevel }
      />;

  return (
    <div
      className='side-item-form'  
    >
      <Title 
        value   ={ title }
        onChange={ handleTitleChange } 
      />
      { levelPicker }
      <Delete onClick={ handleDelete } /> 
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
  
  const maxLevel  = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const options = maxLevel.map(l => (
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
  return (
    <input
      name    ='level'
      type    ='number'
      value   ={ value }
      min     ='1'
      max     ={ maxLevel }
      onChange={ onChange }
      required
    />
  );
}


function Delete ({ onClick }) {
  return (
    <button
      role   ='btn'
      onClick={ onClick }
    >
      Delete
    </button>
  )
}
