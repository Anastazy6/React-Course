import { 
  createContext,
  useContext,
  useReducer
} from "react";

import MainItemsProvider from "./MainItemsProvider";
import { moveItem } from "../../Util/Util";

const MainPanelContext         = createContext(null);
const MainPanelDispatchContext = createContext(null);

const DEFAULT_TITLE = "New Section";
const DEFAULT_TYPE  = "Employment";


export default function MainPanelProvider ({ children }) {
  const [mainPanel, dispatch] = useReducer(
    mainPanelReducer, {
      nextSectionId: 0,
      sections: [],
      clause: '',
      locale: {
        hasNoEndDate          : 'present',
        institutionPreposition: 'at',
        nativeLanguage        : 'Native'
      }
    }
  );

  return (
    <MainItemsProvider>
      <MainPanelContext.Provider value = { mainPanel }>
        <MainPanelDispatchContext.Provider value = { dispatch }>
          { children }
        </MainPanelDispatchContext.Provider>
      </MainPanelContext.Provider>
    </MainItemsProvider>
      
  );
}


export function useMainPanel () {
  return useContext(MainPanelContext);
}

export function useMainPanelDispatch () {
  return useContext(MainPanelDispatchContext);
}


function mainPanelReducer (data, action) {
  switch (action.type) {

    case 'updated_gdpr_clause': {
      return {
        ...data,
        clause: action.value
      }
    }

    case 'updated_locale': {
      const updatedLocale = data.locale ? { ...data.locale } : {};
      updatedLocale[action.name] = action.value

      return {
        ...data,
        locale: updatedLocale
      }
    }

    case 'created_section': {
      const id = data.nextSectionId || 0;
      const newSection = {
        id       : id,
        itemsIDs : [],
        location : '',
        startDate: '',
        endDate  : '',
        title    : DEFAULT_TITLE,
        type     : DEFAULT_TYPE
      }

      const newSections = data.sections && data.sections.length > 0
      ? [...data.sections, newSection]
      : [newSection];
      
      return {
        ...data,
        nextSectionId: id + 1,
        sections: newSections
      }
    }


    case 'updated_section': {
      const updatedSections = data.sections.map(s => {
        if (s.id === action.section.id) {
          return { ...action.section }
        } 
        return s;
      });

      return {
        ...data,
        sections: updatedSections
      }
    }

    case 'deleted_section': {
      const updatedSections = data.sections.filter(
        s => action.sectionID !== s.id
      );

      return {
        ...data,
        sections: updatedSections
      }
    }

    case 'added_item_to_section': {
      const newSections = data.sections.map(s => {
        if (s.id === action.sectionID) {
          const newItemsIDs = [...s.itemsIDs, action.itemID]
          const newSection = {
            ...s,
            itemsIDs: newItemsIDs
          }
          return newSection;
        }
        return s;
      });

      return {
        ...data,
        sections: newSections
      }
    }

    case 'moved_section': {
      const item = data.sections.find(s => action.id === s.id);
      const newOrder = moveItem(data.sections, item, action.direction);

      return {
        ...data,
        sections: newOrder
      }
    }

    case 'moved_item': {
      const updatedSections = data.sections.map(s => {
        if (s.id !== action.sectionID) return s;

        const newItemOrder = moveItem(s.itemsIDs, action.itemID, action.direction);

        return {
          ...s,
          itemsIDs: newItemOrder
        };
      });

      return {
        ...data,
        sections: updatedSections
      }
    }

    case 'loaded_data': {
      return { ...action.data }
    }

    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  } 
}