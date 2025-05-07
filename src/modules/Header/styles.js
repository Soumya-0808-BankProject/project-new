// components/Header/styles.js

const headerStyles = {
  container: (theme) => ({
    backgroundColor: theme.palette.background.header,
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: 2,
    py: 1,
    fontSize: 14,
  }),
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    flexWrap: "wrap",
  },
  link: {
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    color: "white",
  },
  leftIcons: {
    fontSize: 18,
    mr: 0.5,
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
};

export default headerStyles;
