import classNames from 'classnames';
import React from 'react';
import s from './ErrorMessage.module.scss';

interface ErrorMessageProps extends React.ComponentPropsWithoutRef<'span'> {}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <span
      className={classNames(
        className,
        s.message,
        children && s.message__active
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
};

export default ErrorMessage;
