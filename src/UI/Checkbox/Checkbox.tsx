import classNames from 'classnames';
import React from 'react';
import s from './Checkbox.module.scss';

interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {}

const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
  ({ className, style, value, ...otherProps }, ref) => {
    return (
      <label className={classNames(s.wrapper, className)} style={style}>
        <input ref={ref} className={s.input} {...otherProps} type="checkbox" />
      </label>
    );
  }
);

export default Checkbox;
