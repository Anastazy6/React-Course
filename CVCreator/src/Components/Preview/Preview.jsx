import SidePanel from "./SidePanelPreview/Panel";
import TopPanel  from "./TopPanelPreview/TopPanel";
import MainPanel from "./MainPreview/Panel";



export default function Preview () {



  return (
    <article
      id ="cv-preview-wrapper"
    >

      <div
        className="cv-preview print-content"
      >
        <TopPanel />
        <SidePanel />
        <MainPanel />
      </div>
    </article>
  );
}

