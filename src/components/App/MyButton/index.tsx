/*
 * @Description: 自定义button组件
 */
import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

interface Props {
  className?: string;
  type?: 'primary' | 'active' | 'default';
  size?: 'large' | 'middle' | 'small';
  [key: string]: any;
}

const MyButton: React.FC<Props> = (props) => {
  const {
    className,
    type = 'default',
    size = 'small',
    children,
    ...otherProps
  } = props;

  return (
    <Button
      className={`${styles.myButton} ${
        styles['myButton_' + type]
      } ${className}`}
      type={type as 'primary'}
      size={size}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default MyButton;
