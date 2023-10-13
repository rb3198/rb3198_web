import { Theme } from "../enum/Theme";

export interface ThemedProps {
    theme?: Theme;
    toggleTheme?: () => void;
}