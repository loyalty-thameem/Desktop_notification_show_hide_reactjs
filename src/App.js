// import React from "react";
// import "./styles.css";

// export default function App() {
//   React.useEffect(() => {
//     if (!("Notification" in window)) {
//       console.log("Browser does not support desktop notification");
//     } else {
//       Notification.requestPermission();
//     }
//   }, []);

//   // const showNotification =()=>{
//   //   new Notification('Hello World')
//   // }
//   const showNotification = () => {
//     var options = {
//       body: "The leader",
//       icon:
//         "https://avatars.githubusercontent.com/u/97792702?v=4    auto=compress&cs=tinysrgb&dpr=1&w=500",
//       dir: "ltr"
//     };

//     notification = new Notification("Thameem ansari", options);
//   };
//   const closeNotification = () => {
//     notification.close();
//   };
//   return (
//     <div>
//       <button onClick={showNotification}>Show notification</button>
//       <br/>
//       <button onClick={closeNotification}>Close notification</button>
//     </div>
//   );
// }

import React, { useState } from "react";

const App = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleShowNotification = () => {
    if (window.Notification && Notification.permission === "granted") {
      const newNotification = new Notification("Hello World!", {
        body: "This is a notification created using React",
      });
      setNotification(newNotification);
      setShowNotification(true);
    } else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const newNotification = new Notification("Hello World!", {
            body: "This is a notification created using React",
          });
          setNotification(newNotification);
          setShowNotification(true);
        }
      });
    }
  };

  const handleHideNotification = () => {
    notification.close();
    setShowNotification(false);
  };

  return (
    <div>
      {!showNotification && (
        <button onClick={handleShowNotification}>Show Notification </button>
      )}
      {showNotification && (
        <button onClick={handleHideNotification}> Hide Notification </button>
      )}
    </div>
  );
};

export default App;
