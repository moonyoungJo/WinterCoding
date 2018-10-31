import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
  children, onClick, disabled, theme = 'default',
}) => {

  return(
    <Div
      className={cx('button', theme, {disabled})}
      onClick={disabled ? () => null : onClick}>
      {children}
    </Div>
  )
}
export default Button;