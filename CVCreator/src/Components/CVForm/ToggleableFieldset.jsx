export default function ToggleableFieldset ({ children, legend, id=null }) {
  function toggleFieldset (e) {
    e.stopPropagation();
    console.log(e.target);
    return e.target.parentElement.classList.toggle('closed-fieldset');
  }
  
  return (
    <fieldset
      className="toggleable-fieldset"
      id={ id }
    >
      <legend
        onClick={ toggleFieldset } 
      >
        { legend }
      </legend>
      { children }
    </fieldset>
  );
}