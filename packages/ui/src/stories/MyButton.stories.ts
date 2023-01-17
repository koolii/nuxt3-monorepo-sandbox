import MyButton from "../components/MyButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentType = typeof MyButton;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
};

export default meta;
export const Default: Story = {
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: "<MyButton v-bind='args' />",
  }),
  args: {
    label: "ボタン",
    variant: undefined,
    size: undefined,
  },
};

export const Login: Story = {
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: "<MyButton v-bind='args' />",
  }),
  args: {
    label: "ログイン",
    variant: "secondary",
  },
};
