import { useRef } from "react";
import { jsPDF  } from 'jspdf';
import  html2canvas  from 'html2canvas';

import SidePanel from "./SidePanelPreview/Panel";
import TopPanel  from "./TopPanelPreview/TopPanel";
import MainPanel from "./MainPreview/Panel";

export default function Preview () {
  const PDFdoc = useRef();

  function handleCalculateHeight () {
    const newHeight = calculateHeight();

    PDFdoc.current.style.height = newHeight;
  }

  function calculateHeight () {
    const style         = getComputedStyle(PDFdoc.current);
    const baseHeight    = style.minHeight;
    const currentHeight = style.height;
    const pages = Math.floor(currentHeight / baseHeight) + 1;

    return pages * baseHeight;
  }

  async function handleDownloadAsImage (e) {
    const input = PDFdoc.current;
    const canvas = await html2canvas(input)
    const data = canvas.toDataURL('image/png');
    
    const pdf  = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  }

  return (
    <article
      id ="cv-preview-wrapper"
    >
      <button
        onClick={ handleDownloadAsImage }
      >
        Download as image (suitable for printed resumes only)
      </button>
      <button
        onClick={ handleCalculateHeight }
      >
        Calculate height 
      </button>
      <div
        className="cv-preview"
        ref={ PDFdoc }
      >
        <TopPanel />
        <SidePanel />
        <MainPanel />
      </div>
    </article>
  );
}

