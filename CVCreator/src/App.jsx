import DataProvider from "./Contexts/DataProvider";
import Preview      from "./Components/Preview/Preview";
import CVForm       from "./Components/CVForm/CVForm";

const PRINT_PAGE_HEIGHT = 738.97 // px,  209.5 mm

export default function App () {
  


  return (
    <DataProvider>
      <main>

        <CVForm />
        <Preview />
      </main>
    </DataProvider>
  );
}


