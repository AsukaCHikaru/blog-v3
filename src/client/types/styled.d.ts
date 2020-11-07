import "styled-components";

type TextColors = "primary" | "link" | "tag" | "date";
type BackgroundColors = "primary" | "code";

declare module "styld-components" {
  export interface DefaultTheme {
    color: {
      text: Record<TextColors, string>;
      background: Record<BackgroundColors, string>;
    };
  }
}
