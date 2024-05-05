import SidePanel from "./SidePanel/SidePanel";
import TopPanel  from "./TopPanel/TopPanel";

import { 
  LogDataButton,
  LoadButton,
  SaveButton
} from '../../Storage/storage';
import MainPanel from "./Main/Main";
import DownloadButton from "../../Storage/download";

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
        <DownloadButton />
      </div>
    </div>
  );
}


