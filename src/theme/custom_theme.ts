import { brown, red, teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const CustomTheme = createMuiTheme({
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
});

export default CustomTheme;
