import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Michael Maddison",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "notes.penqguin.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto Mono",
        body: "Roboto Mono",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFFFF",        // White
          lightgray: "#E0E0E0",    // Light Gray
          gray: "#808080",         // Gray
          darkgray: "#333333",     // Dark Gray
          dark: "#000000",         // Black
          secondary: "#2F5F98",    // Blue
          tertiary: "#FF8C00",     // Orange
          highlight: "rgba(47, 95, 152, 0.15)",
          textHighlight: "#FF8C0088",
        },
        darkMode: {
          light: "#1A1A1A",        // Dark background (near black)
          lightgray: "#333333",    // Dark Gray
          gray: "#808080",         // Gray
          darkgray: "#E0E0E0",     // Light Gray
          dark: "#FFFFFF",         // White
          secondary: "#5A8BBF",    // Light Blue
          tertiary: "#FF9D2E",     // Light Orange
          highlight: "rgba(90, 139, 191, 0.15)",
          textHighlight: "#FF9D2E88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
