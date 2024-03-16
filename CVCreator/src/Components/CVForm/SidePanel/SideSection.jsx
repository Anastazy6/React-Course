export default function SideSection ({ title, type, levels }) {


  function handleDeleteSection () {

  }

  return (
    <fieldset>









      <DeleteButton handleClick={ handleDeleteSection } />
    </fieldset>
  )
}


function DeleteButton ({ handleClick }) {
  return (
    <button
      role="btn"
      onClick={ handleClick }
    >
      Delete Section
    </button>
  )
}