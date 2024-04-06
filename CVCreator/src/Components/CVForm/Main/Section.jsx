import { SectionManagemenent } from "../Shared/SectionManagement";
import Item from "./Item";

export default function Section (props) {
  const id    = props.id;
  const title = props.title;

  return (
    <fieldset>
      <legend>
        { title }
      </legend>
      <SectionManagemenent
      
      />
    </fieldset>
  )
}


