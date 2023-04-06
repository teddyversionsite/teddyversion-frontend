import {
  Backdrop,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material'
import type { TransitionProps } from '@mui/material/transitions'
import React from 'react'
import { Glogin } from './Glogin'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

function UserNav(): React.ReactElement {
  const [showLoginOptions, setShowLoginOptions] = React.useState(false)
  const handleClick = (): void => {
    setShowLoginOptions(!showLoginOptions)
  }

  return (
    <>
      {showLoginOptions ? (
        <>
          <Dialog
            open={showLoginOptions}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClick}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{'Login options'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help authenticate you.
              </DialogContentText>
              <Glogin handleClose={handleClick} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClick}>Close</Button>
            </DialogActions>
          </Dialog>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showLoginOptions}
            onClick={handleClick}
            data-testid="user-nav-backdrop"
          ></Backdrop>
        </>
      ) : (
        <Button variant="text" onClick={handleClick}>
          ayo
        </Button>
      )}
    </>
  )
}

export default UserNav
