import {
  useMainPanel,
  useMainPanelDispatch
} from "../../../../Contexts/DataModules/MainPanelProvider";
import ToggleableFieldset from "../../ToggleableFieldset";

export default function Locale ({ }) {
  const data = useMainPanel();
  const locale = data.locale ?? {};

  const dispatch = useMainPanelDispatch();

  const localizations = {
    hasNoEndDate          : 'An activity is still present',
    institutionPreposition: 'Preposistion used to indicate at which institution you have worked',
    nativeLanguage        : 'Adjective used to describe a language as your native'
  }

  const renderedLocalizations = Object.entries(localizations).map(([key, label]) => {
    return (
      <LocaleInput
        key     ={ key                }
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
    <ToggleableFieldset
      legend="Locale"
    >
      { renderedLocalizations }
    </ToggleableFieldset>
  );
}





function LocaleInput ({ name, value, onChange, label }) {
  return (
    <label
      className="break-line-label"
    >
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