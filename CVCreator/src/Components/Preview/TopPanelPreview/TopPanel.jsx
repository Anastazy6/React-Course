import { useData } from "../../../Contexts/DataProvider";


export default function TopPanel () {
  const data = useData().topPanel || null;
  let renderedElements = null;

  if (data) {
    renderedElements = Object.entries(data).map(([key, value]) => {
      console.log(key, value);
      
      return createTopPanelElement(key, value);
    });
  }

  return (
    <section
      id="top-panel-preview"
    >
      { renderedElements }
    </section>
  )
}



function createTopPanelElement (key, value) {
  return (
    <div
      className="top-panel-element"
      id       ={`top-panel-preview-$${ key }`}
    >

      <div
        className="preview-element-label"
      >
        { key }
      </div>
      
      <div
        className="preview-element-value"
      >
        { value }
      </div>
    </div>
  );
}