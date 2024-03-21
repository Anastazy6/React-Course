import { useDataDispatch } from "../../../Contexts/DataProvider"
import { useState } from "react";

export default function SideSection ({ title, type, levels }) {
  const [sideItem, setSideItem] = useState({});
  
  const dispatch = useDataDispatch();

  function handleDeleteSection () {
    dispatch({
      type : 'deleted_side_section',
      title: title
    });
  }


  function handleTitleChange (e) {
    setSideItem({ ...sideItem, title: e.target.value });
  }

  function handleLangLevelChange (e) {
    setSideItem({ ...sideItem, level: e.target.value });
  }

  function handleLevelChange (e) {
    setSideItem({
      ...sideItem, 
      level   : e.target.value,
      maxLevel: levels 
    });
  }


  function handleCreateItem () {

  }




  const levelPicker = type === 'flat'
  ? null
  : type === 'languages'
    ? <LangLevel     
        state   ={ sideItem }
        onChange={ handleLangLevelChange }
      />
    : <StandardLevel 
        state   ={ sideItem }
        onChange={ handleLevelChange }
        maxLevel={ levels }
      />;


  return (
    <fieldset>
       <legend>
        { title }
       </legend>

      <Title 
        state   ={ sideItem }
        onChange={ handleTitleChange } 
      />
      { levelPicker }
      
      <Button
        handleClick={ handleCreateItem }
        text='Create Item'
      />

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
  
  const levels  = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const options = levels.map(l => (
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
