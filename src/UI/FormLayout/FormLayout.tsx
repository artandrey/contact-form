import classNames from 'classnames';
import React from 'react';
import s from './FormLayout.module.scss';

interface FromLayoutProps extends React.ComponentPropsWithoutRef<'form'> {}

const FormLayout: React.FC<FromLayoutProps> = ({
  className,
  style,
  ...otherProps
}) => {
  return (
    <form
      className={classNames(className, s.layout)}
      style={style}
      {...otherProps}
    ></form>
  );
};

export default FormLayout;
