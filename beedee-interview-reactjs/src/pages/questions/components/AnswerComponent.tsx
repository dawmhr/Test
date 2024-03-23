import { Radio, Space } from "antd";
import { Answer } from "../useQuestion";

type Props = {
  items: Answer[];
  questionIndex: number;
  onChange?: (value: string, index: number) => void;
  selectAnswer?: string
}

const AnswerComponent = (props: Props) => {
  const { items, questionIndex ,onChange = () => {} ,selectAnswer} = props;

  return (
    <div>
      <Radio.Group
        onChange={(e) => onChange(e.target.value, questionIndex)}
        value={selectAnswer || null}
      >
        <Space direction='vertical'>
          {items.map((ans, key) => {
            return (
              <Radio value={ans.value} key={key}>
                {key + 1}. {ans.label}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default AnswerComponent;
