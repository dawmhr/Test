import { useEffect } from "react";
import LeaderBoard from "./components/LeaderBoard";
import Questions from "./components/Questions";
import { useTest } from "./hook/useTest";
import { useNavigate, useParams } from "react-router-dom";

function QuestionsPage() {
  const params = useParams()
  const navigate = useNavigate()

  const { username = '' } = params
  const { ...useTestProps } = useTest(username);
  const { score = 0, onStartTest = () => {} } = useTestProps;

  console.log('username',username)

  useEffect(() => {
    if(!username || username == ''){
      navigate('/')
    }
  }, [username]);

  useEffect(() => {
    onStartTest();
  }, []);

  return (
    <div className='layout'>
      {score > 0 ? (
        <LeaderBoard {...useTestProps} />
      ) : (
        <Questions {...useTestProps} />
      )}
    </div>
  );
}

export default QuestionsPage;
