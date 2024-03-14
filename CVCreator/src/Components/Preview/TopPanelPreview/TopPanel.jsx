import { useData } from "../../../Contexts/DataProvider";


const iconsMap = {
  'Phone number': 'call',
  'Email'       : 'mail',
  'Country'     : 'flag',
  'Address'     : 'home',

}

const unlabelled = [
  'First name',
  'Last name',
  'Job title'
]


export default function TopPanel () {
  const data     = useData().topPanel || null;
  const portrait = getPortraitIfUploaded();


  let renderedElements = data
  ? Object.entries(data).map(([key, value]) => {   
      return createTopPanelElement(key, value);
    })
  : null;
  

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
  const label = createLabel(key);

  return (
    <div
      key      ={ key }
      className="top-panel-element"
      id       ={ `top-panel-preview-$${ key }` }
    >
      { label } 
      <span
        className="preview-element-value"
      >
        { value }
      </span>
    </div>
  );
}


function createLabel (key) {
  if (iconsMap[key]) return (
    <span 
      className="material-symbols-outlined"
    >
      { iconsMap[key] }
    </span>
  );

  if (unlabelled.includes(key)) return null;

  return (
    <span
      className="preview-element-label"
    >
      { key }
    </span>
  );
}


function getPortraitIfUploaded () {
  const data  = useData();

  if (!data.files) return null;
  if (!data.files.Photo) return null;

  return data.files.Photo;
}