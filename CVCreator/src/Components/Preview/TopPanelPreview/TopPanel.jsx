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

  let renderedPhoto = portrait 
  ? <div
      id ='top-panel-preview-img'
    >
      <img 
        src={ portrait } 
        alt={ `${data['First name']} ${data['Last name']} photo` }   
      />
    </div>
  : null;
  

  return (
    <section
      id="top-panel-preview"
    >
      <div
        id="top-panel-preview-text"
      >
        <PrimaryData   data={ data } />
        <SecondaryData data={ data } />

      </div>

        { renderedPhoto    }
    </section>
  )
}


function SecondaryData ({ data }) {
  const primaryDataKeys = [
    'First name',
    'Last name',
    'Job title'
  ];
  
  if (data) {
    const secondaryData = Object.entries(data).filter(([key, value]) => {
      return !(primaryDataKeys.includes(key));
    });
     
    const renderedElements = Object.values(secondaryData).map(pair => {
      
      return createTopPanelElement(pair[0], pair[1]);
    })

    return (
      <div
        id="top-panel-secondary-data"
      >
        { renderedElements }
      </div>
    );
  }  
  return null;
}


function PrimaryData ({ data }) {
  if (data) {
    const firstName = data['First name'] || '';
    const lastName  = data['Last name']  || '';
    const fullName = createTopPanelElement('Full name', `${ firstName } ${ lastName }`)
    const jobTitle = createTopPanelElement('Job title', data['Job title']);

    return (
      <div
        id="top-panel-primary-data"
      >
        { fullName }
        { jobTitle }
      </div>
    )
  }
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