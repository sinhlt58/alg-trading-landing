import { Button } from "@mui/material"
import Link from "next/link"
import { LogoComponent } from "./logo.component"

interface Props {

}
export const NavBar = ({ }: Props) => {

  return (
    <div className="flex items-center py-2">
      <LogoComponent />
      <div className="flex items-center gap-8 ml-8">
        <Link href="/">
          Home
        </Link>
        <Link href="/pricing">
          Pricing
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
      <div className="flex-1"></div>
      <div className="flex items-center gap-8">
        <Link href="/login">
          Vi
        </Link>
        <Link href="/login">
          Dark
        </Link>
        <Link href="/login">
          Login
        </Link>
      </div>
    </div>
  )
}
