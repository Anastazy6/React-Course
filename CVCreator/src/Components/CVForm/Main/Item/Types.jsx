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
    <>
    <label>
      Course URL
      <input
        type    ='url'
        name    ='itemUrl'
        onChange={ onChange }
        value   ={ item.itemUrl ?? ''}
      />
    </label>
    <StandardItem
      labels  ={ labels   }
      item    ={ item     }
      onChange={ onChange }
      onToggleMarkdown={ onToggleMarkdown }
    />

  </>
  );
}

export function Projects ({ item, onChange, onToggleMarkdown }) {
  return (
    <>
      <GeneralInformation
        item    ={ item     }
        onChange={ onChange }
        onToggleMarkdown={ onToggleMarkdown }
      />
      <StandaloneHyperLink
        url  ={ item.linkUrl  ?? '' }
        title={ item.linkName ?? '' }
        onChange={ onChange }
      />
    </>
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
    <label
      className="textarea-label"
    >
      { label }
      <textarea
        name      ={ name     }
        onChange  ={ onChange }
        value     ={ value    }
        rows      ="6"
      />
    </label>
  );
}


function SupportMarkdown ({ value, onChange }) {
  return (
    <label>
      <span style={{opacity: 0.5}}>Use markdown for descripion (not yet implemented)</span>
      <input
        type    ='checkbox'
        name    ='markdown'
        disabled
        title   ='Attention: this is a placeholder for an unimplemented feature'
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


function StandaloneHyperLink ({url, title, onChange }) {
  return (
    <>
      <label>
        Link url
        <input
          type    ='url'
          name    ='linkUrl'
          onChange={ onChange }
          value   ={ url ?? '' }
        />
      </label>

      <ShortText
        name    ='linkName'
        label   ="Link name"
        value   ={ title ?? '' }
        onChange={ onChange }
      />
    </>
  )
}
