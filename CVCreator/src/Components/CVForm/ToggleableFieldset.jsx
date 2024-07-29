/**
 * 
 * @param {String}  legend    Works as the fieldset's title, displayed on the fake
 *   button made of a legend element
 * @param {*}       id        HTML id for the fieldset; Optional, null by default
 * @param {Boolean} collapsed Indicates whether the fieldset is initially collapsed,
 *   has no effect post generation; Optional and true by default
 * @returns {React.Component}
 */
export default function ToggleableFieldset ({ children, legend, id=null, collapsed=true }) {
  function toggleFieldset (e) {
    e.stopPropagation();
    
    return e.target.parentElement.classList.toggle('closed-fieldset');
  }
  
  return (
    <fieldset
      className={`toggleable-fieldset ${collapsed ? 'closed-fieldset' : '' }`}
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