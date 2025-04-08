import {SxProps, Tooltip, Button } from "@mui/material";
import AppCircleProgress from "../AppCircleProgress";
import { ReactNode } from "react";

interface AppButtonProps {
  children?: ReactNode;
  sx?: SxProps;
  isLoading ?: boolean;
  padding ?: string;
  isDisabled ?: boolean;
  tooltipText?: string;
}

const AppButton = ({
  children,
  sx,
  isLoading = false,
  padding = "8px 16px",
  isDisabled = false,
  tooltipText,
  ...rest
} : AppButtonProps) => {
 

  return (
    <>
      <Tooltip title={tooltipText}>
        <Button
          sx={{
            padding: padding,
            ...sx,
          }}
          disabled={isLoading || isDisabled}
          {...rest}
        >
          {children}
          {isLoading && <AppCircleProgress size={16} sx={{ ml: 1 }} />}
        </Button>
      </Tooltip>
    </>
  );
};

export default AppButton;
