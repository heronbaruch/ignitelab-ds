import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput'

export default{
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    children: 'Create Account',
    size: 'md',
  },
  argTypes: {},
  } as Meta<TextInputProps>

export const Default: StoryObj = {}
