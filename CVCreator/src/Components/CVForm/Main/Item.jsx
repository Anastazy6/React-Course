import { useMainItemsDispatch } from '../../../Contexts/DataModules/MainItemsProvider';

import {
  Education
} from './Types';

export default function Item ({ item, sectionType }) {
  const dispatch = useMainItemsDispatch();

  console.log(sectionType);

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

  return (
    <div
      className='main-panel-item'
    >
    { inputPicker(sectionType, item, handleChange, handleToggleMarkdown) }

    </div>
  );
}


function inputPicker (type, item, onChange, onToggleMarkdown) {
  switch (type) {
    case (null || undefined): {
      return "You need to pick section type in order to control its items"
    }
    case 'Employment': {
      return "Employment: TODO..."
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
    default: {
      console.warn(`Invalid Main Panel Section type: ${ type }`);
     // throw new TypeError(`Invalid Main Panel Section type: ${ type } `);
    }
  }
}