import React from "react"
import Head from "next/head"
import {
  AppBar,
  Container,
  createTheme,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core"
import useStyles from "../utils/styles"

export default function Layout({ title, description, children }) {
  const classes = useStyles()
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f0c000'
      },
      secondary: {
        main: '#208080'
      }
    }
  })

  return (
    <div>
      <Head>
        <title> {title ? `${title} - Next Amazona` : "Next Amazona"} </title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography>amazona</Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Next Amazona.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  )
}
