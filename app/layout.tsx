import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import ThemeDataProvider from "@/context/theme-data-provider";
import MenuBar from "@/components/shared/menubar";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";

const roboto = Roboto({ weight: ["300", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Shoe Store",
    default: `${APP_NAME}`,
  },
  description: `${APP_DESCRIPTION} | ${APP_NAME}`,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
