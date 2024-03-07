import {
  createContext,
  useContext,
  useReducer
} from 'react';


function DataContext () {
  return createContext(null);
}


function DataDispatchContext () {
  return createContext(null);
}


export default function DataProvider ({ children }) {
  const [data, dispatch] = useReducer(dataReducer, {test: 'test'});

  console.log(data)
  console.log(typeof dispatch)
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


function dataReducer (data, action) {
  switch (action.type) {
    case 'added_field': {
      console.log('TODO');
      return data;
    }
    case 'updated_data': {
      console.log('Not yet implemented');
      return data;
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

