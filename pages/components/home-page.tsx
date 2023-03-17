import { AppEvent } from "@/shared/modesl";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";
import { NavItemModel } from "./nav-bar";

export default function HomePage() {
  const imageNames = [1, 2, 3, 4, 5, 6, 7, 8];
  const homeBlockRef = useRef<HTMLDivElement>(null);
  const pricingBlockRef = useRef<HTMLDivElement>(null);
  const contactBlockRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickNavScrollItem = (e: any) => {
      const item = e.detail as NavItemModel;
      const blockRef = item.action === "home" ? homeBlockRef : bottomRef;
      if (blockRef && blockRef.current) {
        blockRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }

    document.addEventListener(AppEvent.clickNavScrollItem, handleClickNavScrollItem);

    return () => {
      document.removeEventListener(AppEvent.clickNavScrollItem, handleClickNavScrollItem);
    }
  }, []);

  return (
    <Box
      className="mt-12 flex flex-col gap-12"
    >
      <Grid container spacing={6} ref={homeBlockRef}>
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
      <Box className="flex flex-col gap-2">
        <Typography>Management dashboard</Typography>
        <Box className="flex gap-1 overflow-x-auto">
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
      <Box className="flex flex-col gap-2" ref={pricingBlockRef}>
        <Typography>Pricing</Typography>
        <Typography>60$ per month</Typography>
      </Box>
      <Box className="flex flex-col gap-2" ref={contactBlockRef}>
        <Typography>Contact</Typography>
        <Typography>Youtube, facebook, tiktok, telegram, zalo</Typography>
      </Box>
      <div ref={bottomRef} className='mt-80'></div>
    </Box>
  );
}
