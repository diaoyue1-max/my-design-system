import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Ghost = {
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

export const Danger = {
  args: {
    label: 'Delete',
    variant: 'danger',
    size: 'md',
  },
};

export const Disabled = {
  args: {
    label: 'Not available',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button label="Primary"   variant="primary"   />
      <Button label="Secondary" variant="secondary" />
      <Button label="Ghost"     variant="ghost"     />
      <Button label="Danger"    variant="danger"    />
    </div>
  ),
};