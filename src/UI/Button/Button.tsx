import classNames from 'classnames';
import React from 'react';
import s from './Button.module.scss';

export type ButtonRoles = 'main' | 'alternative';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  role?: ButtonRoles;
}

const ROLES_CLASSNAMES: Readonly<Record<ButtonRoles, string>> = Object.freeze({
  main: s.button__main,
  alternative: s.button__alternative,
});

const Button: React.FC<ButtonProps> = ({
  role = 'main',
  className,
  style,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(s.button, ROLES_CLASSNAMES[role])}
      {...otherProps}
    />
  );
};

export default Button;
