import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "namfit",
  description: "namfit is fitness planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
