import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mujeres Ingenieras en Sistemas",
  description: "Celebramos a las mujeres que transforman el mundo con tecnología. Eventos, proyectos y comunidad.",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <footer className="bg-purple-800 text-white text-center py-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Mujeres Ingenieras en Sistemas. Empoderando el futuro.
          </p>
          <p className="text-xs mt-2">
            Síguenos en nuestras redes sociales para más información y recursos.
          </p>
        </footer>
      </body>
    </html>
  );
}
