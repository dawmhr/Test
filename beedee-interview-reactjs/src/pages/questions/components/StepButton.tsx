import { Button, Space } from "antd";
import { UseTestProps } from "../hook/useTest";
import { Question } from "../hook/useQuestion";

type Props = {
  steps: any[];
} & UseTestProps;

const StepButton = (props: Props) => {
  const { steps, ...useTestProps } = props;
  const { current = 0, setCurrent = () => {}, answer = [] ,question = [],onSaveScore = () => {}} = useTestProps;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const summaryScore = () => {
    let count = 0;
    question?.forEach((item: Question, index: number) => {
      if (item.correct === answer[index]) {
        count++;
      }
    });
    onSaveScore(count);
  };


  return (
    <Space>
      {current > 0 && (
        <Button onClick={() => prev()} size='large'>
          Previous
        </Button>
      )}
      {current < steps.length - 1 && (
        <Button
          size='large'
          type='primary'
          onClick={next}
          disabled={!answer[current]}
        >
          Next
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button
          type='primary'
          size='large'
          onClick={() => {
            summaryScore();
            next();
          }}
          disabled={!answer[current]}
        >
          Done
        </Button>
      )}
    </Space>
  );
};

export default StepButton;
