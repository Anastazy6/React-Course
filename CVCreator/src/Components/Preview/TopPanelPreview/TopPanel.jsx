import { useData } from "../../../Contexts/DataProvider";


export default function TopPanel () {
  const data     = useData().topPanel || null;
  const portrait = getPortraitIfUploaded();

  console.log(portrait);

  let renderedElements = null;
  if (data) {
    renderedElements = Object.entries(data).map(([key, value]) => {
      console.log(key, value);
      
      return createTopPanelElement(key, value);
    });
  }

  let renderedPhoto = portrait 
  ? <img 
      src={ portrait } 
      alt={ `${data['First name']} ${data['Last name']} photo` }   
    />
  : null;
  

  return (
    <section
      id="top-panel-preview"
    >
      { renderedElements }
      { renderedPhoto    }
      
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


function getPortraitIfUploaded () {
  const data  = useData();

  if (!data.files) return null;
  if (!data.files.Photo) return null;

  return data.files.Photo;
}