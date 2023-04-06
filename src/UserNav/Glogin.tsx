import type { CredentialResponse } from '@react-oauth/google'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import React from 'react'

export function Glogin({ handleClose }: { handleClose: () => void }): React.ReactElement {
  const onSuccess = (credentialResponse: CredentialResponse): void => {
    console.log(credentialResponse)
    const creds = jwtDecode(credentialResponse.credential ?? '')
    console.log(creds)
    // query for user profile exists?
    // if exists, update credential in store
    // if not exist, launch "new user" flow
    handleClose()
  }
  const onError = (): void => {
    console.log('ayo')
  }

  return (
    <GoogleOAuthProvider clientId="18887420827-gkm2u7uj851l9k3qss82257uo0rlgekc.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        text="continue_with"
        data-testid="google-login-button"
      />
    </GoogleOAuthProvider>
  )
}
