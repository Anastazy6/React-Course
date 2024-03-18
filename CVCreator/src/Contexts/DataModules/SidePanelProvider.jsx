import { 
  createContext,
  useContext,
  useReducer
} from "react";


const SidePanelContext         = createContext(null);
const SidePanelDispatchContext = createContext(null);


export default function SidePanelProvider ({ children }) {
  const [sidePanel, dispatch] = useReducer(
    sidePanelReducer, {}
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
  
}