export function saveData (data) {
  const serializedData = JSON.stringify(data);

  localStorage.setItem('data', serializedData);
}

export function loadData () {
  return JSON.parse(localStorage.getItem('data'));
}