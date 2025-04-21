import { useState, useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import MainContent from "./mainContent";
import AppLoader from "./components/AppLoader";
import { NoAccess } from "./components/NoAccess";
import "../src/css/app.css"



const App = () => {
  const { keycloak, initialized } = useKeycloak();
  const [useEffectRunning, setUseEffectRunning] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitializingStates, setIsInitializingStates] = useState(true);

  const [hasAccess, setHasAccess] = useState(false);

  const handleInitializingStates = async () => {
    // Turn on the “initializing” state
    setIsInitializingStates(true);

    // After 3 seconds, turn it off
    setTimeout(() => {
      setIsInitializingStates(false);
    }, 3000);
  }

  useEffect(()=>{
    if (initialized) {
      const idTokenParsed = keycloak.idTokenParsed;
      const tokenParsed = keycloak.tokenParsed;
      const resourceAccess = keycloak.tokenParsed.resource_access;

      console.log("resourceAccess", resourceAccess);
      console.log("idTokenParsed:", idTokenParsed);
      console.log("tokenParsed:", tokenParsed);

      if (resourceAccess && resourceAccess.TreasurySystem && resourceAccess.TreasurySystem.roles && resourceAccess.TreasurySystem.roles.length > 0) {
        setHasAccess(true);
        setIsAuthenticated(true);
        handleInitializingStates();
      }
      setUseEffectRunning(false);
    }
  },[initialized])

  if (!hasAccess && !useEffectRunning) {
    return <NoAccess />;
    // return <div> no access ... </div>
  }
  else if(isAuthenticated){
    if(isInitializingStates) {
      return <AppLoader />;
    } else {
      return <MainContent />
    }
  }
}

export default App;

