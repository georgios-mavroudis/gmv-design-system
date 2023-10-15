import { Meta, StoryObj } from "@storybook/react";
import { GmButton } from "./GmButton";

const meta: Meta<typeof GmButton> = {
  component: GmButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: { contained: 'contained', outline: 'outlined', text: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: { small: 'small', medium: 'medium', large: 'large' },
    },
    disabled: {
      control: { type: 'boolean' }
    },
  }
}

export default meta;
type Story = StoryObj<typeof GmButton>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    disabled: true,
  },
  render: (props) => (
    <GmThemeProvider>
      <GmButton {...props}>Howdy</GmButton>
    </GmThemeProvider>
  )
}
// export const Outlined: Story = {
//   render: () => (
//     <GmThemeProvider>
//       <GmButton variant='outlined'>Howdy</GmButton>
//     </GmThemeProvider>
//   )
// }
// export const Text: Story = {
//   render: () => (
//     <GmThemeProvider>
//       <GmButton variant='text'>Howdy</GmButton>
//     </GmThemeProvider>
//   )
// }
