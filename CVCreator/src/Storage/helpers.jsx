import ContextsGrouper from "../Contexts/ContextsGrouper";

export function saveData (data, name) {
  const serializedData = JSON.stringify(data);

  localStorage.setItem(name, serializedData);
}

export function loadData () {
  const groups = ContextsGrouper.contexts.map(context => context.group);

  const data = {}
  
  groups.forEach(group => data[group] = JSON.parse(localStorage.getItem(group)));
  
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
      if (data[group]) {
        dispatch({
          type: 'loaded_data',
          data: data[group]
        });
      } else {
        errorCounter++;
        console.warn(`Couldn't find data for ${ group } in localStorage`);
      }
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


export function uploadData () {  
  const fileInput  = document.getElementById('local-storage-upload');
  const uploadedFile = fileInput.files[0]

  const reader = new FileReader;
  reader.onload = e => {
    saveUploadedData(e.target.result);
    loadDataFromLocalStorage();
  }

  reader.readAsText(uploadedFile);
}


export function saveUploadedData (data) {
   try {
      try {
        JSON.parse(data);
        localStorage.clear();
      } catch {
        console.warn('Aborting before clearing local storage');
      }
      Object.entries(JSON.parse(data)).map(([key, value]) => {
        const stringifiedValue = JSON.stringify(value);
        localStorage.setItem(key, stringifiedValue);
      });
    } catch {
      console.warn('An error occured during uploading data to localStorage.')
      console.log(localStorage);
    }
}


export function loadDataFromLocalStorage () {
  const loadButton = document.getElementById('load-from-local-storage-button');
  loadButton.click();
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