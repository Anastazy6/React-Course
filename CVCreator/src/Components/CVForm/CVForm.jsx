import SidePanel from "./SidePanel/SidePanel";
import TopPanel  from "./TopPanel/TopPanel";

import { 
  LogDataButton,
  LoadButton,
  SaveButton
} from '../../Storage/storage';

export default function CVForm () {
  function handleSubmit (e) {
    e.preventDefault();
  }


  return (
    <form
      id="cv-form"
      onSubmit={ handleSubmit }
    >
      <TopPanel />
      <SidePanel />

      <Submit />
      <LogDataButton />
      <SaveButton />
      <LoadButton />
    </form>
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




