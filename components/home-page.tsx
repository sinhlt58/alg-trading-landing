import { AppEvent } from "@/shared/modesl";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { NavItemModel } from "./nav-bar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SocialLink } from "./social-link";
import { useAppSettingContext } from "./app-setting-context";

export default function HomePage() {
  const { themeMode } = useAppSettingContext();
  const imageNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const homeBlockRef = useRef<HTMLDivElement>(null);
  const pricingBlockRef = useRef<HTMLDivElement>(null);
  const socialBlockRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      imageUrl: "/logos/facebook.svg",
      link: "https://www.facebook.com/bunnytboffical",
    },
    {
      imageUrl: "/logos/youtube.svg",
      link: "https://www.youtube.com/@bunnytbofficial",
    },
    {
      imageUrl: "/logos/tiktok.svg",
      link: "https://www.tiktok.com/@bunnytbofficial",
    },
    {
      imageUrl: "/logos/telegram.svg",
      link: "https://t.me/bunnytbsignals",
    },
    {
      imageUrl: "/logos/linkedin.svg",
      link: "https://linkedin.com/company/bunnytb",
    },
  ];

  useEffect(() => {
    const handleClickNavScrollItem = async (e: any) => {
      const item = e.detail as NavItemModel;
      const blockRef =
        item.action === "home"
          ? homeBlockRef
          : item.action === "pricing"
          ? pricingBlockRef
          : bottomRef;
      if (blockRef && blockRef.current) {
        await new Promise((r) => setTimeout(r, 100));
        blockRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener(
      AppEvent.clickNavScrollItem,
      handleClickNavScrollItem
    );

    return () => {
      document.removeEventListener(
        AppEvent.clickNavScrollItem,
        handleClickNavScrollItem
      );
    };
  }, []);

  return (
    <Box className="mt-12 flex flex-col gap-12">
      <Box
        ref={homeBlockRef}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          gap: {
            xs: 7,
            sm: 7,
            md: 2,
          },
        }}
      >
        <Box sx={{ flex: { md: 1 } }}>
          <div className="flex flex-col gap-2">
            <Typography variant="h6">Trading assistant</Typography>
            <Typography>
              Monitor the market and help your trading more consistently.
            </Typography>
          </div>
        </Box>
        <Box sx={{ flex: { md: 1 } }}>
          <div className="flex flex-col gap-2">
            <Typography variant="h6">Signal notifications</Typography>
            <Link href={"https://t.me/bunnytbsignals"} target="_blank">
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: 30,
                    height: 30,
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <Image src="/logos/telegram.svg" alt="Telegram" fill></Image>
                </div>
                <Typography>Telegram group</Typography>
              </div>
            </Link>
          </div>
        </Box>
        <Box sx={{ flex: { md: 1 } }}>
          <div className="flex flex-col gap-2">
            <Typography variant="h6">Supported exchanges</Typography>
            <Link href={"https://binance.com"} target="_blank">
              <div
                style={{
                  width: 112,
                  height: 28,
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Image src="/logos/binance_logo.png" alt="Binance" fill></Image>
              </div>
            </Link>
          </div>
        </Box>
      </Box>
      <Box className="flex flex-col gap-2">
        <Typography variant="h6">Dashboard</Typography>
        <Box className="flex gap-1 overflow-x-auto">
          {imageNames.map((name) => {
            return (
              <Image
                key={name}
                src={`/app_images/${themeMode}/${name}.png`}
                alt={name.toString()}
                width={200}
                height={400}
              ></Image>
            );
          })}
        </Box>
      </Box>
      <Box className="flex items-center justify-center">
        <Box className="flex flex-col gap-2 items-center" ref={pricingBlockRef}>
          <Typography variant="h6">Pricing</Typography>
          <Box
            className="flex flex-col gap-2"
            sx={{
              padding: 2,
              border: 1,
              borderRadius: 1,
              borderColor: (theme) => theme.palette.divider,
            }}
          >
            <Typography align="center" variant="h6">
              60$ / month
            </Typography>
            <hr />
            {[
              "Access many strategies",
              "Custom notifications",
              "Top symbols",
              "Analyzed charts",
              "Run on custom server / domain",
            ].map((feature) => {
              return (
                <div className="flex items-center gap-4" key={feature}>
                  <CheckCircleIcon
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  />
                  <Typography>{feature}</Typography>
                </div>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box className="flex flex-col gap-2" ref={socialBlockRef}>
        <Typography variant="h6" align="center">
          Social
        </Typography>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((sl) => {
            return <SocialLink key={sl.link} {...sl} />;
          })}
        </div>
      </Box>
      <div ref={bottomRef} className="mt-80"></div>
    </Box>
  );
}
