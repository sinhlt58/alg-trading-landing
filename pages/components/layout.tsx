import { ReactNode } from "react"
import { AppSettingProvider } from "./app-setting-context"

interface Props {
  children: ReactNode
}
export function Layout({ children }: Props) {

  return (
    <AppSettingProvider>
      <div>{children}</div>
    </AppSettingProvider>
  )
}
