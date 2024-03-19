import { useFilesDispatch } from "../../../Contexts/DataModules/FilesProvider";

export default function FileInput ({ name, accept }) {
  const dispatch = useFilesDispatch();

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
        accept   = { accept }
      />
    </label>
  );
}