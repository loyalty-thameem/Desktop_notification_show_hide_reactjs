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

// import React, { useState } from "react";

// const App = () => {
//   const [showNotification, setShowNotification] = useState(false);
//   const [notification, setNotification] = useState(null);
//   console.log("showNotification", showNotification);
//   console.log("notification", notification);
//   const handleShowNotification = () => {
//     if (window.Notification && Notification.permission === "granted") {
//       var options = {
//         body: "The leader",
//         icon: "https://avatars.githubusercontent.com/u/97792702?v=4    auto=compress&cs=tinysrgb&dpr=1&w=500",
//         dir: "ltr",
//       };
//       const newNotification = new Notification("Thameem ansari!", options);
//       setNotification(newNotification);
//       setShowNotification(true);
//     } else if (window.Notification && Notification.permission !== "denied") {
//       Notification.requestPermission().then((permission) => {
//         var options = {
//           body: "The leader",
//           icon: "https://avatars.githubusercontent.com/u/97792702?v=4    auto=compress&cs=tinysrgb&dpr=1&w=500",
//           dir: "rtl",
//         };
//         if (permission === "granted") {
//           const newNotification = new Notification("Thameem ansari!", options);
//           setNotification(newNotification);
//           setShowNotification(true);
//         }
//       });
//     } else {
//       alert("Please give notification permission");
//     }
//   };

//   const handleHideNotification = () => {
//     notification.close();
//     setShowNotification(false);
//   };

//   const handleNewNotification = () => {
//     if (window.Notification && Notification.permission === "granted") {
//       var options = {
//         body: "The leader",
//         icon: "https://avatars.githubusercontent.com/u/97792702?v=4    auto=compress&cs=tinysrgb&dpr=1&w=500",
//         dir: "ltr",
//         image: "https://wallpaperaccess.com/full/3225964.jpg",
//         data: { id: 1, name: "Thameem", lastName: "ansari" },
//       };
//       const newNotification = new Notification("Thameem ansari!", options);
//       setNotification(newNotification);
//       setShowNotification(true);
//       //Navigation
//       newNotification.onclick = (e) => {
//         // Navigate by id
//         window.location.href =
//           "https://0jhk0v-3000.preview.csb.app/" + e.target.data.id;
//         alert(e.target.data.name + " " + e.target.data.lastName);
//       };
//     } else {
//       alert("Please give notification permission");
//     }
//   };

//   return (
//     <div>
//       {!showNotification && (
//         <button onClick={handleShowNotification}>Show Notification </button>
//       )}
//       {showNotification && (
//         <button onClick={handleHideNotification}> Hide Notification </button>
//       )}
//       <button onClick={handleNewNotification}> New Notification </button>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
const App = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] =
    useState("Hello World!");

  console.log("");
  const handleShowNotification = () => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(notificationMessage, {
        body: "This is a notification created using React and a Service Worker",
        icon: "https://avatars.githubusercontent.com/u/97792702?v=4    auto=compress&cs=tinysrgb&dpr=1&w=500",
      });
      setShowNotification(true);
      console.log(registration);
    });
  };

  // function showNotification() {
  //   Notification.requestPermission((result) => {
  //     if (result === "granted") {
  //       navigator.serviceWorker.ready.then((registration) => {
  //         registration.showNotification("Vibration Sample", {
  //           body: "Buzz! Buzz!",
  //           icon: "../images/touch/chrome-touch-icon-192x192.png",
  //           vibrate: [200, 100, 200, 100, 200, 100, 200],
  //           tag: "vibration-sample",
  //         });
  //       });
  //     }
  //   });
  // }

  const handleHideNotification = () => {
    setShowNotification(false);
  };

  const handleUpdateNotification = () => {
    setNotificationMessage("This is an updated message");
  };

  return (
    <div>
      {!showNotification && (
        <button onClick={handleShowNotification}> Show Notification </button>
      )}
      {showNotification && (
        <>
          <button onClick={handleUpdateNotification}>
            {" "}
            Update Notification{" "}
          </button>
          <button onClick={handleHideNotification}> Hide Notification </button>
        </>
      )}
    </div>
  );
};

export default App;
