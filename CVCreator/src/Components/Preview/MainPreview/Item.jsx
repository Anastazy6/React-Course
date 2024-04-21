import { useMainPanel } from "../../../Contexts/DataModules/MainPanelProvider";


export default function Item ({ props }) {
  const data = useMainPanel();
  const locale = data.locale ?? {};


  const endDate = props.present
    ? locale.hasNoEndDate ?? ''
    : props.endDate ?? '';



  return (
    <div
      className="main-panel-item-preview"
    >
      <div
        className="main-item-title-preview"
      >
        { props.title }
      </div>
     
      <div
        className="main-item-location-preview"
      >
        { props.location }
      </div>

      <div
        className="main-item-date-preview"
      >
        <span
          className="start-date-preview"
        >
          { props.startDate }
        </span>
        <span> - </span>
        <span
          className="end-date-preview"
        >
          { endDate }
        </span>
      </div>
      <div
        className="main-item-description-preview"
      >
        { props.description }
      </div>

      { /* <hr className="main-item-separator" /> */ }
    </div>
  )
}