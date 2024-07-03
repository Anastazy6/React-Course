import { useFiles,     useFilesDispatch     } from "../Contexts/DataModules/FilesProvider";
import { useTopPanel,  useTopPanelDispatch  } from "../Contexts/DataModules/TopPanelProvider";
import { useSideItems, useSideItemsDispatch } from "../Contexts/DataModules/SideItemsProvider";
import { useSidePanel, useSidePanelDispatch } from "../Contexts/DataModules/SidePanelProvider";
import { useMainPanel, useMainPanelDispatch } from "../Contexts/DataModules/MainPanelProvider";
import { useMainItems, useMainItemsDispatch } from "../Contexts/DataModules/MainItemsProvider";



export function saveData (data, name) {
  const serializedData = JSON.stringify(data);

  localStorage.setItem(name, serializedData);
}


export function loadData () {
  const groups = [
    'files',
    'topPanel',
    'sideItems',
    'sidePanel',
    'mainPanel',
    'mainItems'
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
    [useSideItems(), 'sideItems'],
    [useSidePanel(), 'sidePanel'],
    [useMainPanel(), 'mainPanel'],
    [useMainItems(), 'mainItems']
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

export function DownloadDataButton () {
  return (
    <button
      role='btn'
      onClick={ downloadLocalStorageData }
    >
      Download data
    </button>
  )
}

export function LoadButton () {
  const dispatches = [
    [useFilesDispatch(),     'files'    ],
    [useTopPanelDispatch(),  'topPanel' ],
    [useSideItemsDispatch(), 'sideItems'],
    [useSidePanelDispatch(), 'sidePanel'],
    [useMainPanelDispatch(), 'mainPanel'],
    [useMainItemsDispatch(), 'mainItems']
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


function downloadLocalStorageData () {
  const data = Object.keys(localStorage).reduce((obj, k) => (
    { ...obj,
      [k]: JSON.parse(localStorage.getItem(k))
    }), {}
  );

  const stringifiedData = JSON.stringify(data, null, 2);
  const fakeAnchor = document.createElement('a');
  const dataType = 'data:application/JSON';
  const encodedURIComponent = encodeURIComponent(stringifiedData)

  return Object.assign(fakeAnchor, {
    href: `${ dataType }, ${ encodedURIComponent }`,
    download: "localStorageData"
  }).click();
}