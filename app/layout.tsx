import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn("min-h-screen h-screen overflow-hidden flex flex-col")}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
