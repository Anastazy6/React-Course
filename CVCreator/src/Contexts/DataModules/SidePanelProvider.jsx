import { 
  createContext,
  useContext,
  useReducer
} from "react";


const SidePanelContext         = createContext(null);
const SidePanelDispatchContext = createContext(null);


export default function SidePanelProvider ({ children }) {
  const [sidePanel, dispatch] = useReducer(
    sidePanelReducer, []
  );

  return (
    <SidePanelContext.Provider value = { sidePanel }>
      <SidePanelDispatchContext.Provider value = { dispatch }>
        { children }
      </SidePanelDispatchContext.Provider>
    </SidePanelContext.Provider>
  );
}


export function useSidePanel () {
  return useContext(SidePanelContext);
}

export function useSidePanelDispatch () {
  return useContext(SidePanelDispatchContext);
}


function sidePanelReducer (data, action) {

  switch (action.type) {
    case 'added_side_section': {
      if (data.some(sections => sections.title === action.title)) {
        alert(`Side Panel section named ${action.title} exists already. Pick other name.`);
        return data;
      }
      
      return [...data, action.sectionForm];
    }
    case 'deleted_side_section': {
     return data.filter(
        ss => ss.title !== action.title
      );
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}
