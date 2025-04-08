import { ReactNode } from "react";
import AppCenterStack from "../mui/AppStack/AppCenterStack";
import { SxProps } from "@mui/material";

interface SideBarLayoutProps {
    children: ReactNode;
    sx?: SxProps
}

export default function SideBarLayout({children, sx}: SideBarLayoutProps) {
  return (
    <AppCenterStack  sx={sx}>
        {children}
    </AppCenterStack>
  )
}
