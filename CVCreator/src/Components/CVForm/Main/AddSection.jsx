import { useMainItemsDispatch } from "../../../Contexts/DataModules/MainItemsProvider";
import { useMainPanelDispatch } from "../../../Contexts/DataModules/MainPanelProvider";


export default function AddSection ({ }) {
  const dispatch = useMainPanelDispatch();
  
  function handleCreateSection (e) {
    dispatch({
      type: 'created_section',
    });
  }

  function handleDeleteSection (e) {
    dispatch({
      type: 'deleted_main_panel_section',
      uniqueIdentifier: 'either section ID or title, if the uniqueness of the latter is enforced'
    })
  }

  // roughly the same stuff for moving it down
  function handleMoveSectionUp (e) {
    dispatch({
      type: 'moved_main_panel_section_up',
      uniqueIndentifier: 'same as above'
    })
  }

  // Probably will be done within the Item component, in a double-dispatch handler
  function handleAddItem (e) {
    dispatch({
      type: 'added_item_to_section',
      sectionIdentifier: 'ID or unique title',
      itemIdentifier: 'ID only, sections should only remember which items belong to them'
    })
  }

  // Note: enforcing unique titles seems a bad idea. It's definitely a good desing
  //   if the user can change the title at will

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