import Keycloak from "keycloak-js";

const keycloakComponent = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID,
});

export default keycloakComponent;
