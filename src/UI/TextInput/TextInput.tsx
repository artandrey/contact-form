import classNames from 'classnames';
import React from 'react';
import s from './TextInput.module.scss';

interface TextInputProps
  extends Omit<
    React.ComponentPropsWithRef<'input'>,
    'defaultValue' | 'defaultChecked'
  > {}

const TextInput: React.FC<TextInputProps> = React.forwardRef(
  ({ placeholder, type, className, style, value, ...otherProps }, ref) => {
    return (
      <label
        className={classNames(s.wrapper, className, value && s.focused)}
        style={style}
      >
        {placeholder && <span className={s.placeholder}>{placeholder}</span>}
        <input
          ref={ref}
          className={s.input}
          value={value}
          type={type}
          {...otherProps}
        />
      </label>
    );
  }
);

export default TextInput;
