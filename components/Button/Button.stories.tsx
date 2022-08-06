import { Button } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Library/Button',
  component: Button,
  args: {
    color: 'black',
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  variant: 'default',
  children: 'Default Button'
}

export const Filled = Template.bind({})

Filled.args = {
  variant: 'filled',
  children: 'Filled Button'
}