import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function HomePage() {
  const imageNames = [1, 2, 3, 4, 5, 6, 7, 8];

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
      <Box className="flex flex-col gap-2 mt-10">
        <Typography>Management dashboard</Typography>
        <Box className="flex flex-wrap gap-2">
          {imageNames.map((name) => {
            return (
              <Image
                key={name}
                src={`/app_images/dark/${name}.png`}
                alt={name.toString()}
                width={200}
                height={400}
              ></Image>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
