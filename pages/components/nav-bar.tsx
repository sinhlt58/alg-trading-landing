import { Box, Drawer, IconButton, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { LogoComponent } from "./logo.component";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactNode, useState } from "react";
import classNames from "classnames";

interface Props {}
export const NavBar = ({}: Props) => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  return (
    <div className="flex items-center py-2">
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
          gap: 2,
        }}
      >
        <div className="flex items-center gap-8 ml-8">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex-auto"></div>
        <div className="flex items-center gap-8">
          <Link href="/login">Vi</Link>
          <Link href="/login">Dark</Link>
          <Link href="/login">Login</Link>
        </div>
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
          items={[]}
          onClose={() => setSideMenuVisible(false)}
          open={sideMenuVisible}
        />
      </Box>
    </div>
  );
};

export interface SideMenuItemModel {
  name: string;
  isActive: boolean;
  route: string;
  icon: ReactNode;
}
interface SideMenuComponentProps {
  open: boolean;
  items: SideMenuItemModel[];
  onClose?: () => void;
}
export const SideMenuComponent = ({
  open,
  items,
  onClose,
}: SideMenuComponentProps) => {
  return (
    <Drawer
      open={open}
      className={classNames("flex flex-col")}
      anchor="right"
      onClose={onClose}
    >
      <div className="flex items-center gap-1">
        <LogoComponent responsive={false} onClick={onClose} />
      </div>
      {items.map((item) => {
        if (!open) return null;
        return (
          <Link href={item.route} onClick={(_) => onClose && onClose()}>
            <MenuItem
              className="flex items-center gap-4"
              key={item.name}
              selected={item.isActive}
            >
              {item.icon}
              <Typography>{item.name}</Typography>
            </MenuItem>
          </Link>
        );
      })}
    </Drawer>
  );
};
