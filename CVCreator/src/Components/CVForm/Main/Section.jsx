import {
  useMainItems,
  useMainItemsDispatch
} from "../../../Contexts/DataModules/MainItemsProvider";

import {
  useMainPanel,
  useMainPanelDispatch
} from "../../../Contexts/DataModules/MainPanelProvider";

import { SectionManagemenent } from "../Shared/SectionManagement";
import Item from "./Item";

export default function Section (props) {
  const id    = props.id;
  const title = props.title;

  const data  = useMainPanel();
  const items = useMainItems();
  
  const dispatchPanel = useMainPanelDispatch();
  const dispatchItems = useMainItemsDispatch();


  function handleAddItem (e) {
    const itemID = items.nextItemId;

    dispatchItems({
      type: "created_item",
    });

    dispatchPanel({
      type     : "added_item_to_section",
      itemID   : itemID,
      sectionID: id
    });
  }

  function handleMoveUp (e) {
    dispatchPanel({
      type     : "moved_section_up",
      sectionID: id
    })
  }

  function handleMoveDown (e) {
    dispatchPanel({
      type     : "moved_section_down",
      sectionID: id
    });
  }

  function handleDeleteSection (e) {

  }

  return (
    <fieldset>
      <legend>
        { title }
      </legend>
      <SectionManagemenent 
        title              ={ title               }
        handleAddItem      ={ handleAddItem       }
        handleMoveUp       ={ handleMoveUp        }
        handleMoveDown     ={ handleMoveDown      }
        handleDeleteSection={ handleDeleteSection }
      /> 
    </fieldset>
  )
}


