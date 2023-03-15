import Link from "next/link"
import { LogoComponent } from "./logo.component"

interface Props {

}
export const NavBar = ({ }: Props) => {

  return (
    <div className="flex items-center">
      <LogoComponent />
      <div className="flex items-center gap-8 ml-8">
        <Link href="/home">
          Home
        </Link>
        <Link href="/pricing">
          Pricing
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </div>
  )
}
