import { Box, Drawer, IconButton, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { LogoComponent } from "./logo.component";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactNode, useState } from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useAppSettingContext } from "./app-setting-context";

interface Props {}
export const NavBar = ({}: Props) => {
  const { themeMode, toggleThemeMode, language, toggleLanguage } =
    useAppSettingContext();
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  const items: NavItemModel[] = [
    {
      name: "Home",
      type: "scroll",
      action: "home",
      icon: <HouseOutlinedIcon />,
    },
    {
      name: "Pricing",
      type: "scroll",
      action: "pricing",
      icon: <PaidOutlinedIcon />,
    },
    {
      name: "Contact",
      type: "scroll",
      action: "contact",
      icon: <ContactPageOutlinedIcon />,
    },
    {
      name: "Space",
      type: "space",
      action: "space",
    },
    {
      name: "Dark",
      type: "button",
      action: "theme",
      icon: <DarkModeOutlinedIcon />,
      hidden: themeMode === "dark",
    },
    {
      name: "Light",
      type: "button",
      action: "theme",
      icon: <LightModeOutlinedIcon />,
      hidden: themeMode === "light",
    },
    {
      name: "Vi",
      type: "button",
      action: "lang",
      icon: <TranslateOutlinedIcon />,
      hidden: language === "vi",
    },
    {
      name: "En",
      type: "button",
      action: "lang",
      icon: <TranslateOutlinedIcon />,
      hidden: language !== "vi",
    },
    {
      name: "Login",
      type: "link",
      action: "login",
      icon: <LoginOutlinedIcon />,
    },
  ];

  return (
    <Box
      className="flex items-center py-2 gap-8"
      sx={{
        paddingY: 2,
      }}
    >
      <LogoComponent responsive={false} />
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
          },
          alignItems: "center",
          width: 0,
          flex: 1,
          gap: 4,
        }}
      >
        {items.map((item) => {
          if (item.hidden) return null;
          if (item.type === "space") {
            return <div key={item.name} className="flex-1"></div>;
          }

          return (
            <Typography className="cursor-pointer" key={item.name}>
              {item.name}
            </Typography>
          );
        })}
      </Box>
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
          },
          alignItems: "center",
          width: 0,
          flex: 1,
          gap: 2,
        }}
      >
        <div className="flex-1"></div>
        <IconButton onClick={() => setSideMenuVisible(true)}>
          <MenuIcon></MenuIcon>
        </IconButton>
        <SideMenuComponent
          items={items}
          onClose={() => setSideMenuVisible(false)}
          open={sideMenuVisible}
        />
      </Box>
    </Box>
  );
};

export interface NavItemModel {
  name: string;
  action: string;
  type: "link" | "button" | "scroll" | "space";
  isActive?: boolean;
  route?: string;
  icon?: ReactNode;
  render?: () => void;
  hidden?: boolean;
}
interface SideMenuComponentProps {
  open: boolean;
  items: NavItemModel[];
  onClose?: () => void;
}
export const SideMenuComponent = ({
  open,
  items,
  onClose,
}: SideMenuComponentProps) => {
  return (
    <Drawer open={open} anchor="right" onClose={onClose}>
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-1 p-4">
          <LogoComponent responsive={false} onClick={onClose} />
        </div>
        {items.map((item) => {
          if (!open || item.hidden) return null;
          if (item.type === "space") {
            return <div key={item.name} className="flex-auto"></div>;
          }
          return (
            <MenuItem
              key={item.name}
              className="flex items-center gap-4"
              selected={item.isActive}
              onClick={(_) => onClose && onClose()}
            >
              {item.icon}
              <Typography>{item.name}</Typography>
            </MenuItem>
          );
        })}
      </div>
    </Drawer>
  );
};
