import { useMainPanelDispatch } from "../../../../Contexts/DataModules/MainPanelProvider";


export default function AddSection ({ }) {
  const dispatch = useMainPanelDispatch();
  
  function handleCreateSection (e) {
    dispatch({
      type: 'created_section',
    });
  }

  // SVG button for creating a section
  return (
    <fieldset>
      <legend>
        Create main panel section
      </legend>
      <button
        onClick={ handleCreateSection }   
      >
        Create main panel section
      </button>
      
    </fieldset>
  );
}