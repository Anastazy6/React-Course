import { 
  useSidePanel,
  useSidePanelDispatch
} from "../../../Contexts/DataModules/SidePanelProvider";

import Section from "./Section";
import ToggleableFieldset from "../ToggleableFieldset";


export default function SidePanel () {
  const data = useSidePanel();  
  const dispatch = useSidePanelDispatch();

  
  const sections = data.sections && data.sections.map(ss => (
    <Section
      key      ={ ss.id                 }
      id       ={ ss.id                 }
      title    ={ ss.title    ?? ''     }
      type     ={ ss.type     ?? 'flat' }
      maxLevel ={ ss.maxLevel ?? 7      }
      itemsIDs ={ ss.itemsIDs ?? []     }
    />
  ));
  

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

      { sections }
    </ToggleableFieldset>
  );
} 
