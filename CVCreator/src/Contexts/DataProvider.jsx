import {
  createContext,
  useContext,
  useReducer
} from 'react';

import { loadData } from '../Storage/storage';
import FileProvider from './DataModules/FilesProvider';
import TopPanelProvider from './DataModules/TopPanelProvider';
import SidePanelProvider from './DataModules/SidePanelProvider';
import MainPanelProvider from './DataModules/MainPanelProvider';

const DataContext         = createContext(null);
const DataDispatchContext = createContext(null);


export default function DataProvider ({ children }) {
  const [data, dispatch] = useReducer(
    dataReducer,
    {
      sideSections: [],
    }
  );
  
  return (
      <DataContext.Provider value={ data }>
        <DataDispatchContext.Provider value={ dispatch }>
          <SubcontextsProvider>
            { children }
          </SubcontextsProvider>
        </DataDispatchContext.Provider>
      </DataContext.Provider>
  );
}


export function useData () {
  return useContext(DataContext);
}

export function useDataDispatch () {
  return useContext(DataDispatchContext);
}

/**
 * 
 * @param {*} data 
 * @param {*} action: {
 *    type : dispatch action type,
 *    group: input group (a visually distinct part of the CV creator, like Top Panel or Side Panel)
 *    name : input name (in-group input identifier)
 *    value: new value (for 'updated_data' action type only)
 * } 
 * @returns 
 */
function dataReducer (data, action) {
  switch (action.type) { 
    case 'loaded_data_from_local_storage': {
      return { ...action.data };
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}







function SubcontextsProvider ({ children }) {
  return (
    <FileProvider>
      <TopPanelProvider>
        <SidePanelProvider>
          <MainPanelProvider>
            { children }
          </MainPanelProvider>
        </SidePanelProvider>
      </TopPanelProvider>
    </FileProvider>
  );
}