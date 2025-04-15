// import * as React from "react";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonIcon from "@mui/icons-material/Person";
// import { Outlet } from "react-router";
// import { ReactRouterAppProvider } from "@toolpad/core/react-router";
// import type { Navigation } from "@toolpad/core/AppProvider";
// import { customTheme } from "./theme/themeprovider";

// const demoSession = {
//   user: {
//     name: "Bharat Kashyap",
//     email: "bharatkashyap@outlook.com",
//     image: "https://avatars.githubusercontent.com/u/19550456",
//   },
// };

// const NAVIGATION: Navigation = [
//   {
//     kind: "header",
//     title: "Main items",
//   },
//   {
//     title: "Dashboard",
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: "employees",
//     title: "Employees",
//     icon: <PersonIcon />,
//     pattern: "employees{/:employeeId}*",
//   },
// ];

// const BRANDING = {
//   title: "TREASURY SYSTEM",
// };

// const  MainContent =()=> {
//  const [session, setSession] = React.useState(demoSession);

//   const authentication = {
//     signIn: () => {
//       console.log("Sign In logic here");
//     },
//     signOut: () => {
//       console.log("keycloak");
//       console.log("Sign Out logic here");
//       // dispatch(toogleLogoutDialog());
//     },
//   };
//   return (
//     <ReactRouterAppProvider
//       session={session}
//       authentication={authentication}
//       theme={customTheme}
//       navigation={NAVIGATION}
//       branding={BRANDING}
//     >
//       <Outlet />
//     </ReactRouterAppProvider>
//   );
// }

// export default MainContent;

import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { Outlet } from "react-router";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { customTheme } from "./theme/themeprovider";
import { useKeycloak } from "@react-keycloak/web";



const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "employees",
    title: "Employees",
    icon: <PersonIcon />,
    pattern: "employees{/:employeeId}*",
  },
  {
    segment: 'movies',
    title: 'Movies',
    icon: <DashboardIcon />,
    children: [
      {
        segment: 'lord-of-the-rings',
        title: 'Lord of the Rings',
        icon: <DashboardIcon />,
      },
      {
        segment: 'harry-potter',
        title: 'Harry Potter',
        icon: <DashboardIcon />,
      },
    ],
  },
];

const BRANDING = {
  title: "TREASURY SYSTEM",
  logo: <img src="/img/ch-logo.jpg" alt="citi logo"/>
};

const MainContent = () => {
  const { keycloak } = useKeycloak();
  console.log("keycloak.id", keycloak.idTokenParsed.name);

  const currentSession = {
    user: {
      name: keycloak.idTokenParsed.name,
      email: keycloak.idTokenParsed.email,
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  };

  const [session, setSession] = React.useState(currentSession);

  const authentication = {
    signIn: () => {
      console.log("Sign In logic here");
    },
    signOut: () => {
      console.log("keycloak");
      console.log("Sign Out logic here");
      keycloak.logout();
    },
  };

  return (
    <ReactRouterAppProvider
      session={session}
      authentication={authentication}
      theme={customTheme}
      navigation={NAVIGATION}
      branding={BRANDING}
    >
      <Outlet />
    </ReactRouterAppProvider>
  );
};

export default MainContent;