import { Box, Grid, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      className="mt-12"
      sx={{
        paddingX: {
          xs: 2,
          sm: 2,
          md: 0,
        },
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <Typography>Crypto trading bot</Typography>
          <Typography>
            Monitor the market and help your trading more consistent
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>Trading signal notifications</Typography>
          <Typography>Join Telegram group</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>Support exchanges</Typography>
          <Typography>BINANCE</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
