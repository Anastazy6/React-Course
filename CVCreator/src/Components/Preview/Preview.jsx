import SidePanel from "./SidePanelPreview/Panel";
import TopPanel  from "./TopPanelPreview/TopPanel";

export default function Preview () {
  return (
    <article
      id="cv-preview"
    >
      <TopPanel />
      <SidePanel />

    </article>
  )
}