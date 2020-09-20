import Constants from "expo-constants";

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
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    title: 20,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
