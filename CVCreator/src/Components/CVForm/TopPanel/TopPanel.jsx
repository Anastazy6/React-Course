import ShortInput from "../../Shared/ShortInput";

export default function TopPanel () {

  const formControls = [
    ['Job title',    'text'],
    ['First name',   'text'],
    ['Last name',    'text'],
    ['Phone number', 'tel' ],
    ['Email',        'mail'],
    ['Address',      'text'],
    ['Coutry',       'text']
  ]

  const inputs = formControls.map(fc => {
    const group = 'topPanel';

    return (
      <ShortInput
        name ={ fc[0] }
        type ={ fc[1] }
        group={ group }
        key  ={ fc[0] }
      />
    );
  });

  return (
    <fieldset>
      <legend>
        Top Panel
      </legend>
      { inputs }

    </fieldset>
  )
}