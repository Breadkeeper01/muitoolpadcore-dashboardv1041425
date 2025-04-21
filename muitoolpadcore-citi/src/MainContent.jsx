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
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCardIcon from '@mui/icons-material/AddCard';
import { Typography } from "@mui/material";
import AddCardTwoToneIcon from '@mui/icons-material/AddCardTwoTone';

import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';

import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import CollectionsBookmarkTwoToneIcon from '@mui/icons-material/CollectionsBookmarkTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';

import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';

import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';


const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Dashboard",
    icon: <DashboardTwoToneIcon />,
  },
  {
    segment: "employees",
    title: "Employees",
    icon: <PersonOutlineTwoToneIcon />,
    pattern: "employees{/:employeeId}*",
  },
  {
    segment: 'card-collection',
    title: 'Card Collection',
  
    icon: <CreditCardTwoToneIcon />,
    children: [
      {
        segment: 'card-sales-entry',
        // title: 'Card Sales Entry',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            Card Sales Entry
          </Typography>
        ),
        icon: <AddCardIcon />,
      },
      {
        segment: 'view-card-sales',
        // title: 'View Card Sales',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            View Card Sales
          </Typography>
        ),
        icon: <PaymentsTwoToneIcon />,
      },
      {
        segment: 'view-ho-card-collection',
        // title: 'View HO Card Collection',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            View HO Card Collection
          </Typography>
        ),
        icon: <AddBusinessTwoToneIcon />,
      },
      {
        segment: 'view-ho-card-collection-company',
        // title: 'View HO Card Collection Company',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            View HO Card Collection Company
          </Typography>
        ),
        icon: <AccountBalanceTwoToneIcon />,
      },
      {
        segment: 'outstanding-card-sales',
        // title: 'Outstanding Card Sales',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            Outstanding Card Sales
          </Typography>
        ),
        icon: <AccountBalanceWalletTwoToneIcon />,
      },
      {
        segment: 'view-ho-history',
        // title: 'View HO History (Collected or Uncollected)',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            View HO History (Collected or Uncollected)
          </Typography>
        ),
        icon: <CollectionsBookmarkTwoToneIcon />,
      },
      {
        segment: 'view-ho-card-collections',
        // title: 'View HO Card Collections (Date Encoded)',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
          View HO Card Collections (Date Encoded)
          </Typography>
        ),
        icon: <CalendarMonthTwoToneIcon />,
      },
    ],
  },
  {
    segment: 'e-sales',
    title: 'E-Sales',
  
    icon: <ShoppingCartTwoToneIcon />,
    children: [
      {
        segment: 'e-sales-entry',
        // title: 'Card Sales Entry',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            E Sales Entry
          </Typography>
        ),
        icon: <AddShoppingCartTwoToneIcon />,
      },
      {
        segment: 'view-e-sales',
        // title: 'View Card Sales',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            View E Sales
          </Typography>
        ),
        icon: <LocalAtmTwoToneIcon />,
      },
      {
        segment: 'view-ho-e-sales-collected-uncollected',
        // title: 'View HO Card Collection',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            View HO E-SALES Collected & Uncollected
          </Typography>
        ),
        icon: <AddBusinessTwoToneIcon />,
      },
      {
        segment: 'view-ho-card-collection-company',
        // title: 'View HO Card Collection Company',
        title: (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 300 }}>
            View HO Card Collection Company
          </Typography>
        ),
        icon: <AccountBalanceTwoToneIcon />,
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