"use client";

import { useEffect, useState } from "react";
import {
  Instagram,
  Linkedin,
  Twitter,
  MousePointerClick,
  Youtube,
} from "lucide-react";
import SocialLink from "@/components/SocialLink";
import { RiDiscordLine } from "react-icons/ri";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('Diagon_Alley14.jpg')" }}
    >
      {mounted && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          {/* ===== Title ===== */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 magic-shimmer animate-fade-in-up tracking-tight text-center"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              animationDelay: "0.1s",
            }}
          >
            HexaFalls 2
          </h1>

          {/* ===== Subtitle ===== */}
          <p
            className="text-base sm:text-lg text-[#f5e6c8]/50 mb-12 animate-fade-in-up text-center"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              animationDelay: "0.3s",
            }}
          >
            JIS University&apos;s Premier TechFest
          </p>

          {/* ===== Social Links ===== */}
          <div
            className="flex flex-col gap-4 w-full max-w-sm animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <SocialLink
              href="https://hexafalls.org//"
              icon={<MousePointerClick className="w-5 h-5" />}
              label="Register Now ⚡"
              handle="hexafalls.org"
              delay="0.5s"
            />


            <SocialLink
              href="https://www.instagram.com/hexafalls_"
              icon={<Instagram className="w-5 h-5" />}
              label="Instagram"
              handle="@hexafalls_"
              delay="0s"
            />

            <SocialLink
              href="https://x.com"
              icon={<Twitter className="w-5 h-5" />}
              label="Twitter"
              handle="@hexafalls"
              delay="0.1s"
            />

            <SocialLink
              href="https://www.linkedin.com/company/hexafalls/"
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
              handle="hexafalls"
              delay="0.2s"
            />

            <SocialLink
              href="https://discord.gg/FdgCkrmrG"
              icon={<RiDiscordLine className="w-5 h-5" />}
              label="Discord"
              handle="Join our server"
              delay="0.3s"
            />

            <SocialLink
              href="https://www.youtube.com/@hexafalls"
              icon={<Youtube className="w-5 h-5" />}
              label="YouTube"
              handle="@HexafallsHackathon"
              delay="0.4s"
            />


          </div>        </div>
      )}
    </main>
  );
}
