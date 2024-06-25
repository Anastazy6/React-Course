import { useMainPanelDispatch } from '../../../../Contexts/DataModules/MainPanelProvider';
import { useMainItemsDispatch } from '../../../../Contexts/DataModules/MainItemsProvider';
import { ItemManagement } from '../../Shared/Management';

import {
  Courses,
  Education,
  Employment,
  GeneralInformation,
  Projects
} from './Types';

export default function Item ({ item, sectionType, sectionID }) {
  const dispatch      = useMainItemsDispatch();
  const dispatchPanel = useMainPanelDispatch();

  function handleChange (e) {
    const property    = e.target.name;
    const updatedItem = { ...item };
    
    updatedItem[property] = e.target.value;

    dispatch({
      type: 'updated_item',
      item: updatedItem
    });
  }

  function handleToggleMarkdown (e) {
    const markdown = item.markdown ?? true;

    dispatch({
      type: 'updated_item',
      item: {
        ...item,
        markdown: markdown
      }
    });
  }


  function handleDelete (e) {

  }

  function handleMoveUp (e) {
    dispatchPanel({
      type     : 'moved_item',
      direction: 'up',
      sectionID: sectionID,
      itemID   : item.id
    })
  }

  function handleMoveDown (e) {
    dispatchPanel({
      type     : 'moved_item',
      direction: 'down',
      sectionID: sectionID,
      itemID   : item.id
    })

  }


  return (
    <div
      className='main-panel-item'
    >
      { inputPicker(sectionType, item, handleChange, handleToggleMarkdown) }
      <ItemManagement
        handleMoveUp  ={ handleMoveUp   }
        handleMoveDown={ handleMoveDown }
        handleDelete  ={ handleDelete   }
      />
    </div>
  );
}


function inputPicker (type, item, onChange, onToggleMarkdown) {
  switch (type) {
    case (null || undefined): {
      return "You need to pick section type in order to control its items"
    }
    case 'Employment': {
      return (
        <Employment
          item            ={ item             }
          onChange        ={ onChange         }
          onToggleMarkdown={ onToggleMarkdown }
        />
      );
    }
    case 'Education': {
      return (
        <Education
          item            ={ item             }
          onChange        ={ onChange         }
          onToggleMarkdown={ onToggleMarkdown }
        />
      );
    }
    case 'Courses': {
      return (
        <Courses
          item            ={ item             }
          onChange        ={ onChange         }
          onToggleMarkdown={ onToggleMarkdown }
        />
      );
    }
    case 'Projects': {
      return (
        <Projects
          item            ={ item             }
          onChange        ={ onChange         }
          onToggleMarkdown={ onToggleMarkdown }
        />
      );
    }
    case 'General information': {
      return (
        <GeneralInformation
          item            ={ item             }
          onChange        ={ onChange         }
          onToggleMarkdown={ onToggleMarkdown }
        />
      );
    }
    default: {
      console.warn(`Invalid Main Panel Section type: ${ type }`);
     // throw new TypeError(`Invalid Main Panel Section type: ${ type } `);
    }
  }
}