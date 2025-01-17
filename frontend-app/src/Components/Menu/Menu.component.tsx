import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)
const Menu: React.FC = () => {
  const history = useHistory()
  const classes = useStyles()
  const handleClick = (value: string) => {
    history.push(value)
  }
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => handleClick('/')}
            >
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              City & Weather
            </Typography>
            <Button color="inherit" onClick={() => handleClick('/search')}>
              Buscar Ciudad
            </Button>
            <Button color="inherit" onClick={() => handleClick('/history')}>
              Historial
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  )
}
export default Menu
