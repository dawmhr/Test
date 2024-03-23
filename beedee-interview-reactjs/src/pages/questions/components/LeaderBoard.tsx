import {
  Badge,
  Button,
  Card,
  Col,
  Flex,
  List,
  Row,
  Space,
  Typography,
} from "antd";
import { Score, UseTestProps } from "../hook/useTest";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

type Props = {
  key?: string;
} & UseTestProps;
const LeaderBoard = (props: Props) => {
  const navigate = useNavigate();
  const { ...useTestProps } = props;
  const {
    onStartTest = () => {},
    getRanking = () => [],
    currentUser = "",
  } = useTestProps;
  const data: Score[] = getRanking();

  const getListItem = (item: Score, index: number) => {
    const isMe = item.username === currentUser;

    const content = (
      <Card size='small' hoverable>
        <Row justify='space-between'>
          <Col>
            <Title level={3}>
              {index + 1}. {item.username}
            </Title>
          </Col>
          <Col>
            <Space>
              <Title level={3}>{item.score}</Title>
              <Title level={5}>คะแนน</Title>
            </Space>
          </Col>
        </Row>
      </Card>
    );
    return (
      <List.Item key={item.username}>
        <div className='score-item'>
          {isMe ? (
            <Badge.Ribbon text={isMe ? "ลำดับของคุณ" : ""} color='magenta'>
              {content}
            </Badge.Ribbon>
          ) : (
            content
          )}
        </div>
      </List.Item>
    );
  };

  return (
    <div className='wrapperTop'>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Title>Leaderboard</Title>
        </Col>
        <Col span={24}>
          <List dataSource={data} bordered={false} renderItem={getListItem} />
        </Col>
        <Col span={24}>
          <Flex gap='small'>
            <Button
              type='primary'
              block
              size='large'
              onClick={() => navigate("/")}
            >
              Home Page
            </Button>
            <Button block size='large' onClick={onStartTest}>
              Try again
            </Button>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default LeaderBoard;
