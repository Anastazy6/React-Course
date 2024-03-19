import { useTopPanel, useTopPanelDispatch } from '../../../Contexts/DataModules/TopPanelProvider';


export default function ShortInput ({ name, type, group }) {
  const data     = useTopPanel();
  const dispatch = useTopPanelDispatch();

  function getValue () {
    if (!data)       return '';
    if (!data[name]) return '';

    return data[name];
  }


  function handleChange (e) {
    dispatch({
      type : 'updated_top_panel',
      group: group,
      name : name,
      value: e.target.value
    });
  }

  return (
    <label>
      { name }

      <input
        type     = { type }
        name     = { name }
        onChange = { handleChange }
        value    = { getValue() }
      />
    </label>
  );
}