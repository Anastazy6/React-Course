import { useData, useDataDispatch } from "../../Contexts/DataProvider";
import { loadData, saveData } from "../../Storage/storage";
import SidePanel from "./SidePanel/SidePanel";
import TopPanel from "./TopPanel/TopPanel";


export default function CVForm () {
  const data = useData();
  

  function handleSubmit (e) {
    e.preventDefault();
    console.log(data);
  }


  return (
    <form
      id="cv-form"
      onSubmit={ handleSubmit }
    >
      <TopPanel />
      <SidePanel />

      <Submit />
      <Save />
      <LoadLocal />
    </form>
  );
}


function Submit () {
  return (
    <button
      role='submit'
    >
      Log data
    </button>
  )
}


function Save () {
  const data = useData();

  return (
    <button
      role='btn'
      onClick={ () => saveData(data) }
    >
      Save data
    </button>
  )
}


function LoadLocal () {
  const dispatch = useDataDispatch();

  function loadFromLocalStorage () {
    dispatch({
      type: 'loaded_data_from_local_storage',
      data: loadData()
    })
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