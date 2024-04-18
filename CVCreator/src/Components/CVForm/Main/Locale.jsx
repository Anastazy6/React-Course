import {
  useMainPanel,
  useMainPanelDispatch
} from "../../../Contexts/DataModules/MainPanelProvider";

export default function Locale ({ }) {
  const data = useMainPanel();
  const locale = data.locale ?? {};

  const dispatch = useMainPanelDispatch();

  const localizations = {
    hasNoEndDate: 'An activity is still present'
  }

  const renderedLocalizations = Object.entries(localizations).map(([key, label]) => {
    return (
      <LocaleInput
        onChange={ handleUpdateLocale }
        name    ={ key                }
        value   ={ locale[key] ?? ''  }
        label   ={ label              }
      />
    );
  })

  function handleUpdateLocale (e) {
    dispatch({
      type : 'updated_locale',
      name : e.target.name,
      value: e.target.value
    })
  }


  
  return (
    <fieldset>
      <legend>
        Locale
      </legend>
      { renderedLocalizations }
    </fieldset>
  );
}





function LocaleInput ({ name, value, onChange, label }) {
  return (
    <label>
      { label }
      <input
        type  ="text"
        name  ={ name  }
        value ={ value }
        onChange={ onChange }
      />
    </label>
  );
}