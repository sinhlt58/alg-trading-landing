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
      <Grid container sx={{ bgcolor: (theme) => theme.palette.background.default }}>
        <Grid item xs={0} md={1}></Grid>
        <Grid item xs={12} md={10}
          sx={{
            paddingX: {
              xs: 2,
              sm: 2,
              md: 0,
            },
          }}
        >
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Grid>
        <Grid item xs={0} md={1}></Grid>
      </Grid>
    </AppSettingProvider>
  );
}
