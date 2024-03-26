import { 
  createContext,
  useContext,
  useReducer
} from "react";

import SideItemsProvider from "./SideItemsProvider";

const SidePanelContext         = createContext(null);
const SidePanelDispatchContext = createContext(null);


export default function SidePanelProvider ({ children }) {
  const [sidePanel, dispatch] = useReducer(
    sidePanelReducer, []
  );

  return (
    <SideItemsProvider>
      <SidePanelContext.Provider value = { sidePanel }>
        <SidePanelDispatchContext.Provider value = { dispatch }>
          { children }
        </SidePanelDispatchContext.Provider>
      </SidePanelContext.Provider>
    </SideItemsProvider>
  );
}


export function useSidePanel () {
  return useContext(SidePanelContext);
}

export function useSidePanelDispatch () {
  return useContext(SidePanelDispatchContext);
}


function sidePanelReducer (sidePanel, action) {
  const newSection = action.sectionForm || null;
  
  switch (action.type) {
    case 'added_side_section': {
      if (sidePanel.some(section => section.title === newSection.title)) {
        alert(`Side Panel section named ${newSection.title} exists already. Pick other name.`);
        return sidePanel;
      }
      return [...sidePanel, action.sectionForm];
    }
    
    case 'deleted_side_section': {
     return sidePanel.filter(
        ss => ss.title !== action.title
      );
    }
    
    case 'added_item_to_section': {
      return sidePanel.map(ss => {
        if (ss.title === action.title) {
          return { 
            ...ss,
            itemsIDs: [ ...ss.itemsIDs, action.itemID]
          }
        }
      return ss;
      });
    }
    
    case 'modified_section_item': {
      return sidePanel.map(ss => {
        if (ss.title === action.section) {
          return {
            ...ss,
            items: ss.items.map(item => {
              return item.title === action.item.title 
                ? action.item
                : ss.item
            })
          }
        }
      });
    }
    
    case 'deleted_section_item': {

    }

    case 'loaded_data': {
      return action.data;
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}
