import { Typography } from "@mui/material";
import Lottie from "lottie-react";
import undermaintenance from "../data/undermaintenance.json"
// import { Typography } from "@mui/material";

const UnderMaintenance = () => {
    // const appName = import.meta.env.VITE_APP_NAME;
    // const appName = "TREASURY SYSTEM";

    return (
        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
                textAlign: 'center',
                // backgroundColor: '#f4f6f8', // You can customize the background

                // backgroundColor: '#f4f6f8', // You can customize the background
            }}
        >
            {/* Lottie animation */}
            <Lottie
                animationData={undermaintenance}
                loop={true}
                style={{ width: 350, 
                    height: 350, 
                    // marginBottom: '24px' 
                }} // Size and margin
            />

            <Typography variant="h2" fontWeight={600} color="gray" 
            gutterBottom
            >
               UNDER MAINTENANCE
            </Typography>
            
        </div>
    );
};

export default UnderMaintenance;
