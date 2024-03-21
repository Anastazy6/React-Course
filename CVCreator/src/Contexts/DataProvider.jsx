import { loadData } from '../Storage/storage';
import FileProvider, { useFilesDispatch } from './DataModules/FilesProvider';
import TopPanelProvider, { useTopPanelDispatch } from './DataModules/TopPanelProvider';
import SidePanelProvider, { useSidePanelDispatch } from './DataModules/SidePanelProvider';
import MainPanelProvider, { useMainPanelDispatch } from './DataModules/MainPanelProvider';


const dispatchFiles     = useFilesDispatch();
const dispatchTopPanel  = useTopPanelDispatch();
const dispatchSidePanel = useSidePanelDispatch();
const dispatchMainPanel = useMainPanelDispatch();

export default function DataProvider ({ children }) {  
  return (
    <FileProvider>
      <TopPanelProvider>
        <SidePanelProvider>
          <MainPanelProvider>
            { children }
          </MainPanelProvider>
        </SidePanelProvider>
      </TopPanelProvider>
    </FileProvider>
  );
}


export function loadDataFromLocalStorage () {
  const data = loadData()

  
}