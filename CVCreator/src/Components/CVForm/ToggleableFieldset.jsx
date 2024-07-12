export default function ToggleableFieldset ({ legend, children }) {
  function toggleFieldset (e) {
    e.stopPropagation();
    console.log(e.target);
    return e.target.parentElement.classList.toggle('closed-fieldset');
  }
  
  return (
    <fieldset
      className="toggleable-fieldset"
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