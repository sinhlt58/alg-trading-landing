import { IconButton, Typography } from "@mui/material";
import classNames from "classnames";

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
        <img src="/BunnyTB_logo.png" alt="logo" className="w-8 h-8" />
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
