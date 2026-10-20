import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Associação PCD em Movimento",
    short_name: "PCD em Movimento",
    description:
      "Promovendo inclusão, autonomia e qualidade de vida para pessoas com deficiência através da canoa havaiana adaptada.",
    start_url: "/",
    display: "standalone",
    background_color: "#122132",
    theme_color: "#122132",
    icons: [
      {
        src: "/image.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
