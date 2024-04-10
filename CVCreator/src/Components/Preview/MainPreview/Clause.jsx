import { useMainPanel } from "../../../Contexts/DataModules/MainPanelProvider";


export default function GDPRClause ({ }) {
  const data   = useMainPanel();
  const clause = data.clause ? data.clause : null;

  const renderedClause = clause
  ? <footer
    id="gdpr-clause"
    >
      { clause }
    </footer>
  : null;

  return renderedClause;
}