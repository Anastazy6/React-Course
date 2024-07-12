import { useMainPanelDispatch } from "../../../../Contexts/DataModules/MainPanelProvider";
import ToggleableFieldset from "../../ToggleableFieldset";


export default function MainPanelContainer ({ }) {
  const dispatch = useMainPanelDispatch();
  
  function handleCreateSection (e) {
    dispatch({
      type: 'created_section',
    });
  }

  // SVG button for creating a section
  return (
    <ToggleableFieldset
      legend="Main Panel"
    >  
      <button
        onClick={ handleCreateSection }   
      >
        Create main panel section
      </button>
      
    </ToggleableFieldset>
  );
}