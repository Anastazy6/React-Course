import FileProvider      from './DataModules/FilesProvider';
import TopPanelProvider  from './DataModules/TopPanelProvider';
import SidePanelProvider from './DataModules/SidePanelProvider';
import MainPanelProvider from './DataModules/MainPanelProvider';



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
