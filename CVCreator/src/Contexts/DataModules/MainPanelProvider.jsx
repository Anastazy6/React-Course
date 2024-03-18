import { 
  createContext,
  useContext,
  useReducer
} from "react";


const MainPanelContext         = createContext(null);
const MainPanelDispatchContext = createContext(null);


export default function MainPanelProvider ({ children }) {
  const [mainPanel, dispatch] = useReducer(
    mainPanelReducer, {}
  );

  return (
    <MainPanelContext.Provider value = { mainPanel }>
      <MainPanelDispatchContext.Provider value = { dispatch }>
        { children }
      </MainPanelDispatchContext.Provider>
    </MainPanelContext.Provider>
  );
}


export function useMainPanel () {
  return useContext(MainPanelContext);
}

export function useMainPanelDispatch () {
  return useContext(MainPanelDispatchContext);
}


function mainPanelReducer (data, action) {
  
}