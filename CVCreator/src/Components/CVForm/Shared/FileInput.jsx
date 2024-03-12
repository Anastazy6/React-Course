import { useData, useDataDispatch } from "../../../Contexts/DataProvider";


export default function FileInput ({ name, accept }) {
  const data     = useData();
  const dispatch = useDataDispatch();

  // function getValue () {
  //   if (!data.files)       return '';
  //   if (!data.files[name]) return '';

  //   return data.files[name].name;
  // }


  function getUploadedFile (e) {
    if (!e.target.files) return '';

    return e.target.files[0];
  }


  function handleChange (e) {
    dispatch({
      type: 'uploaded_file',
      name: name,
      file: getUploadedFile(e)
    });
  }

  
  


  return (
    <label>
      { name }

      <input
        type     = 'file'
        name     = { name }
        onChange = { handleChange }
       // value    = { getValue() }
        accept   = { accept }
      />
    </label>
  );
}