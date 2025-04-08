import { CircularProgress } from "@mui/material";

type AppCircleProgressPropsType = {
    sx: object,
    rest?: object,
    size?: number
}

const AppCircleProgress = ({ sx , size, ...rest } : AppCircleProgressPropsType) => {
  return <CircularProgress size={size} sx={{ ...sx }} color="inherit" {...rest} />;
};

export default AppCircleProgress;
