import { 
  createContext,
  useContext,
  useReducer
} from "react";


const TopPanelContext         = createContext(null);
const TopPanelDispatchContext = createContext(null);


export default function TopPanelProvider ({ children }) {
  const [topPanel, dispatch] = useReducer(
    topPanelReducer, {}
  );

  return (
    <TopPanelContext.Provider value = { topPanel }>
      <TopPanelDispatchContext.Provider value = { dispatch }>
        { children }
      </TopPanelDispatchContext.Provider>
    </TopPanelContext.Provider>
  )
}