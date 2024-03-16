import { useData } from "../../Contexts/DataProvider";
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

      <button
        role='submit'
      >
        Log data
      </button>
    </form>
  );
}