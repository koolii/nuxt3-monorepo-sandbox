import CountButton from "../components/CountButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentType = typeof CountButton;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
  title: "CountButton",
  component: CountButton,
};

export default meta;
export const Default: Story = {
  render: () => ({
    components: { CountButton },
    template: "<CountButton />",
  }),
};
