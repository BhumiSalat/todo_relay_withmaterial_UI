import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, Checkbox, Alert } from "antd";
import { useEnvironmentContext } from "../../EnviromentContext";

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 6,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 11,
    span: 2,
  },
};

const pretailLayout = {
  wrapperCol: {
    offset: 9,
    span: 6,
  },
};

export const SignIn = () => {
  const { environment } = useEnvironmentContext();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState({});

  useEffect(() => {}, [submitted]);

  const onFinish = (values) => {
    console.log("Success:", values);
    setValues(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onClick = () => {};

  return (
    <Row
      style={{ minHeight: "100vh", alignItems: "center", textAlign: "center" }}
    >
      <Col span={24}>
        <Form
          {...layout}
          name="sign-in"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {error && error.message ? (
            <Alert
              message="Error Text"
              description={`${error.message}`}
              type="error"
              closable
            />
          ) : null}

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...pretailLayout} name="remember" valuePropName="checked">
            <Row justify="space-between" align="middle">
              <Col>
                <Checkbox>Remember me</Checkbox>
              </Col>
              <Col>
                <Button type="link">Forgot Password?</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              block="true"
              htmlType="submit"
              onClick={onClick}
            >
              SIGN IN
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
