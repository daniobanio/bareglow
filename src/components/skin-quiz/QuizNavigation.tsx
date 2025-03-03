import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight } from "lucide-react";
type QuizNavigationProps = {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isAnswered: boolean;
};
const QuizNavigation = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  isAnswered,
}: QuizNavigationProps) => {
  return (
    <div className="flex justify-between">
      <Button
        variant="outline"
        className="rounded-full"
        onClick={onPrevious}
        disabled={currentStep === 1}
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
      </Button>
      <Button
        className="rounded-full bg-rosegold-500 hover:bg-rosegold-600"
        onClick={onNext}
        disabled={!isAnswered}
      >
        {currentStep < totalSteps ? "Next" : "See Results"} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
export default QuizNavigation;