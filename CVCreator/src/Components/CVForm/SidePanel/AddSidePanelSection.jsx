import { useState } from "react";


const defaultNewSection = {
  title : '',
  type  : 'flat',
  levels: 5
}


export default function AddSidePanelSection () {
  const [newSection, setNewSection] = useState(defaultNewSection);

  const sectionTypes = [
    'flat',         // no skill measurement
    'languages',    // measures a skill on an A1 - C2 scale
    'skills-bars',  // uses bars for skill measurement
    'skills-stars' // uses stars for skill measuremenet
  ].map(st => {
    return <option value={ st } key={ st }>{ st }</option>
  });


  const levelsInput = createLevelsInput(newSection, handleLevelsChange);


  function handleTitleChange (e) {
    setNewSection({
      ...newSection,
      title: e.target.value
    });
  }

  function handleTypeChange (e) {
    setNewSection({
      ...newSection,
      type: e.target.value
    });
  }

  function handleLevelsChange (e) {
    setNewSection({
      ...newSection,
      levels: e.target.value
    });
  }


  function handleAddSection () {
    console.log(newSection);
    // TODO
    setNewSection(defaultNewSection);
  }



  return (
    <fieldset>
      Add Side Panel section
      
      <label>
        Title
        <input
          type    ='text'
          name    ='new-section-title'
          value   ={ newSection.title }
          onChange={ handleTitleChange }
        />
      </label>
      
      <label>
        Type
        <select
          name    ='new-section-type'
          value   ={ newSection.type }
          onChange={ handleTypeChange }
        >
          { sectionTypes }
        </select>
      </label>

      { levelsInput }
      
      
      <button 
        role='btn'
        onClick={ handleAddSection }
      >
        Add Section
      </button>

    </fieldset>
  )
}


function createLevelsInput (newSection, onChange) {
  if (['flat', 'languages'].includes(newSection.type))
    return null;
  
    return (
    <label>
      Levels
      <input
        type    ='number'
        name    ='new-section-levels'
        value   ={ newSection.levels }
        onChange={ onChange }
        min     = '2'
        max     = '7'
      />
    </label>
  );
}