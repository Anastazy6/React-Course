import ShortInput from "./ShortInput";
import FileInput  from "./FileInput";


export default function TopPanel () {

  const formControls = [
    ['Job title',    'text'],
    ['First name',   'text'],
    ['Last name',    'text'],
    ['Phone number', 'tel' ],
    ['Email',        'mail'],
    ['Address',      'text'],
    ['Country',       'text'],
  ]

  const fileControls = [
    ['Photo', 'image/*']
  ];

  const dataInputs = formControls.map(fc => {
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


  const fileInputs = fileControls.map(fc => {
    return (
      <FileInput
        name  ={ fc[0] }
        key   ={ fc[0] }
        accept={ fc[1] }
      />
    );
  });


  return (
    <fieldset>
      <legend>
        Top Panel
      </legend>
      { dataInputs }
      { fileInputs }

    </fieldset>
  )
}

