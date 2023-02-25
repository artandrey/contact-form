import classNames from 'classnames';
import React from 'react';
import s from './Card.module.scss';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}

const Card: React.FC<CardProps> = ({ className, ...otherProps }) => {
  return <div className={classNames(className, s.card)} {...otherProps} />;
};

export default Card;
