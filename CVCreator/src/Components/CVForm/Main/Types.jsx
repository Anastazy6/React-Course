export function Education ({ item, onChange, onToggleMarkdown }) {
  return (
    <>
      <ShortText
        name    ='title'
        value   ={ item.title ?? '' }
        onChange={ onChange         }
        label   ='Degree and field'
      />
      <ShortText
        name    ='institution'
        value   ={ item.institution ?? '' }
        onChange={ onChange }
        label   ="Institution"
      />
      <ShortText
        name    ='location'
        value   ={ item.location ?? '' }
        onChange={ onChange }
        label   ="Location"
      />
      <DateControls
        item    ={ item     }
        onChange={ onChange }
      />
      <MarkdownInput
        name    ='description'
        label   ='Additional information'
        onChange={ onChange }
        item    ={ item     }
        onToggleMarkdown={ onToggleMarkdown }
      /> 
    </>
  )
}

function BaseControls ({ item, onChange, onToggleMarkdown }) {
  return (
    <> 
      <ShortText
        name    ='title'
        value   ={ item.title ?? '' }
        onChange={ onChange         }
        label   ='Job title'
      />
      <LongText
        name    ='description'
        value   ={ item.description ?? '' }
        onChange={ onChange               }
      />
      <SupportMarkdown
        value   ={ item.markdown ?? true }
        onChange={ onToggleMarkdown      }
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
        onChange={ onChange         }
        label   ="Start date"
      />
      <EndDate
        name    ='endDate'
        date    ={ item.endDate ?? ''    }
        present ={ item.present ?? false }
        onChange={ onChange          }
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
        type    ='date'
        name    ={ name     }
        value   ={ date     }
        onChange={ onChange }
      />
    </label>
  )
}

function EndDate ({ name, date, present, onChange, label }) {
  return (
    <div>
      <label>
        { label }
        <input
          type    ='date'
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
        name    ={ name            }
        value   ={ item.name ?? '' }
        onChange={ onChange        }
        label   ={ label           }
      />
      <SupportMarkdown
        value           ={ item.markdown    }
        onToggleMarkdown={ onToggleMarkdown }
      />
    </div> 
  )
}