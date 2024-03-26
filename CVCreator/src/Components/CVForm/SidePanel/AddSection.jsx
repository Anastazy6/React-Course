import { useState } from "react";
import { useSidePanelDispatch } from "../../../Contexts/DataModules/SidePanelProvider";


const defaultNewSection = {
  title   : '',
  type    : 'flat',
  levels  : 5,
  itemsIDs: []
}


export default function AddSidePanelSection () {
  const [newSection, setNewSection] = useState(defaultNewSection);
  const dispatch = useSidePanelDispatch();

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


  function handleAddSectionForm () {
    dispatch({
      type       : 'added_side_section',
      sectionForm: newSection
    });

    setNewSection(defaultNewSection);
  }



  return (
    <fieldset>
      <legend>
        Add Side Panel section
      </legend>
      
      
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
        onClick={ handleAddSectionForm }
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