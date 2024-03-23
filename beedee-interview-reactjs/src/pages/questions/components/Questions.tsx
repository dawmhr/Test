import { useMemo } from "react";
import { Progress, Space, Typography } from "antd";
import AnswerComponent from "./AnswerComponent";
import { UseTestProps } from "../hook/useTest";
import { Question } from "../hook/useQuestion";
import StepButton from "./StepButton";
const { Title } = Typography;

type Props = {
  key?: string;
} & UseTestProps;

const Questions = (props: Props) => {
  const { ...useTestProps } = props;
  const {
    current = 0,
    question = [],
    answer = [],
    onAnswer,
    currentUser = "",
  } = useTestProps;

  const steps = useMemo(() => {
    return question?.map((item: Question, index: number) => {
      return {
        title: `${index + 1}. ${item.question}`,
        content: (
          <AnswerComponent
            items={item.answer}
            onChange={onAnswer}
            questionIndex={index}
            selectAnswer={answer[index]}
          />
        ),
      };
    });
  }, [answer, onAnswer, question]);

  return (
    <div className='wrapper'>
      <Space direction='vertical' size='large' style={{ width: "100%" }}>
        <Title level={3}>Hi, {currentUser}</Title>
        <Progress percent={Math.floor((current / 20) * 100)} type='line' />
        <div>{steps[current]?.title}</div>
        <div className='content-box'>{steps[current]?.content}</div>
        <div className='step-box'>
          <StepButton {...useTestProps} steps={steps} />
        </div>
      </Space>
    </div>
  );
};

export default Questions;
