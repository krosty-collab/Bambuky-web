import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bambuky Fotografía",
    short_name: "Bambuky",
    description: "Fotografía newborn, maternidad y familia en Querétaro desde 2015.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFAF8",
    theme_color: "#B5838D",
    icons: [
      { src: "/icon.png", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
