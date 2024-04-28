export function Education ({ item, onChange, onToggleMarkdown }) {
  const labels = {
    title      : 'Degree and field',
    description: 'Additional information'
  };

  return (
    <StandardItem
      labels   ={ labels   }
      item     ={ item     }
      onChange ={ onChange }
      onToggleMarkdown={ onToggleMarkdown }
    />
  );
}

export function Employment ({ item, onChange, onToggleMarkdown }) {
  const labels = {
    title      : 'Job title',
    institution: 'Company',
    description: 'Job description'
  };

  return (
    <StandardItem
      labels   ={ labels   }
      item     ={ item     }
      onChange ={ onChange }
      onToggleMarkdown={ onToggleMarkdown }
    />
  );
}


export function Courses ({ item, onChange, onToggleMarkdown }) {
  const labels = {
    title      : 'Course name',
    institution: 'Institution',
    location   : 'Location or site',
  };

  return (
    <StandardItem
      labels  ={ labels   }
      item    ={ item     }
      onChange={ onChange }
      onToggleMarkdown={ onToggleMarkdown }
    />
  );
}


export function GeneralInformation ({ item, onChange, onToggleMarkdown }) {
  return (
    <>
      <ShortText
        name    ='title'
        value   ={ item.title ?? '' }
        onChange={ onChange         }
        label   ="Title"
      />
      <MarkdownInput
        name    ='description'
        item    ={ item     }
        onChange={ onChange }
        label   ='Description'
        onToggleMarkdown={ onToggleMarkdown }
      />
    </>
  )
}


function DateControls ({ item, onChange }) {
  return (
    <>
      <StartDate
        name    ='startDate'
        date    ={ item.startDate ?? '' }
        onChange={ onChange }
        label   ="Start date"
      />
      <EndDate
        name    ='endDate'
        date    ={ item.endDate ?? ''    }
        present ={ item.present ?? false }
        onChange={ onChange }
        label   ='End date'
      />
    </>
  );
}


function ShortText ({ name, value, onChange, label }) {
  return (
    <label>
      { label }
      <input
        type    ='text'
        name    ={ name     }
        value   ={ value    }
        onChange={ onChange }
      />
    </label>
  )
}

function StartDate ({ name, date, onChange, label }) {
  return (
    <label>
      { label }
      <input
        type    ='month'
        name    ={ name     }
        value   ={ date     }
        onChange={ onChange }
      />
    </label>
  )
}

function EndDate ({ name, date, present, onChange, label }) {
  present = present ==='false' ? false : present;

  return (
    <div>
      <label>
        { label }
        <input
          type    ='month'
          name    ={ name     }
          value   ={ date     }
          onChange={ onChange }
          disabled={ present  }
        />
      </label>
      <label>
        Present
        <input
          type    ='checkbox'
          name    ='present'
          value   ={ present  }
          onChange={ onChange }
        />
      </label>
    </div>
  )
}


function LongText ({ name="description", value, onChange, label="Description" }) {
  return (
    <label>
      { label }
      <textarea
        name      ={ name     }
        onChange  ={ onChange }
        value     ={ value    }
      />
    </label>
  );
}


function SupportMarkdown ({ value, onChange }) {
  return (
    <label>
      Use markdown for descripion
      <input
        type    ='checkbox'
        name    ='markdown'
        checked ={ value    }
        onChange={ onChange }
      />
    </label>
  );
}

function MarkdownInput ({ name, item, onChange, onToggleMarkdown, label="Description"}) {
  return(
    <div
      className="markdown-input"
    >
      <LongText
        name    ={ name             }
        value   ={ item[name] ?? '' }
        onChange={ onChange         }
        label   ={ label            }
      />
      <SupportMarkdown
        value           ={ item.markdown    }
        onToggleMarkdown={ onToggleMarkdown }
      />
    </div> 
  )
}

function StandardItem({ labels, item, onChange, onToggleMarkdown }) {  
  return (
    <>
      <ShortText
        name    ='title'
        value   ={ item.title ?? '' }
        onChange={ onChange         }
        label   ={ labels.title ?? 'Title' }
      />
      <ShortText
        name    ='institution'
        value   ={ item.institution ?? '' }
        onChange={ onChange }
        label   ={ labels.institution ?? 'Institution' }
      />
      <ShortText
        name    ='location'
        value   ={ item.location ?? '' }
        onChange={ onChange }
        label   ={ labels.location ?? "Location" }
      />
      <DateControls
        item    ={ item     }
        onChange={ onChange }
      />
      <MarkdownInput
        name    ='description'
        label   ={ labels.description ?? 'Description' }
        onChange={ onChange }
        item    ={ item     }
        onToggleMarkdown={ onToggleMarkdown }
      /> 
    </>
  );
}

