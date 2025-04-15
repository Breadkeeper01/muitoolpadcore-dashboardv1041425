import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

export const SidebarFooter = ({ mini }) => {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
    >
      {mini
        ? "© CITI"
        : `© ${new Date().getFullYear()} CITIHARDWARE INHOUSE PRINCE`}
    </Typography>
  );
};

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired, // 'mini' must be a boolean and is required
};
