import { Typography } from "@mui/material"

export const Footer = () => {

  return (
    <div className="flex flex-col mt-80">
      <hr />
      <div className="py-4 flex items-center justify-center">
        <Typography sx={{
          fontSize: 14,
          color: (theme) => theme.palette.text.secondary
        }}>
          Bunny Bot © 2023
        </Typography>
      </div>
    </div>
  )
}
