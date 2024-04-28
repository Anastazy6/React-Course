import { 
  createContext,
  useContext,
  useReducer
} from "react";

import SideItemsProvider from "./SideItemsProvider";
import { moveItem } from "../../Util/Util";

const SidePanelContext         = createContext(null);
const SidePanelDispatchContext = createContext(null);


export default function SidePanelProvider ({ children }) {
  const [sidePanel, dispatch] = useReducer(
    sidePanelReducer, {
      sections: [],
      nextSectionID: 0
    }
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
  switch (action.type) {
    case 'added_side_section': {
      const newSection = {
        id: sidePanel.nextSectionID,
        itemsIDs: []
      };

      return {
        nextSectionID: sidePanel.nextSectionID + 1,
        sections     : [...sidePanel.sections, newSection]
      };
    };


    case 'updated_side_section': {
      const updatedSections = sidePanel.sections.map(s => {
        if (s.id === action.id) {
          const updatedSection = { ...s };
          s[action.property] = action.value;
          
          return updatedSection;
        }
        return s;
      });

      return {
        ...sidePanel,
        sections: updatedSections
      };
    };

    
    case 'deleted_side_section': {
     const newSections =  sidePanel.sections.filter(
        ss => ss.id !== action.id
      );

      return { 
        ...sidePanel,
        sections: newSections
      };
    };

    
    case 'added_item_to_section': {
      const newSections = sidePanel.sections.map(ss => {
        if (ss.id === action.id) {
          return { 
            ...ss,
            itemsIDs: [ ...ss.itemsIDs, action.itemID]
          };
        };
      return ss;
      });

      return {
        ...sidePanel,
        sections: newSections
      };
    };

    
    case 'deleted_item': {
      const newSections = sidePanel.sections.map(ss => {
        const newItemsIDs = ss.itemsIDs.filter(id => id !== action.itemID);

        return { 
          ...ss,
          itemsIDs: newItemsIDs
        };
      });

      return {
        ...sidePanel,
        sections: newSections
      };
    };


    case "moved_item": {
      const newSections = sidePanel.sections.map(ss => {
        if (ss.title !== action.section) return ss;

        const newItemOrder = moveItem(ss.itemsIDs, action.itemID, action.direction);

        return {
          ...ss,
          itemsIDs: newItemOrder
        };
      });

      return {
        ...sidePanel,
        sections: newSections
      };
    };


    case "moved_section": {
      const item     = sidePanel.sections.find(s => s.id === action.id);
      const newOrder =  moveItem(sidePanel.sections, item, action.direction);

      return {
        ...sidePanel,
        sections: newOrder
      };
    };

    
    case 'loaded_data': {
      return action.data;
    };


    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    };
  };
};
