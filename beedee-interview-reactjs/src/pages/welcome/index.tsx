import { Button, Col, Form, FormProps, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

type FieldType = {
  username?: string;
};

function WelcomePage() {

  const navigate = useNavigate()

  const onSubmit: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    navigate(`/test/${values?.username}`)
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className='layout'>
      <div className='wrapper'>
        <Row align='middle' justify='center' gutter={[8, 8]}>
          <Col span={12}><Title>Welcome to test</Title></Col>
          <Col span={24}></Col>
          <Col span={12}>
            <Form
              name='basic'
              onFinish={onSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
              layout='vertical'
            >
              <Form.Item<FieldType>
                label='Username'
                name='username'
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input size='large' />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit' size='large'>
                  Start test
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default WelcomePage;
