import { Inter } from "@next/font/google";
import GlassPane from "@/components/GlassPane";

const inter = Inter({
  variable: "--font-inter",
});

const AuthRootLayout = ({children}) => {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className={auth.body}>
        <GlassPane>
          {children}
        </GlassPane>
      </body>
    </html>
  )
}

export default AuthRootLayout