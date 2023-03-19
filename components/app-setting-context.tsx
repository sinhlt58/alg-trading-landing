import {
  Box,
  PaletteMode,
  Theme,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { createContext, useContext, useState, useEffect } from "react";
import i18n from "i18next";
import { IS_CLIENT_SIDE } from "./common";
import { getAppTheme } from "./mui-theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const LOCAL_STORAGE_LANGUAGE = "language";
const LOCAL_STORAGE_THEME_MODE = "theme";

export interface AppSettingState {
  themeMode: PaletteMode;
  setThemeMode: (v: PaletteMode) => void;
  language: string;
  setLanguage: (v: string) => void;
  toggleThemeMode: (
    v?: string,
    options?: ThemeOptions,
    saveLocalStorate?: boolean
  ) => void;
  toggleLanguage: (
    v?: string,
    reloadPage?: boolean,
    saveLocalStorate?: boolean
  ) => void;
  updateThemePartial: (v: ThemeOptions) => void;
}

export const AppSettingContext = createContext({} as AppSettingState);

export const useAppSettingContext = () => useContext(AppSettingContext);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}
export const AppSettingProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    "dark" as PaletteMode
  );
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState<Theme>(() => {
    return getAppTheme(themeMode);
  });
  const [moreOptions, setMoreOptions] = useState<ThemeOptions>({});

  useEffect(() => {
    const newTheme = createTheme(getAppTheme(themeMode), moreOptions);
    setTheme(newTheme);
  }, [themeMode, moreOptions]);

  useEffect(() => {
    let savedThemeMode = IS_CLIENT_SIDE
      ? localStorage.getItem(LOCAL_STORAGE_THEME_MODE)
      : "";
    savedThemeMode = (savedThemeMode ? savedThemeMode : "dark") as PaletteMode;
    setThemeMode(savedThemeMode as PaletteMode);
  }, []);

  useEffect(() => {
    let savedLang = IS_CLIENT_SIDE
      ? localStorage.getItem(LOCAL_STORAGE_LANGUAGE)
      : "";
    savedLang = savedLang ? savedLang : "en";
    i18n.changeLanguage(savedLang);
    setLanguage(savedLang);
  }, []);

  const toggleThemeMode = (
    v?: string,
    options: ThemeOptions = {},
    saveLocalStorate = true
  ) => {
    let newMode =
      (v as PaletteMode) || (themeMode === "light" ? "dark" : "light");
    setThemeMode(newMode);
    setMoreOptions(options);
    if (saveLocalStorate && IS_CLIENT_SIDE) {
      localStorage.setItem(LOCAL_STORAGE_THEME_MODE, newMode);
    }
  };

  const toggleLanguage = async (
    v?: string,
    reloadPage = false,
    saveLocalStorate = true
  ) => {
    const newLang =
      v || (language === "en" || language.startsWith("en-") ? "vi" : "en");
    setLanguage(newLang);
    await i18n.changeLanguage(newLang);
    if (saveLocalStorate && IS_CLIENT_SIDE) {
      localStorage.setItem(LOCAL_STORAGE_LANGUAGE, newLang);
    }
    if (reloadPage) {
      window.location.reload();
    }
  };

  const updateThemePartial = (v: ThemeOptions) => {
    const newValue = createTheme(theme, v);
    setTheme(newValue);
  };

  const value: AppSettingState = {
    themeMode,
    setThemeMode,
    language,
    setLanguage,
    toggleThemeMode,
    toggleLanguage,
    updateThemePartial,
  };

  return (
    <AppSettingContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Box
            className={themeMode}
            // default font settings
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontFamily: (theme) => theme.typography.fontFamily,
              fontSize: (theme) => theme.typography.fontSize,
            }}
          >
            {children}
          </Box>
        </LocalizationProvider>
      </ThemeProvider>
    </AppSettingContext.Provider>
  );
};

export default AppSettingProvider;
