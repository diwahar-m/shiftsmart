import { Tooltip, Typography, TypographyVariant } from "@mui/material";
import { ReactNode } from "react";


interface AppTextProps {
  text: string;
  children?: ReactNode;
  variant?: TypographyVariant;
  sx?: object;
  tooltipText?: string;
  rest?: object

}

const AppText = ({
  text,
  children,
  variant,
  sx,
  tooltipText,
  ...rest
}: AppTextProps) => {


  return (
    <Typography
      sx={{textTransform: 'none' , ...sx}}
      variant={variant}
      {...rest}
    >
      <Tooltip title={tooltipText}>
        <span> {text || children}</span>
      </Tooltip>
    </Typography>
  );
};

export default AppText;
