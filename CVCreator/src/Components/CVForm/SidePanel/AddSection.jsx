import { useSidePanelDispatch } from "../../../Contexts/DataModules/SidePanelProvider";

export default function AddSidePanelSection () {
  const dispatch = useSidePanelDispatch();

  function handleAddSectionForm () {
    dispatch({
      type: 'added_side_section',
    });
  }

  return (
    <fieldset>
      <legend>
        Add Side Panel section
      </legend>
      
      <button 
        role='btn'
        onClick={ handleAddSectionForm }
      >
        Add Section
      </button>

    </fieldset>
  )
}
