// import jsPDF from 'jspdf';

const PDF_CONVERSION_CONTENT = document.getElementById('side-panel-preview-wrapper');

//const doc = new jsPDF();


export default function DownloadButton ({ }) {
  function handleClick (e) {
    alert("Use right 'click->print' or 'ctrl+p' and then pick 'save as pdf' in the target device");
  }

  

  return (
    <>

    <button
      onClick={ handleClick }
    >
      Download as PDF
    </button>
  </>
  );
}