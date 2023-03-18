import { IconButton, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  hideText?: boolean;
  responsive?: boolean;
  onClick?: () => void;
}
export const LogoComponent = ({
  hideText,
  responsive = true,
  onClick,
}: Props) => {
  return (
    <div
      className="flex items-center cursor-pointer gap-2"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <IconButton disableRipple className="p-0">
        <Image src="/BunnyTB_logo.png" alt="logo" width={32} height={32} />
      </IconButton>
      {!hideText && (
        <div
          className={classNames("truncate", {
            "w-0 md:w-auto": responsive,
            "w-auto": !responsive,
          })}
        >
          <Typography
            sx={{ fontFamily: (theme) => theme.typography.fontFamily }}
          >
            BunnyTB
          </Typography>
        </div>
      )}
    </div>
  );
};
