import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { CProviders } from "./CProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jago Berkarir",
  description: "Jagoberkarir.com adalah platform yang memungkinkan Anda untuk meningkatkan peluang karir terbaik sesuai dengan minat dan keterampilan Anda",
  keywords: "prediksi soal cpns,SKB,CPNS,PPPK,TWK,TIU,TKP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <head>
      <link rel="icon" href="/icon/LOGO%20Favicon%2048%20x%2048-01.ico" type="image/x-icon" sizes="48x48"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"></link>
      <script src="/js/config.js"></script>
      <link href="/css/app.min.css" rel="stylesheet" type="text/css" id="app-style" />
      <link href="/css/icons.min.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <CProviders>
          {children}
        </CProviders>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"></script>
      </body>
    </html>
    </>
  );
}
