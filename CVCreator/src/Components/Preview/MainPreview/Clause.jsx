import { useMainPanel } from "../../../Contexts/DataModules/MainPanelProvider";
import { enforceCleanLineBreak } from "../../../Util/Util";


export default function GDPRClause ({ }) {
  const data   = useMainPanel();
  const clause = data.clause ? data.clause : null;

  const renderedClause = clause
  ? <footer
    id="gdpr-clause"
    >
      { enforceCleanLineBreak(clause) }
    </footer>
  : null;

  return renderedClause;
}