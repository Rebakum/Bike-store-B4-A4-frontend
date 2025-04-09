import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnwser } from "@/redux/featues/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Question() {
  const dispatch = useAppDispatch();
  const { question, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = question[currentQuestionIndex];
  const handlerAnwserChange = (anwser: string) => {
    console.log(anwser);
    dispatch(setAnwser);
  };
  return (
    <div className="flex justify-center">
      <Card className="w-[450px] flex justify-center">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question{currentQuestionIndex + 1}of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((option, index) => (
            <Button
              onClick={() => handlerAnwserChange(option)}
              key={index}
              className="w-full mt-3"
            >
              {option}
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">xyz</CardFooter>
      </Card>
    </div>
  );
}
