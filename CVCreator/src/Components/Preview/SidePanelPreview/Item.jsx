import { EmptyStar, FullStar } from "../../../assets/SVG/Stars";
import { useMainPanel } from "../../../Contexts/DataModules/MainPanelProvider";

export default function Item ({ item, type, maxLevel }) {
  const title          = pickTitleStyle(type, item.title, item.secValue);
  const secondaryValue = pickSecondaryValueStyle(type, item.secValue, maxLevel);

  return  (
    <div
      className="side-item"
    >
      { title }
      { secondaryValue }
    </div>
  )
} 


function pickTitleStyle (type, title, secValue) {
  if (type === 'links') {
    return (
      <Link
        title={ title    }
        href ={ secValue }
      />
    );
  }

  return (
    <Title
      title={ title }
    />
  )
}


function pickSecondaryValueStyle (type, secValue, maxLevel) {
  const locale = useMainPanel().locale ?? null;
  const nativeLanguage = locale && locale.nativeLanguage || 'Native';


  if (type === 'flat') return null;

  if (type === 'languages') {
    const languageLevel = secValue === 'Native' ? nativeLanguage : secValue;
    return (
      <LangLevel 
        level={ languageLevel }
      />
    );
  }


  if (type === 'skills') return (
    <StarLevel
      level   ={ secValue }
      maxLevel={ maxLevel }
    />
  );
  
  if (type === 'object') return (
    <CustomValue
      value   ={ secValue }
    />
  );
}


function Title ({ title }) {
  return (
    <div className="side-item-title">
      { title }
    </div>
  );
}

function Link ({ title, href }) {
  return (
    <div className="side-item-title linked-title">
      <a 
        href={`http://${ href }`}
      >
        { title }
      </a>
    </div>
  );
}

function LangLevel ({ level }) {
  return (
    <div
      className="side-item-lang">
      { level }
    </div>
  );
}


function StarLevel ({ level, maxLevel }) {
  const stars = [];
  for(let i = 0; i < maxLevel; i++) {
    stars.push(i < level 
      ? <FullStar  key={ i } /> 
      : <EmptyStar key={ i } />
    );
  }

  return (
    <div
      className='side-item-level-stars'
    >
      { stars }
    </div>
  );
}

function CustomValue ({ value }) {
  return (
    <div
      className={`side-item-custom-object`}
    >
      { value }
    </div>
  )
}


