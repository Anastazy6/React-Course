import ContextsGrouper from "../Contexts/ContextsGrouper";


export function saveData (data, name) {
  const serializedData = JSON.stringify(data);

  localStorage.setItem(name, serializedData);
}


export function loadData () {
  const groups = ContextsGrouper.contexts.map(
    context => context.group
  );
  const data = {};
  groups.forEach(group => 
    data[group] = JSON.parse(localStorage.getItem(group))
  );
  
  return data;
}


export function saveToLocalStorage (contexts) {
  contexts.forEach(context => {
    const data  = context[0];
    const group = context[1];

    saveData(data, group);
  });
}


export function loadStateFromLocalStorage (dispatches) {
  const data = loadData();
  let errorCounter = 0;
  try {
    dispatches.forEach(([dispatch, group]) => {
      if (!data[group]) {
        errorCounter++;
        console.warn(`Couldn't find data for ${ group } in localStorage`);
        return;
      }
      dispatch({
        type: 'loaded_data',
        data: data[group]
      });
    });
  } catch (e) {
    alert("Couldn't load data from local storage");
    console.error(e);
  } finally {
    if (errorCounter > 0) {
      alert(`Couldn't load data for ${ errorCounter } of ${ dispatches.length } data groups`);
    }
  }
}


export function downloadLocalStorageData () {
  const data = readLocalStorage();

  const fakeAnchor = document.createElement('a');
  const dataType = 'data:application/JSON';
  const encodedURIComponent = encodeURIComponent(data);

  return Object.assign(fakeAnchor, {
    href: `${ dataType }, ${ encodedURIComponent }`,
    download: "localStorageData"
  }).click();
}


export function uploadData () {  
  const fileInput  = document.getElementById('local-storage-upload');
  const uploadedFile = fileInput.files[0];

  readFile(uploadedFile, saveFromFile);
}

/**
 * Overwrites localStorage with data uploaded from a JSON file containing stored
 *   CV data. Restores localStorage to it's state from before calling this function
 *   in case of any error.
 * @param {*} data 
 */
export function saveUploadedData (data) {
  const currentData = readLocalStorage();
  try {  
    overwriteLocalStorage(data);
  } catch {
    alert('An error occured during uploading data to localStorage. Restored old data.');
    overwriteLocalStorage(currentData);
  }
}


export function loadDataFromLocalStorage () {
  const loadButton = document.getElementById('load-from-local-storage-button');
  loadButton.click();
}


function readLocalStorage () {
  const localStorageData = Object.keys(localStorage).reduce((obj, k) => (
    { ...obj,
      [k]: JSON.parse(localStorage.getItem(k))
    }), {}
  );

  const stringifiedData = JSON.stringify(localStorageData, null, 2);

  return stringifiedData;
}


function overwriteLocalStorage (data) {
  localStorage.clear();

  if (data) Object.entries(JSON.parse(data)).map(([key, value]) => {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
  });
}


function readFile (file, next) {
  const reader = new FileReader;
  reader.onload = e => next(e);

  reader.readAsText(file);
}


function saveFromFile (e) {
  saveUploadedData(e.target.result);
  loadDataFromLocalStorage() 
}


// // temporary, this is going to be changed or removed
// export function serialize (cvData) {
//   const data = Object.keys(localStorage).reduce((obj, k) => (
//     { ...obj,
//       [k]: JSON.parse(localStorage.getItem(k))
//     }), {}
//   );

//   const stringifiedData = JSON.stringify(data, null, 2);
// }