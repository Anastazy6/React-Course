// import jsPDF from 'jspdf';

const PDF_CONVERSION_CONTENT = document.getElementById('side-panel-preview-wrapper');

//const doc = new jsPDF();


export default function DownloadButton ({ }) {
  function handleClick (e) {
    alert("Not yet implemented!");
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