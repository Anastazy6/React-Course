export default function Item ({ item, type, maxLevel }) {
  console.log(maxLevel);
  const level = pickLevelStyle(type, item.level, maxLevel);

  return  (
    <div
      className="side-item"
    >
      <div className="side-item-title">
        { item.title }
      </div>
      { level }
    </div>
  )
} 


function pickLevelStyle (type, level, maxLevel) {
  if (type === 'flat') return null;

  if (type === 'languages') return (
    <LangLevel 
      level={ level }
    />
  );

  if (type === 'skills-stars') return (
    <StarLevel
      level   ={ level    }
      maxLevel={ maxLevel }
    />
  );

  return (
    <CustomLevel
        type    ={ type     }
        level   ={ level    }
        maxLevel={ maxLevel }
    />
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

    console.log(i, maxLevel);
    const fill = i < level ? 'full' : 'empty';

    const star = <div 
      className={`material-symbols-outlined star-${ fill }`}
    >
      star
    </div>;
    stars.push(star);
  }

  return (
    <div
      className='side-item-level-stars'
    >
      { stars }
    </div>
  )
}

function CustomLevel ({ type, level, maxLevel }) {
  const levelItems = [];
  for(let i = 0; i < maxLevel; i++) {
    const fill = i < level ? 'full' : 'empty';

    const levelItem = <div 
      className={`level-item-${ type } level-item-${ fill }`}
    />;
    levelItems.push(levelItem);
  }

  return (
    <div
      className={`side-item-level-${ type }`}
    >
      { levelItems }
    </div>
  )
}