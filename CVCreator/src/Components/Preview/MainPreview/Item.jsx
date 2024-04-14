export default function Item ({ props }) {
//  console.log(props);
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
        </span> - 
        <span
          className="end-date-preview"
        >
          { props.endDate }
        </span>
      </div>
      <div
        className="main-item-description-preview"
      >
        { props.description }
      </div>
    </div>
  )
}