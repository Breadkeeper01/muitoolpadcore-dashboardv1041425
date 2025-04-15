import { Typography } from "@mui/material";
import Lottie from "lottie-react";
import notfound from "../data/404.json"
// import { Typography } from "@mui/material";

const NotFound = () => {
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
                animationData={notfound}
                loop={true}
                style={{ width: 350, 
                    height: 350, 
                    // marginBottom: '24px' 
                }} // Size and margin
            />

            <Typography variant="h2" fontWeight={600} color="gray" 
            gutterBottom
            >
               PAGE NOT FOUND
            </Typography>
            
        </div>
    );
};

export default NotFound;
