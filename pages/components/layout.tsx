import { ReactNode } from "react"
import { AppSettingProvider } from "./app-setting-context"
import { Footer } from "./footer"
import { NavBar } from "./nav-bar"

interface Props {
  children: ReactNode
}
export function Layout({ children }: Props) {

  return (
    <AppSettingProvider>
      <div className="w-full h-full px-40">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </AppSettingProvider>
  )
}
