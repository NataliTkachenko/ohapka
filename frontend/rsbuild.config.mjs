import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  html: {
    inject: "body",
    scriptLoading: "blocking",
    favicon: "./src/assets/icon.png",
    appIcon: "./src/assets/icon.png",
    title: "Охапка",
    meta: {
      charset: {
        charset: "UTF-8",
      },

      description: "Онлайн-магазин растений и цветов Охапка",
    },
  },
});
