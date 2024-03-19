import { 
  createContext,
  useContext,
  useReducer
} from "react";


const FilesContext         = createContext(null);
const FilesDispatchContext = createContext(null);


export default function FilesProvider ({ children }) {
  const [files, dispatch] = useReducer(
    filesReducer, {}
  );

  return (
    <FilesContext.Provider value = { files }>
      <FilesDispatchContext.Provider value = { dispatch }>
        { children }
      </FilesDispatchContext.Provider>
    </FilesContext.Provider>
  );
}


export function useFiles () {
  return useContext(FilesContext);
}

export function useFilesDispatch () {
  return useContext(FilesDispatchContext);
}


function filesReducer (data, action) {
  const name  = action.name;
  const file  = action.file;

  switch (action.type) {
    case 'uploaded_file': {
      return saveUploadedFile(data, name, file);
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}

function saveUploadedFile (data, name, file) {
  const newData       = { ...data };
  newData.files       = { ...data.files };
  newData.files[name] = URL.createObjectURL(file);

  return newData;
}