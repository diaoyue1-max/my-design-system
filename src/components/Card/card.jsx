import './card.css';

export const Card = ({
  title = 'Card Title',
  description = 'Card description goes here.',
  footer,
  elevated = false,
}) => {
  return (
    <div className={`card ${elevated ? 'card--elevated' : ''}`}>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};