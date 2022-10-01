import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { UiProgressBarComponent } from 'src/app/ui/components/ui-progress-bar/ui-progress-bar.component';
import { UiProgressBarModule } from 'src/app/ui/components/ui-progress-bar/ui-progress-bar.module';

export default {
  title: 'Components/Progressbar',
  component: UiProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [UiProgressBarModule]
    }),
  ],
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    }
  },
} as Meta;

const Template: Story<UiProgressBarComponent> = (args: UiProgressBarComponent) => ({
  props: args,
});

export const Determinate = Template.bind({});
Determinate.args = {
  mode: 'determinate',
  value: 35,
  color: "primary" // primary | accent | warn
};
