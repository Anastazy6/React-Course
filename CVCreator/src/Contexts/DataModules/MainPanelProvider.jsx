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
    mainPanelReducer, {}
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
    case 'loaded_data': {
      return { ...action.data }
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  } 
}