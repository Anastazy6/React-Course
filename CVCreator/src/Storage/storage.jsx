import { useFiles,     useFilesDispatch     } from "../Contexts/DataModules/FilesProvider";
import { useTopPanel,  useTopPanelDispatch  } from "../Contexts/DataModules/TopPanelProvider";
import { useSidePanel, useSidePanelDispatch } from "../Contexts/DataModules/SidePanelProvider";
import { useMainPanel, useMainPanelDispatch } from "../Contexts/DataModules/MainPanelProvider";



export function saveData (data, name) {
  const serializedData = JSON.stringify(data);

  localStorage.setItem(name, serializedData);
}


export function loadData () {
  const groups = [
    'files',
    'topPanel',
    'sidePanel',
    'mainPanel'
  ];

  const data = {}
  
  groups.forEach(group => data[group] = JSON.parse(localStorage.getItem(group)));
  
  return data;
}


export function LogDataButton () {
  function handleClick () {
    console.log(loadData());
  }

  return (
    <button
      role='btn'
      onClick={ handleClick }
    >
      Log data
    </button>
  )
}


export function SaveButton () {
  const contexts = [
    [useFiles(),     'files'    ],
    [useTopPanel(),  'topPanel' ],
    [useSidePanel(), 'sidePanel'],
    [useMainPanel(), 'mainPanel']
  ];

  function saveToLocalStorage () {
    contexts.forEach(context => {
      const data  = context[0];
      const group = context[1];

      saveData(data, group);
    });
  }

  return (
    <button
      role='btn'
      onClick={ saveToLocalStorage }
    >
      Save data
    </button>
  )
}


export function LoadButton () {
  const dispatches = [
    [useFilesDispatch(),     'files'    ],
    [useTopPanelDispatch(),  'topPanel' ],
    [useSidePanelDispatch(), 'sidePanel'],
    [useMainPanelDispatch(), 'mainPanel']
  ];

  function loadFromLocalStorage () {
    const data = loadData();

    dispatches.forEach(([dispatch, group]) => {
      dispatch({
        type: 'loaded_data',
        data: data[group]
      });
    });
  }
 
  return (
    <button
      role='btn'
      onClick={ loadFromLocalStorage }
    >
      Load data from local storage
    </button>
  )
}