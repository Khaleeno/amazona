import React from "react"
import Head from "next/head"
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"
import useStyles from "../utils/styles"

export default function Layout({ title, description, children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title> {title ? `${title} - Next Amazona` : 'Next Amazona'} </title>
        {description && <meta name="description" content={description} /> }
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main} >{children}</Container>
      <footer className={classes.footer}>
        <Typography>
          All rights reserved. Next Amazona.
        </Typography>
      </footer>
    </div>
  )
}
