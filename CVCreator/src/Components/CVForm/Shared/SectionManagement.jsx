import {
  Add,
  Up,
  Down,
  Delete
} from "../../../assets/SVG/FormIcons";


const SVG_WRAPPER = 'simple-svg-wrapper';

export function SectionManagemenent ({ children, title }) {

  return (
    <div
      className="side-section-managemenent"
    >
      <h4>Manage { title }</h4>
      { children }
    </div>
  )
}

export default function StandardSectionManagemenent ({
  title, handleAddItem, handleMoveUp, handleMoveDown, handleDeleteSection
}) {

  return (
    <SectionManagemenent
      title={ title }
    >
      <Add
        onClick={ handleAddItem }
        wrapper={ SVG_WRAPPER   }
        title  ="Add item"
      />
      <Up
        onClick={ handleMoveUp }
        wrapper={ SVG_WRAPPER  }
        title  ="Move section up"
      />
      <Down
        onClick={ handleMoveDown }
        wrapper={ SVG_WRAPPER    }
        title  ="Move section down"
      />
      <Delete
        onClick={ handleDeleteSection }
        wrapper={ SVG_WRAPPER         }
        title  ="Delete section"
      />
    </SectionManagemenent>
  );
}