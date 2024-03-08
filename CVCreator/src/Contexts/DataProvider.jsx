import {
  createContext,
  useContext,
  useReducer
} from 'react';


const DataContext         = createContext(null);
const DataDispatchContext = createContext(null);


export default function DataProvider ({ children }) {
  const [data, dispatch] = useReducer(
    dataReducer,
    {}
  );
  
  return (
      <DataContext.Provider value={ data }>
        <DataDispatchContext.Provider value={ dispatch }>
          { children }
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
  const group = action.group;
  const name  = action.name;
  const value = action.value;

  switch (action.type) {
    case 'added_field': {
      return addNewField(data, group, name);
    }
    case 'updated_data': {
      return getUpdatedData(data, group, name, value);
    }
    case 'deleted_field': {
      console.log("TODO");
      return data;
    }
    default: {
      throw new TypeError(`Invalid action type: ${action.type}`);
    }
  }
}


function getUpdatedData (data, group, name, value) {
  const newData  = { ...data }
  newData[group] = { ...data[group] };
  newData[group][name] = value;

  return newData;
}


function addNewField (data, group, name) {
  const newData  = { ...data };

  newData[group] = data[group] 
  ? { ...data[group] } 
  : {};
  
  newData[group][name] = data[group][name]
  ? { ...data[group][name] } 
  : '';

  return newData;
}