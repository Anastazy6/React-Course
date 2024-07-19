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
      className="section-management"
    >
      <h4>Manage { title }</h4>
      <div
        className="management-buttons"
      >
        { children }
      </div>
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
      className     ='item-management'
      label         ="item"
      handleMoveUp  ={ handleMoveUp   }
      handleMoveDown={ handleMoveDown }
      handleDelete  ={ handleDelete   }
    />
  );
}


function BasicManagement({
  className,
  label,
  handleMoveUp,
  handleMoveDown,
  handleDelete
}) {
  return (
    <div
      className={ className }
    >
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
    </div>
  )
}