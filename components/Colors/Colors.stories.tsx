import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'
import { ColorSchemaType, DEFAULT_COLORS } from '../../styles/default-colors'

// eslint-disable-next-line storybook/story-exports
const Styled = styled.div`
  font-size: 12px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.color};
  color: white;
  text-shadow: 0 0 3px #444;
`

type Props = {
  color: string,
  children: React.ReactNode
}

const Color = (props: Props) => <Styled color={props.color}>{props.children}</Styled>

function getPalette(entries: string[][]) {
  return (
    entries.map(([opacity, hex]) => (
      <Color key={hex} color={hex}>
        <div>{opacity}</div>
        <div>{hex}</div>
      </Color>
    ))
  )
}

export default {
  title: 'Library/Colors',
  component: Color,
} as ComponentMeta<typeof Color>

export const ColorsPalette = () => (
  <>
    <div style={{ display: 'flex', gap: '20px', textAlign: 'center' }}>
      {Object.keys(DEFAULT_COLORS).map((color) => (
        <div key={color}>
          <div style={{ textTransform: 'capitalize' }}>{color}</div>
          {getPalette(Object.entries(DEFAULT_COLORS[color as keyof ColorSchemaType]))}
        </div>
      ))}
    </div>
  </>
)