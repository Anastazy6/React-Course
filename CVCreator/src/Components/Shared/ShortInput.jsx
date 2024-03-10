import { useData, useDataDispatch } from "../../Contexts/DataProvider";


export default function ShortInput ({ name, type, group }) {
  const data     = useData();
  const dispatch = useDataDispatch();

  function getValue () {
    if (!data[group])       return '';
    if (!data[group][name]) return '';

    return data[group[name]]
  }


  function handleChange (e) {
    dispatch({
      type : 'updated_data',
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