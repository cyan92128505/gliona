import { brown, red, teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const customTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: brown,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
  },
  overrides: {
    MuiButton: {
      // override the styles of all instances of this component
      root: {
        // Name of the rule
        color: 'white', // Some CSS
      },
    },
  },
});

export default customTheme;
