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
      <div
        className='section-management management-buttons'
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
      </div>
    </SectionManagemenent>
  );
}


export function ItemManagement ({
  handleMoveDown,
  handleMoveUp,
  handleDelete,
}) {

  return (
    <div
      className='item-management management-buttons'
    >
      <BasicManagement
        label         ="item"
        handleMoveUp  ={ handleMoveUp   }
        handleMoveDown={ handleMoveDown }
        handleDelete  ={ handleDelete   }
      />
    </div>
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