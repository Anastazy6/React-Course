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
     <PrintHeightAdjuster />
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
function PrintHeightAdjuster () {

  const PRINT_PAGE_HEIGHT = 792; // px, tested for up to 10 pages

  function setHeightForPrint () {
    const stuffToPrint = document.querySelector(".print-content");
    console.log(stuffToPrint);

    const currentHeight = parseInt(getComputedStyle(stuffToPrint).height);
    const pages = Math.floor(currentHeight / PRINT_PAGE_HEIGHT) + 1;

    console.log(currentHeight, pages)

    stuffToPrint.style.minHeight = `${ pages * PRINT_PAGE_HEIGHT }px`;
  }


  return (
    <button
      onClick={ setHeightForPrint }
      role   ='btn'
    >
      Set height for print
    </button>
  )
}
