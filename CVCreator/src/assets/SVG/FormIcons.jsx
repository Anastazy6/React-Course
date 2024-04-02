// Source: https://fonts.google.com/icons


export function Delete ({ size= 20, fill= "#ffc777", wrapper='', title='', onClick }) {
  const svg = ( 
    <svg
      xmlns  ="http://www.w3.org/2000/svg"
      height ={ size }
      viewBox="0 -960 960 960"
      width  ={ size }
      fill   ={ fill }
      
    >
      <path 
        d="M306.461-166.154q-25.937 0-43.738-17.8-17.8-17.801-17.8-43.56v-490.64h-39.385v-36.795h155.693v-29.667h238.154v29.539h155.692v36.923h-39.384v490.64q0 25.759-17.801 43.56-17.8 17.8-43.738 17.8H306.461Zm88.923-116.192h36.924v-356.923h-36.924v356.923Zm132.924 0h36.923v-356.923h-36.923v356.923Z"
      />
    </svg>
  );

  return (
    <SVGButton
      title  ={ title   }
      wrapper={ wrapper }
      svg    ={ svg     }
      onClick={ onClick }
    />
  );
}


export function Up ({ size= 20, fill= "#ffc777", wrapper='', title='', onClick }) {
  const svg = (
    <svg
        xmlns  ="http://www.w3.org/2000/svg"
        height ={ size }
        viewBox="0 -960 960 960"
        width  ={ size }
        fill   ={ fill }
        
    >
      <path
        d="M461.731-206.154v-476.384l-229.116 228.73L206.154-480 480-753.846 753.846-480l-26.461 26.192-228.731-228.73v476.384h-36.923Z"
      />
    </svg>
  );

  return (
    <SVGButton
      title  ={ title   }
      wrapper={ wrapper }
      svg    ={ svg     }
      onClick={ onClick }
    />
  );
}


export function Down ({ size= 20, fill= "#ffc777", wrapper='', title='', onClick }) {
    const svg = (
    <svg
      xmlns  ="http://www.w3.org/2000/svg"
      height ={ size }
      viewBox="0 -960 960 960"
      width  ={ size }
      fill   ={ fill }
      
    >
      <path 
        d="M461.731-753.846v476.384L232.615-506.577 206.154-480 480-206.154 753.846-480l-26.461-26.577-228.731 229.115v-476.384h-36.923Z"
      />
    </svg>
  );

  return (
    <SVGButton
      title  ={ title   }
      wrapper={ wrapper }
      svg    ={ svg     }
      onClick={ onClick }
    />
  );
}


export function Add ({ size= 20, fill= "#ffc777", wrapper='', title='', onClick }) {
  const svg = (
    <svg
      xmlns  ="http://www.w3.org/2000/svg"
      height ={ size }
      viewBox="0 -960 960 960"
      width  ={ size }
      fill   ={ fill }
    >
      <path
        d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
      />
    </svg>
  );

  return (
    <SVGButton
      title  ={ title   }
      wrapper={ wrapper }
      svg    ={ svg     }
      onClick={ onClick }
    />
  );
}


function Wrapper ({ name, children, onClick, title }) {
  return (
    <div
      className={ `svg-wrapper ${ name }` }
      onClick  ={ onClick }
      title    ={ title }
    >
      { children }
    </div>
  );
}


function SVGButton ({ wrapper, svg, onClick, title }) {
  if (wrapper === '') return svg;

  return (
    <Wrapper
      title  ={ title   }
      name   ={ wrapper }
      onClick={ onClick }
    >
      { svg }
    </Wrapper>
  );
}