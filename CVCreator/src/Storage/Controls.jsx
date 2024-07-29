import * as Buttons from './buttons';
import ToggleableFieldset from '../Components/CVForm/ToggleableFieldset';



export default function StorageControls () {

  return (
    <ToggleableFieldset
      legend   ="Data Storage"
      id       ="storage-buttons"
      collapsed={ false }
    >
      <Buttons.LogDataButton />
      <Buttons.SaveButton />
      <Buttons.LoadButton />
      <Buttons.DownloadDataButton />
      <Buttons.UploadButton />
      <Buttons.ClearDataButton />
    </ToggleableFieldset>
  );
}