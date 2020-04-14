import React from "react";

function SessionStorageView() {
  const [storageProxy, setStorageProxy] = React.useState(
    JSON.stringify(window.sessionStorage)
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStorageProxy(JSON.stringify(window.sessionStorage, 0, 4));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [setStorageProxy]);

  return (
    <div>
      sessionStorage:
      <br /> {storageProxy}
    </div>
  );
}

export default SessionStorageView;
