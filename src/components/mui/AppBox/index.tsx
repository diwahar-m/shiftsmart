import { Box, SxProps } from "@mui/material";
import { ReactNode, Ref } from "react";

interface AppBoxProps {
  children?: ReactNode;
  ref?: Ref<unknown>;
  sx?: SxProps;
}

const AppBox = ({ children, ref, sx, ...rest }: AppBoxProps) => {
  return (
    <Box sx={sx} ref={ref} {...rest}>
      {children}
    </Box>
  );
};

export default AppBox;
