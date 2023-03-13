/*
 * File: mui-theme.ts
 * Project: @senme/app-setting
 * File Created: Tuesday, 10th January 2023 10:39:18 am
 * Author: v.anhphamd (v.anhphd@vinbrain.net)
 *
 * Copyright 2023 VinBrain JSC
 */

import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { createTheme, PaletteMode, Theme } from '@mui/material';
import { purple } from '@mui/material/colors';

export const domainTheme = createTheme({
  senme: {
    customColor1: purple[500],
  },
});

const fontSize = 16;
export const getAppTheme = (mode: PaletteMode): Theme => {
  const themeColors = createTheme({
    palette: {
      mode,
      // common colors
      primary: {
        main: '#ff9800',
        dark: '#b26a00',
        light: '#ffac33',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      // mode colors
      ...(mode === 'light'
        ? {
            // palette values for light mode
            text: {
              primary: 'rgba(0, 0, 0, 0.87)',
              secondary: 'rgba(0, 0, 0, 0.6)',
              disabled: 'rgba(0, 0, 0, 0.38)',
            },
            background: {
              default: '#fff',
              paper: '#fff',
            },
            divider: 'rgba(0, 0, 0, 0.12)',
            action: {
              active: 'rgba(0, 0, 0, 0.54)',
              hover: 'rgba(0, 0, 0, 0.04)',
              selected: 'rgba(0, 0, 0, 0.08)',
              disabled: 'rgba(0, 0, 0, 0.26)',
              disabledBackground: 'rgba(0, 0, 0, 0.12)',
            },
          }
        : {
            // https://mui.com/material-ui/customization/dark-mode/
            // palette values for dark mode
            text: {
              primary: '#fff',
              secondary: 'rgba(255, 255, 255, 0.7)',
              disabled: 'rgba(255, 255, 255, 0.5)',
            },
            background: {
              default: '#121212',
              paper: '#121212',
            },
            divider: 'rgba(255, 255, 255, 0.12)',
            action: {
              active: '#fff',
              hover: 'rgba(255, 255, 255, 0.08)',
              selected: 'rgba(255, 255, 255, 0.16)',
              disabled: 'rgba(255, 255, 255, 0.3)',
              disabledBackground: 'rgba(255, 255, 255, 0.12)',
            },
          }),
    },
    typography: {
      // fontFamily: 'Arial',
      fontSize,
      button: {
        textTransform: 'none',
      },
    },
  });

  const themeComponents = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          fontSize,
        },
      },
      MuiInputBase: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            fontSize,
            // because we use tailwindcss/form (it is conflicted with mui input)
            // so we need to change the styling for the input to default mui
            input: {
              '&:focus': {
                boxShadow: 'none',
                border: 'none',
              },
            },
            '& textarea': {
              '&:focus': {
                boxShadow: 'none',
                border: 'none',
              },
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            // check the link below for reference
            // https://github.com/mui/material-ui/blob/master/packages/mui-material/src/OutlinedInput/OutlinedInput.js
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor:
                mode === 'light'
                  ? 'rgba(0, 0, 0, 0.23)'
                  : 'rgba(255, 255, 255, 0.23)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor:
                themeColors.palette[ownerState.color || 'primary'].main,
            },
          }),
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            fontSize,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
          variant: 'contained',
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            fontSize,
            flexShrink: 0,
          },
        },
      },
      MuiCheckbox: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            fontSize,
          },
        },
      },
      MuiRadio: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            fontSize,
          },
        },
      },
      MuiTooltip: {
        defaultProps: {
          placement: 'top',
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            overflow: 'auto',
            fontSize,
          },
          listbox: {
            overflow: 'visible',
            minWidth: 'max-content',
            maxWidth: '100%',
          },
          option: {
            overflowX: 'visible',
            width: '100%',
          },
        },
      },
      MuiDataGrid: {
        defaultProps: {
          rowHeight: 45,
          isRowSelectable: () => false,
        },
      },
    },
  });

  // the params order is important
  const theme = createTheme(domainTheme, themeComponents, themeColors);

  return theme;
};

declare module '@mui/material/styles' {
  interface Theme {
    senme: {
      customColor1: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    senme?: {
      customColor1?: string;
    };
  }
}
