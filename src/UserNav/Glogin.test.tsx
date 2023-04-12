import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Glogin } from './Glogin'

// https://gist.github.com/sibelius/9cc90ebbff77c5e6112df5054b1cf603
jest.mock('@react-oauth/google', () => {
  const defaultMockSuccess = {
    credential: 'credential',
  }

  const GoogleLogin = ({
    onSuccess,
    buttonText,
    ...props
  }: {
    onSuccess: (arg0: object) => void
    buttonText: string
  }): React.ReactElement => {
    const handleClick = (): void => {
      onSuccess(defaultMockSuccess)
    }

    return (
      <button onClick={handleClick} {...props}>
        {buttonText}
      </button>
    )
  }

  const GoogleOAuthProvider = ({
    children,
    clientId,
    ...props
  }: {
    children: JSX.Element
    clientId: string
  }): React.ReactElement => <div {...props}>{children}</div>

  return { GoogleLogin, GoogleOAuthProvider }
})

jest.mock('jwt-decode', () => {
  // just return the string we get right back so we can skip messing with jwts in tests
  const jwtDecode = (token: string): string => token
  return jwtDecode
})

test('google login success sets user profile', async () => {
  const mockHandleClose = jest.fn()
  render(<Glogin handleClose={mockHandleClose} />)

  const loginButton = screen.getByTestId('google-login-button')
  userEvent.click(loginButton)

  expect(mockHandleClose).toHaveBeenCalled()
})
