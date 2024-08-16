import SidePanel from "./SidePanel/SidePanel";
import TopPanel  from "./TopPanel/TopPanel";

import MainPanel from "./Main/Main";
import { uploadData } from "../../Storage/helpers";
import StorageControls from "../../Storage/Controls";


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
        <input
          id="local-storage-upload"
          type="file"
          accept=".json"
          onChange={ uploadData }
          hidden
        />

        <TopPanel />
        <SidePanel />
        <MainPanel />
        <StorageControls /> 

      </form>
      <div
        id="local-storage-controls"
      >
        <div
          id='storage-buttons'
        >

        </div>
      </div>
    </div>
  );
}


function PrintHeightAdjuster () {

  function setHeightForPrint () {
    const stuffToPrint = document.querySelector(".print-content");
    
    const PRINT_PAGE_HEIGHT = parseInt(getComputedStyle(stuffToPrint).minHeight);
    const currentHeight = parseInt(getComputedStyle(stuffToPrint).height);
    stuffToPrint.style.height = PRINT_PAGE_HEIGHT // reset current height
    const pages = currentHeight % PRINT_PAGE_HEIGHT === 0
      ? currentHeight / PRINT_PAGE_HEIGHT
      : Math.floor(currentHeight / PRINT_PAGE_HEIGHT) + 1;
    const totalHeight = pages * PRINT_PAGE_HEIGHT;

    stuffToPrint.style.height = `${ totalHeight }px`;

    console.log(`
      Page height   : ${ PRINT_PAGE_HEIGHT }px
      Current height: ${ currentHeight     }px
      Pages         : ${ pages             }
      Total height  : ${ totalHeight       }px
    `)
  }

  function handleClick () {
    setHeightForPrint();
    print();
  }

  return (
    <button
      onClick={ handleClick }
      role   ='btn'
    >
      Download as PDF or print
    </button>
  )
}
