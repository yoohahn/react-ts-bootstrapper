import React from "react";
import logo from "./logo.svg";
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = (theme: Theme) =>
  createStyles({
    root: { textAlign: "center" },
    header: {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: theme.palette.common.white,
    },
    logo: {
      height: "40vmin",
      pointerEvents: "none",
    },
    link: {
      color: blue[500],
    },
  });

type ClassesType = WithStyles<typeof styles>;
interface AppProps {
  classes: ClassesType["classes"];
}

const AppBase: React.FC<AppProps & React.HTMLAttributes<HTMLDivElement>> = ({
  classes,
  ...rest
}) => {
  return (
    <div className={classes.root} {...rest}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <Typography>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <Link
          className={classes.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
};
export const App = withStyles(styles)(AppBase);
