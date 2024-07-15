import {
  useMainPanel,
  useMainPanelDispatch
} from "../../../../Contexts/DataModules/MainPanelProvider";
import ToggleableFieldset from "../../ToggleableFieldset";



export default function GDPRClause ({ }) {
  const data     = useMainPanel();
  const dispatch = useMainPanelDispatch();

  const value    = data.clause ? data.clause : '';
  

  
  function handleChange(e) {
    dispatch({
      type: 'updated_gdpr_clause',
      value: e.target.value
    });
  }

  return (
    <ToggleableFieldset
        legend='GDPR Clause'
    >
      <label
        className="textarea-label"
      >
        <textarea
          onChange={ handleChange }
          value   ={ value }
          name    ='GDPR-clause-input'
          rows="10"

        />
      </label>
    </ToggleableFieldset>
  )
}