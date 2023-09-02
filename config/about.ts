import { Icons } from "@/components/icons";
import { AboutConfig } from "types";

export const aboutConfig: AboutConfig = {
  mainNav: [
    {
      title: "Currency",
      icon: "currency",
      items: [
        {
          title: "Basic",
          href: "basic currency",
          icon: "currency",
        },
        {
          title: "Exotic",
          href: "exotic currency",
          icon: "exotic",
        },
      ],
    },
    {
      title: "Essence",
      items: [
        {
          title: "Essence",
          href: "essence",
          icon: "essence",
        },
      ],
    },
    // {
    //   title: "Scarabs",
    //   items: [
    //     {
    //       title: "Scarabs",
    //       href: "scarab",
    //       icon: "scarab",
    //     },
    //   ],
    // },

    {
      title: "Fragments",
      icon: "fragment",
      items: [
        {
          title: "General",
          href: "fragment",
          icon: "fragment",
        },
        {
          title: "Breach",
          href: "breach",
          icon: "breach",
        },
        {
          title: "Scarabs",
          href: "scarab",
          icon: "scarab",
        },
      ],
    },

    {
      title: "Delve",
      items: [
        {
          title: "Delve",
          href: "delve",
          icon: "delve",
        },
      ],
    },
    {
      title: "Oils",
      items: [
        {
          title: "Oils",
          href: "oil",
          icon: "oil",
        },
      ],
    },
    {
      title: "Other",
      icon: "misc",
      items: [
        { title: "Miscellaneous", href: "misc", icon: "misc" },
        {
          title: "Incubators",
          href: "incubator",
          icon: "incubator",
        },
        {
          title: "Calalysts",
          href: "catalyst",
          icon: "catalyst",
        },
      ],
    },
  ],
};
