import { Typography } from "@mui/material";
import Lottie from "lottie-react";
import tres from "../data/tresh.json"
// import { Typography } from "@mui/material";

const AppLoader = () => {
    // const appName = import.meta.env.VITE_APP_NAME;
    const appName = "TREASURY SYSTEM";

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
                animationData={tres}
                loop={true}
                style={{ width: 350, 
                    height: 350, 
                    // marginBottom: '24px' 
                }} // Size and margin
            />
            
            {/* Title */}
            <Typography variant="h2" fontWeight={600} color="gray" 
            gutterBottom
            >
                {appName}
            </Typography>
            
            {/* Body text */}
            <Typography variant="body1" color="textSecondary">
                Please wait while we are securely loading your financial data...
            </Typography>
        </div>
    );
};

export default AppLoader;
