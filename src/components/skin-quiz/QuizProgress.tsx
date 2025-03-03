import { Progress } from "@/components/ui/progress";
type QuizProgressProps = {
  currentStep: number;
  totalSteps: number;
  progress: number;
};
const QuizProgress = ({ currentStep, totalSteps, progress }: QuizProgressProps) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center text-sm mb-2">
        <span>Question {currentStep} of {totalSteps}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};
export default QuizProgress;