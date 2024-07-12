import { useSidePanelDispatch } from "../../../Contexts/DataModules/SidePanelProvider";
import ToggleableFieldset from "../ToggleableFieldset";

export default function SidePanelContainer () {
  const dispatch = useSidePanelDispatch();

  function handleAddSectionForm () {
    dispatch({
      type: 'added_side_section',
    });
  }

  return (
    <ToggleableFieldset
      legend='Side Panel'
    >
       <button 
        role='btn'
        onClick={ handleAddSectionForm }
      >
        Add Section
      </button>

    </ToggleableFieldset>
  )
}
