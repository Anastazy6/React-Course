import { 
  createContext,
  useContext,
  useReducer
} from "react";

import MainItemsProvider from "./MainItemsProvider";

const MainPanelContext         = createContext(null);
const MainPanelDispatchContext = createContext(null);


export default function MainPanelProvider ({ children }) {
  const [mainPanel, dispatch] = useReducer(
    mainPanelReducer, {
      nextSectionId: 0,
      sections: [],
      clause: '',
      locale: {
        hasNoEndDate: 'present'
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
        title    : '',
        location : '',
        startDate: '',
        endDate  : ''
      }

      console.log(data.sections)

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
        } else {
          return s;
        }
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
        else {
          return s;
        }
      });

      return {
        ...data,
        sections: newSections
      }
    }

    case 'moved_section_up': {
      console.warn("Moving sections up is not yet implemented");
      return data;
    }

    case 'moved_section_down': {
      console.warn("Moving sections down is not yet implemented as well");
      return data;
    }

    case 'loaded_data': {
      return { ...action.data }
    }

    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  } 
}