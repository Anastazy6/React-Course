import MainPanelContainer from "./Section/Container";
import GDPRClause from "./Customization/GDPRClause";
import Locale from "./Customization/Locale";


export default function MainPanel () {
  return (
    <>
      <MainPanelContainer />
      <GDPRClause />
      <Locale     />
    </>
  );
}