import { 
  createContext,
  useContext,
  useReducer
} from "react";


const FileContext         = createContext(null);
const FileDispatchContext = createContext(null);


export default function FileProvider ({ children }) {
  const [file, dispatch] = useReducer(
    fileReducer, {}
  );

  return (
    <FileContext.Provider value = { file }>
      <FileDispatchContext.Provider value = { dispatch }>
        { children }
      </FileDispatchContext.Provider>
    </FileContext.Provider>
  );
}


export function useFile () {
  return useContext(FileContext);
}

export function useFileDispatch () {
  return useContext(FileDispatchContext);
}


function fileReducer (data, action) {
  
}