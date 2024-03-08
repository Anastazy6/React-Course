

import DataProvider from "./Contexts/DataProvider";
import Preview      from "./Components/Preview/Preview";
import CVForm       from "./Components/CVForm/CVForm";


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
