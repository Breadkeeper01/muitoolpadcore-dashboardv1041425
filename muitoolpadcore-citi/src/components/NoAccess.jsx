import { Typography } from "@mui/material";
import Lottie from "lottie-react";
import no from "../data/no.json"
import React from 'react'
import { keyframes } from '@emotion/react';
import Button from "@mui/material/Button";
import { useKeycloak } from "@react-keycloak/web";

const pulseColor = keyframes`
  0%   { color: #808080; }   /* gray */
  50%  { color: #ff0000; }   /* red */
  100% { color: #808080; }   /* back to gray */
`;

export const NoAccess = () => {
    const { keycloak } = useKeycloak();
    const handleLogout = () => {
        keycloak.logout();
    };
  return (
    <div 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            textAlign: 'center',
        }}
    >
        <Lottie
            animationData={no}
            loop={true}
            style={{ 
                width: 250, 
                height: 250, 
                marginBottom: '24px' 
            }} // Size and margin
        />

        <Typography variant="h1" fontWeight={600} 
        // color="gray" 
            sx={{
                animation: `${pulseColor} 2s ease-in-out infinite`,
            }}
            gutterBottom
        >
            NO ACCESS
        </Typography>

        <Typography variant="body1" color="textSecondary">
            Please contact the system administrator
        </Typography>
        <Button sx={{mt:4}} color="#ff0000" variant="outlined" onClick={handleLogout}>
                Logout
        </Button>
    </div>
  )
}
