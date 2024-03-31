export function EmptyStar ({ color='#ffc777', size=16 }) {
  return (
    <svg
      xmlns  ="http://www.w3.org/2000/svg"
      height ={ size }
      viewBox="0 -960 960 960" 
      width  ={ size }
      fill   ={ color }
    >
    <path 
      d="M351.538-283.808 480-361.154l128.462 78.231-33.731-146.462 113.461-97.846-149.077-13.5L480-679.192l-58.735 138.096-149.073 12.865 113.462 98.346-34.116 146.077Zm-56.192 77.655 49.115-210.149-163.077-140.929 214.654-18.731L480-773.885l84.346 197.923 214.27 18.731-163.09 140.929 49.464 210.149-184.822-111.7-184.822 111.7ZM480-470.615Z"           
    />
    </svg>
  );
}


export function FullStar ({ color='#ffc777', size=16 }) {
  return (
    <svg 
      xmlns  ="http://www.w3.org/2000/svg"
      height ={ size }
      viewBox="0 -960 960 960"
      width  ={ size }
      fill   ={ color }
    >
    <path 
      d="m295.346-206.153 49.115-210.149-163.077-140.929 214.654-18.731L480-773.885l84.346 197.923 214.27 18.731-163.09 140.929 49.464 210.149-184.822-111.7-184.822 111.7Z"
    />
    </svg>
  );
}