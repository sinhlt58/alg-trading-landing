import { Typography } from "@mui/material";

interface Props {
  mt?: string;
}
export const Footer = ({ mt = "0px" }: Props) => {
  return (
    <div className={`flex flex-col ${mt}`} style={{ marginTop: mt }}>
      <hr />
      <div className="py-4 flex items-center justify-center">
        <Typography
          sx={{
            fontSize: 14,
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          BunnyTB © 2023
        </Typography>
      </div>
    </div>
  );
};
