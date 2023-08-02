import React, { useState } from 'react';
import style from './login.module.scss';
import { Button, Checkbox, Form, Input } from 'antd';

const { Item } = Form;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface IErrorMsg {
  account: string;
  password: string
}
interface IValidateStatus {
  account: "" | "success" | "error";
  password: "" | "success" | "error";
}

export const Login: React.FC = () => {
  const [msg, setMsg] = useState<IErrorMsg>({
    account: 'Please input your email!',
    password: 'Please input your password'
  });
  const [validateStatus, setValidateStatus] = useState<IValidateStatus>({
    account: '',
    password: ''
  })

  const onFinish = (data: any) => {   
    setValidateStatus({
      account: data.email ? 'success' : 'error',
      password: data.password ? 'success' : 'error'
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login">
      <header className={style.header}>
        Sign in
      </header>
      <section className={style.form_section}>
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Item<FieldType>
            label="Email"
            name="email"
            validateStatus={validateStatus.account}
            rules={[
              {
                required: false,
                message: msg.account
              },
              {
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email"
              }
            ]}
          >
            <Input placeholder="input email" />
          </Item>

          <Item<FieldType>
            label="Password"
            name="password"
            validateStatus={validateStatus.password}
            rules={[
              {
                required: false,
                message: msg.password
              },
              // {
              //   validator: (_, value) => {
              //     return !value.includes(" ")
              //       ? Promise.resolve()
              //       : Promise.reject(new Error("No spaces allowed"))
              //   }
              // }
            ]}
          >
            <Input.Password placeholder="input password" />
          </Item>

          <Item<FieldType>
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Item>

          <Item>
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Submit
            </Button>
          </Item>
        </Form>
      </section>
    </div>
  );
}
