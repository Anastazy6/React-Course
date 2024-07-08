import ContextsGrouper from "../Contexts/ContextsGrouper";
import * as storage from './helpers';


export function LogDataButton () {
  function handleClick () {
    console.log(storage.loadData());
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


export function ClearDataButton () {
  function handleClick () {
    const confirmed = confirm("Are you sure? This operation is about to clear all your CV data.");
    if (confirmed) { 
      localStorage.clear();
      alert("CV data cleared!")
    } else {
      alert("Operation aborted, CV data remains intact.");
    }
  }

  return (
    <button
      role='btn'
      onClick={ handleClick }
    >
      Clear CV data
    </button>
  );
}


export function SaveButton () {
  const contexts = ContextsGrouper.contexts.map(
    context =>  [context.context(), context.group]
  );

  function handleClick () {
    storage.saveToLocalStorage(contexts);
  }

  return (
    <button
      role='btn'
      onClick={ handleClick }
    >
      Save data
    </button>
  )
}


export function DownloadDataButton () {
  function handleClick () {
    storage.downloadLocalStorageData()
  }

  return (
    <button
      role='btn'
      onClick={ handleClick }
    >
      Download data
    </button>
  )
}


export function LoadButton () {
  const dispatches = ContextsGrouper.contexts.map(
    context => [context.dispatch(), context.group]
  );

  function handleClick () {
    storage.loadStateFromLocalStorage(dispatches);
  }
 
  return (
    <button
      role='btn'
      id  ='load-from-local-storage-button'
      onClick={ handleClick }
    >
      Load data from local storage
    </button>
  )
}


export function UploadButton () {
  function openDialogMenu () {
    const fileInput = document.getElementById('local-storage-upload');
    fileInput.click();
  }
  
  return (
    <button
      role='btn'
      onClick={ openDialogMenu }
    >
      Upload data
    </button>
  );
}