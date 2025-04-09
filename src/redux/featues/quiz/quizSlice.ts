import { QuizData } from "@/home/QuizData";
import { createSlice } from "@reduxjs/toolkit";
interface TQuiz {
  question: typeof QuizData;
  currentQuestionIndex: number;
  userAnwsers: string | null[];
  quizComplate: boolean;
}
const initialState: TQuiz = {
  question: QuizData,
  currentQuestionIndex: 0,
  userAnwsers: Array(QuizData.length).fill(null),
  quizComplate: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnwser: (state, action) => {
      const { questionIndex, anwser } = action.payload;
      console.log(anwser);
    },
  },
});
export const { setAnwser } = quizSlice.actions;
export default quizSlice.reducer;
