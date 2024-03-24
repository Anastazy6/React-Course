import { useState } from "react";
import { useSideItemsDispatch } from "../../../Contexts/DataModules/SideItemsProvider";


export default function Item ({ id, title, level, maxLevel, type }) {
  const dispatch = useSideItemsDispatch();
  const [item, setItem] = useState({});


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


  
  const levelPicker = type === 'flat'
  ? null
  : type === 'languages'
    ? <LangLevel     
        state   ={ item }
        onChange={ handleLevelChange }
      />
    : <StandardLevel 
        state   ={ item }
        onChange={ handleLevelChange }
        maxLevel={ maxLevel }
      />;

  return (
    <div
      className='side-item-form'  
    >
      <Title 
        state   ={ item }
        onChange={ handleTitleChange } 
      />
      { levelPicker }
    </div>
  );
}


function Title ({ state, onChange }) {
  const value = state.title ? state.title : '';

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


function LangLevel ({ state, onChange }) {
  const value = state.level ? state.level : 'A1';
  
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


function StandardLevel ({ state, onChange, maxLevel }) {
  const value = state.level ? state.level : 1;
  
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
