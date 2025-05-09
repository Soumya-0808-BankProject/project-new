// components/Header/styles.js

const contactHeaderStyles = {
  container: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.custom.headerLinks,
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

export default contactHeaderStyles;
