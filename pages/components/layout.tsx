import { ReactNode } from "react";
import { AppSettingProvider } from "./app-setting-context";
import { Footer } from "./footer";
import { NavBar } from "./nav-bar";
import { Grid } from "@mui/material";

interface Props {
  children: ReactNode;
}
export function Layout({ children }: Props) {
  return (
    <AppSettingProvider>
      <Grid container>
        <Grid item xs={0} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Grid>
        <Grid item xs={0} md={1}></Grid>
      </Grid>
    </AppSettingProvider>
  );
}
