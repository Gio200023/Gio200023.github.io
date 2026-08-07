import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import spectre from "./package/src";
import { spectreDark } from "./src/ec-theme";

// https://astro.build/config
const config = defineConfig({
	site: "https://gio200023.github.io",
	output: "static",
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: "Giovanni Lunardi",
			openGraph: {
				home: {
					title: "Giovanni Lunardi",
					description: "HPC Engineer, Software Developer & Proud Geek.",
				},
				blog: {
					title: "Blog",
					description: "Notes on HPC, homelab and everything in between.",
				},
				projects: {
					title: "Projects",
				},
			},
			// No comments section for now, drops the need for a server adapter.
			giscus: false,
		}),
	],
});

export default config;
