import GDPRClause from "./Clause";

// Wraps the Main Panel Preview and GDPR clause preview in a single wrapper element,
//   so that they're spatially related to each other
export default function MainPanelPreviewWrapper({ }) {

  return (
    <section
      id="main-panel-preview-wrapper"
    >
      <MainPanelPreview />
      <GDPRClause />
    </section>
  )
}


function MainPanelPreview ({ }) {

  return (
    <div
      id="main-panel-preview"
    >
    
    </div>
  )
}