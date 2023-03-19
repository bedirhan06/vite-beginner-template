import { defineConfig } from "vite";
import { URL, fileURLToPath } from "url";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    createSvgIconsPlugin({
      symbolId: "svg-[dir]-[name]",
      iconDirs: [
        fileURLToPath(new URL("./src/svgs", import.meta.url)),
        fileURLToPath(new URL("./public/images", import.meta.url)),
      ],
      customDomId: "svgs",
    }),
  ],
}));
