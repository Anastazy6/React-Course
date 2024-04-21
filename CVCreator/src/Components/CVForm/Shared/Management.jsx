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
      <BasicManagement
        label="section"
        handleMoveUp  ={ handleMoveUp        }
        handleMoveDown={ handleMoveDown      }
        handleDelete  ={ handleDeleteSection }
      />

    </SectionManagemenent>
  );
}


export function ItemManagement ({
  handleMoveDown,
  handleMoveUp,
  handleDelete
}) {

  return (
    <BasicManagement
      label         ="item"
      handleMoveUp  ={ handleMoveUp   }
      handleMoveDown={ handleMoveDown }
      handleDelete  ={ handleDelete   }
    />
  );
}


function BasicManagement({
  label,
  handleMoveUp,
  handleMoveDown,
  handleDelete
}) {
  return (
    <>
      <Up
        onClick={ handleMoveUp }
        wrapper={ SVG_WRAPPER  }
        title  ={`Move ${ label } up` }
      />
      <Down
        onClick={ handleMoveDown }
        wrapper={ SVG_WRAPPER    }
        title  ={`Move ${ label } down` }
      />
      <Delete
        onClick={ handleDelete }
        wrapper={ SVG_WRAPPER  }
        title  ={`Delete ${ label }` }
      />
    </>
  )
}