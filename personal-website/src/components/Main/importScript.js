import React from 'react';

function ImportScript(props){

  React.useEffect(() => {
    const script = document.createElement('script');
      script.src = props.name;
      script.async = true;
      document.body.appendChild(script);
      console.log("running")
  });

  return(
    <div>1</div>
  )
}


export default ImportScript;