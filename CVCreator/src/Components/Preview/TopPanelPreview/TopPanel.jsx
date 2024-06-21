import { useTopPanel } from "../../../Contexts/DataModules/TopPanelProvider";
import { useFiles    } from "../../../Contexts/DataModules/FilesProvider";
import { parseCSSSelector } from "../../../Util/Util";
import { Call, Flag, Home, Mail } from "../../../assets/SVG/TopPanelIcons";

const iconsMap = {
  'Phone number': <Call />,
  'Email'       : <Mail />,
  'Country'     : <Flag />,
  'Address'     : <Home />,

}

const unlabelled = [
  'First name',
  'Last name',
  'Job title',
  'Full name'
]


export default function TopPanel () {
  const data = useTopPanel();
  const portrait = getPortraitIfUploaded();
  const renderedElements = renderData(data);

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
      <div
        id="top-panel-preview-text"
      >
        { renderedElements }
      </div>

      <div
        id ='top-panel-preview-img'
      >
        { renderedPhoto    }
      </div>
    </section>
  )
}


function renderData (data) {

  if (data) {
    let renderedElements = Object.entries(data).map(([key, value]) => {
      if (['First name', 'Last name'].includes(key)) return;

      return createTopPanelElement(key, value);
    });
    const renderedName = createTopPanelElement('Full name', `${data['First name']} ${data['Last name']}`)
    renderedElements = [ 
      ...renderedElements,
      renderedName
    ]

    return renderedElements;
  }  
  return null;
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
      <div
        className="preview-element-value"
      >
        { value }
      </div>
    </div>
  );
}


function createLabel (key) {
  if (iconsMap[key]) return iconsMap[key];

  if (unlabelled.includes(key)) return null;

  return (
    <div
      className="preview-element-label"
    >
      { key }
    </div>
  );
}


function getPortraitIfUploaded () {
  const files  = useFiles();  
  if (!files.Photo) return null;

  return files.Photo;
}