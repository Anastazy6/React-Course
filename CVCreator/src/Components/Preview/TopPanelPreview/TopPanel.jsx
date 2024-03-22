import { useTopPanel } from "../../../Contexts/DataModules/TopPanelProvider";
import { useFiles    } from "../../../Contexts/DataModules/FilesProvider";
import { parseCSSSelector } from "../../../Util/Util";


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
  const data     = useTopPanel();
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
      <div
        id ='top-panel-preview-img'
      >
        { renderedPhoto    }
      </div>
    </section>
  )
}



function createTopPanelElement (key, value) {
  const label = createLabel(key);

  return (
    <div
      key      ={ key }
      className="top-panel-element"
      id       ={ `top-panel-preview-${ parseCSSSelector(key) }` }
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
  const files  = useFiles();  
  if (!files.Photo) return null;

  return files.Photo;
}