import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Button } from 'antd';

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  return <div className={styles.login}>登录界面</div>;
};

export default Login;
