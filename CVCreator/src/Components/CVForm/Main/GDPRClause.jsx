import {
  useMainPanel,
  useMainPanelDispatch
} from "../../../Contexts/DataModules/MainPanelProvider";



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
    <fieldset>
      <legend>
        GDPR Clause
      </legend>

      <textarea
        onChange={ handleChange }
        value   ={ value }
        name    ='GDPR-clause-input'

      />

      
    </fieldset>
  )
}