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
    case 'loaded_data': {
      return [ ...action.data ];
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}
