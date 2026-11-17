"use client";

import { useInView } from "motion/react";
import React, { useRef, useMemo } from "react";
import { Button } from "../ui/button";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiFacebook,
  SiYoutube,
  SiDiscord,
  SiTwitch,
  SiDribbble,
  SiBehance,
  SiMedium,
} from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

interface SocialItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });

  const buttons = useMemo<SocialItem[]>(() => {
    const items: SocialItem[] = [];
    const s = config.social;

    if (s.github) {
      items.push({
        name: "Github",
        href: s.github,
        icon: <SiGithub size={"24"} color={"#fff"} />,
      });
    }
    if (s.linkedin) {
      items.push({
        name: "LinkedIn",
        href: s.linkedin,
        icon: <SiLinkedin size={"24"} color={"#fff"} />,
      });
    }
    if (s.twitter) {
      items.push({
        name: "Twitter",
        href: s.twitter,
        icon: <SiX size={"24"} color={"#fff"} />,
      });
    }
    if (s.instagram) {
      items.push({
        name: "Instagram",
        href: s.instagram,
        icon: <SiInstagram size={"24"} color={"#fff"} />,
      });
    }
    if (s.facebook) {
      items.push({
        name: "Facebook",
        href: s.facebook,
        icon: <SiFacebook size={"24"} color={"#fff"} />,
      });
    }
    if (s.youtube) {
      items.push({
        name: "YouTube",
        href: s.youtube,
        icon: <SiYoutube size={"24"} color={"#fff"} />,
      });
    }
    if (s.discord) {
      items.push({
        name: "Discord",
        href: s.discord,
        icon: <SiDiscord size={"24"} color={"#fff"} />,
      });
    }
    if (s.twitch) {
      items.push({
        name: "Twitch",
        href: s.twitch,
        icon: <SiTwitch size={"24"} color={"#fff"} />,
      });
    }
    if (s.dribbble) {
      items.push({
        name: "Dribbble",
        href: s.dribbble,
        icon: <SiDribbble size={"24"} color={"#fff"} />,
      });
    }
    if (s.behance) {
      items.push({
        name: "Behance",
        href: s.behance,
        icon: <SiBehance size={"24"} color={"#fff"} />,
      });
    }
    if (s.medium) {
      items.push({
        name: "Medium",
        href: s.medium,
        icon: <SiMedium size={"24"} color={"#fff"} />,
      });
    }

    return items;
  }, []);

  return (
    <div ref={ref} className="z-10">
      {show &&
        buttons.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
