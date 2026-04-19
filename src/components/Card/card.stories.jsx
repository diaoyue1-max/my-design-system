import { Card } from './card';
import { Button } from '../Button/button';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Getting Started',
    description: 'This is a simple card component. Use it to group related content.',
  },
};

export const Elevated = {
  args: {
    title: 'Elevated Card',
    description: 'This variant uses a shadow instead of a border.',
    elevated: true,
  },
};

export const WithFooter = {
  render: () => (
    <Card
      title="Confirm Action"
      description="Are you sure you want to proceed? This cannot be undone."
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Button label="Cancel"  variant="ghost"   size="sm" />
          <Button label="Confirm" variant="primary" size="sm" />
        </div>
      }
    />
  ),
};