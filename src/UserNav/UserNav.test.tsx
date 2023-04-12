import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import UserNav from './UserNav'

test('it shows login options when button clicked', () => {
  render(<UserNav />)

  userEvent.click(screen.getByRole('button', { name: /ayo/ }))

  expect(screen.getByTestId('user-nav-backdrop')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Login options/ })).toBeInTheDocument()
  expect(screen.getByText(/Let Google help authenticate you\./)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Close/ })).toBeInTheDocument()
})

test('it closes dialog when close button clicked', () => {
  render(<UserNav />)

  userEvent.click(screen.getByRole('button', { name: /ayo/ }))

  const dialogHeader = screen.getByRole('heading', { name: /Login options/ })
  expect(dialogHeader).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: /Close/ }))
  expect(dialogHeader).not.toBeInTheDocument()
})

test('it closes dialog when backdrop clicked', async () => {
  render(<UserNav />)

  userEvent.click(screen.getByRole('button', { name: /ayo/ }))

  const dialogHeader = screen.getByRole('heading', { name: /Login options/ })
  expect(dialogHeader).toBeInTheDocument()

  userEvent.click(screen.getByTestId('user-nav-backdrop'))
  expect(dialogHeader).not.toBeInTheDocument()
})
