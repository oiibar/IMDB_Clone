import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "IMDB_Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-center">
        <nav className="flex text-center items-center justify-between bg-orange-300 py-5">
          <ul className="flex text-center items-center justify-between w-1/3 mx-auto">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/popular">Popular</Link>
            </li>
            <li>
              <Link href="/nowPlaying">Now Playing</Link>
            </li>
            <li>
              <Link href="/topRated">Top Rated</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
