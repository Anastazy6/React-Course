import { useFiles,     useFilesDispatch     } from "./DataModules/FilesProvider";
import { useTopPanel,  useTopPanelDispatch  } from "./DataModules/TopPanelProvider";
import { useSideItems, useSideItemsDispatch } from "./DataModules/SideItemsProvider";
import { useSidePanel, useSidePanelDispatch } from "./DataModules/SidePanelProvider";
import { useMainPanel, useMainPanelDispatch } from "./DataModules/MainPanelProvider";
import { useMainItems, useMainItemsDispatch } from "./DataModules/MainItemsProvider";


const ContextsGrouper = (function () {
  const contexts = [
    {
      context : useFiles,
      dispatch: useFilesDispatch,
      group   : 'files'
    }, {
      context : useTopPanel,
      dispatch: useTopPanelDispatch,
      group   : 'topPanel'
    }, {
      context : useSideItems,
      dispatch: useSideItemsDispatch,
      group   : 'sideItems'
    }, {
      context : useSidePanel,
      dispatch: useSidePanelDispatch,
      group   : 'sidePanel'
    }, {
      context : useMainPanel,
      dispatch: useMainPanelDispatch,
      group   : 'mainPanel'
    }, {
      context : useMainItems,
      dispatch: useMainItemsDispatch,
      group   : 'mainItems'
    }
  ];

  return {
    contexts: contexts,
  };
})();

export default ContextsGrouper;