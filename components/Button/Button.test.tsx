import { render, screen } from '@testing-library/react'
import { Button } from './index'
import NormalizeStyles from '../../styles/normalizeStyles'

describe('Button', () => {
  it('should render correct default style button', () => {
    render(
      <>
        <NormalizeStyles />
        <Button>button</Button>
      </>
    )
    const button = screen.getByText('button')
    expect(button).toHaveStyle('border: 1px solid black')
    expect(button).toHaveStyle('color: black')
  })
})
