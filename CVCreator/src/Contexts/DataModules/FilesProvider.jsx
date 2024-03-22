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


function filesReducer (files, action) {
  const name     = action.name;
  const newFile  = action.file;

  switch (action.type) {
    case 'uploaded_file': {
      return saveUploadedFile(files, name, newFile);
    }
    case 'loaded_data': {
      return { ...action.data };
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}

function saveUploadedFile (files, name, uploadedFile) {
  const newFiles = { ...files };
  newFiles[name] = URL.createObjectURL(uploadedFile);

  return newFiles;
}