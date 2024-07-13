import { 
  useMainPanelDispatch,
  useMainPanel
} from "../../../../Contexts/DataModules/MainPanelProvider";
import ToggleableFieldset from "../../ToggleableFieldset";
import Section from "./Section";

export default function MainPanelContainer ({ }) {
  const dispatch = useMainPanelDispatch();
  const sections = useMainPanel().sections;

  const renderedSections = sections  
  ? sections.map(ms => (
    <Section
      props={ ms    }
      key  ={ ms.id }
    />
  ))
  : null;
  
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

    { renderedSections }     
    </ToggleableFieldset>
  );
}