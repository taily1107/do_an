import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    mixins: {
      toolbar: {
        height: 55,
      },
    },
  })
);

export default theme;
