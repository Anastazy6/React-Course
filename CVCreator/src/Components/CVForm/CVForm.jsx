import SidePanel from "./SidePanel/SidePanel";
import TopPanel  from "./TopPanel/TopPanel";

import { 
  LogDataButton,
  LoadButton,
  SaveButton
} from '../../Storage/storage';
import MainPanel from "./Main/Main";

export default function CVForm () {
  function handleSubmit (e) {
    e.preventDefault();
  }


  return (
    <div
      id="user-input-zone"
    >
     <form
        id="cv-form"
        onSubmit={ handleSubmit }
      >
        <TopPanel />
        <SidePanel />
        <MainPanel />
        

      </form>
      <div
        id="local-storage-controls"
      >
        <LogDataButton />
        <SaveButton />
        <LoadButton />
      </div>
    </div>
  );
}


function Submit () {
  return (
    <button
      role='submit'
    >
      Submit (does nothing)
    </button>
  )
}




