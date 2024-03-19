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
      return addSideSectionForm(data, action.sectionForm);
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


// Prototype: no collision protection if a section with a given title already exists
function addSideSectionForm (data, sectionForm) {
  const newData = { ...data };
  newData.sideSections = newData.sideSections
  ? [ ...newData.sideSections, sectionForm]
  : [sectionForm];

  return newData;
}