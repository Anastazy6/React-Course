import { useMainPanel } from "../../../Contexts/DataModules/MainPanelProvider";



function isStandardType (type) {
  const standardTypes = [
    'Education',
    'Employment',
    'Courses'
  ];

  //console.log(standardTypes, type)

  return standardTypes.includes(type);
}


export default function Item ({ props }) {
  const data   = useMainPanel();
  const locale = data.locale ?? {};

  return (
    <div
      className="main-panel-item-preview"
    >
      <Title        props={ props } />
      <FullLocation props={ props } locale={ locale } />
      <Date         props={ props } locale={ locale } />
      <Description  props={ props } />
    </div>
  );
}


function MainPanelSubItem ({ name, children }) {
  return (
    <div
      className={ `main-item-${name}-preview` }
    >
      { children }
    </div>
  );
}


function Title ({ props }) {
  // Legal Item types: all. Any item can have a title.
  if (!props.title) return null;

  return (
    <MainPanelSubItem
      name='title'
    >
      { props.title }
    </MainPanelSubItem>
  )
}

function Institution ({ props }) {
   if (!isStandardType(props.type)) return null;
   if (!props.institution) return null;

   return (
    <MainPanelSubItem
      name='institution'
    >
      { props.institution }
    </MainPanelSubItem>
   );
}


function Location ({ props }) {
  if (!isStandardType(props.type)) return null;
  if (!props.location) return null;

  return (
    <MainPanelSubItem
      name='location'
    >
      { props.location }
    </MainPanelSubItem>
  );
}



function FullLocation ({ props, locale }) {
  if (!isStandardType(props.type)) return null;

  const preposition = locale.institutionPreposition ?? '';
  const separator = props.institution && props.location ? <span>,&nbsp;</span> : null;

  return (
    <div
      className="main-item-full-location-preview"
    >
      { preposition }&nbsp;<Institution props={ props }/>{ separator }<Location props={ props } />
    </div>
  )
}


function Date ({ props, locale }) {
  if (!isStandardType(props.type)) return null;
  if (!(props.startDate)) return null;

  const endDate = props.present
    ? locale.hasNoEndDate ?? ''
    : props.endDate ?? '';

  return (
    <MainPanelSubItem
      name='date'
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
    </MainPanelSubItem>
  );
}


function Description ({ props }) {
  // Legal for all item types
  if (!props.description) return null;

  return (
    <MainPanelSubItem
      name='description'
    >
      { props.description }
    </MainPanelSubItem>
  );
}