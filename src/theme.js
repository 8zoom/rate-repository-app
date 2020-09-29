import { Platform } from 'react-native';
import Constants from 'expo-constants';

/*
const theme = {
  container: {
    paddingTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    marginHorizontal: 16,
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    tabBackground: "#24292e",
    tabTextColor: "#ffffff",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 12,
    subheading: 14,
    title: 18,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
*/

const theme = {
  roundness: 3,
  container: {
    paddingTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    marginHorizontal: 16,
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackground: '#24292e',
    mainBackground: '#e1e4e8',
    error: '#d73a4a',
    divider: '#d1d5da',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    title: 14,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
