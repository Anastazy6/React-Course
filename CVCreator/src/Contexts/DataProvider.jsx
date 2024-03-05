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
  const [data, dispatch] = useReducer(dataReducer, {});

  return (
    <>
      <DataContext.Provider value={ data }>
        <DataDispatchContext.Provider value={ dispatch }>
          { children }
        </DataDispatchContext.Provider>
      </DataContext.Provider>
    </>
  );
}


export function useData () {
  return useContext(DataContext);
}

export function useDataDispatch () {
  return useContext(DataDispatchContext);
}


function dataReducer (state, action) {
  switch (action.type) {
    case 'updated_data': {
      console.log('Not yet implemented');
      return state;
    }
    default: {
      throw new TypeError(`Invalid action type: ${action.type}`);
    }
  }
}