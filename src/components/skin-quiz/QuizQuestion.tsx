import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
type QuizOption = {
  id: string;
  label: string;
};
type QuizQuestionProps = {
  question: string;
  type: "single" | "multiple";
  options: QuizOption[];
  onSingleAnswer: (answerId: string) => void;
  onMultipleAnswer: (answerId: string, checked: boolean) => void;
  currentAnswer: string | string[];
  questionId: number;
};
const QuizQuestion = ({
  question,
  type,
  options,
  onSingleAnswer,
  onMultipleAnswer,
  currentAnswer,
  questionId,
}: QuizQuestionProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-soft mb-8">
      <h2 className="text-2xl font-medium mb-6">{question}</h2>
      
      {type === "single" ? (
        <RadioGroup
          value={currentAnswer as string || ""}
          onValueChange={(value) => onSingleAnswer(value)}
          className="space-y-4"
        >
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 transition-colors hover:bg-secondary/20">
              <RadioGroupItem
                value={option.id}
                id={`${questionId}-${option.id}`}
                className="text-rosegold-500 border-rosegold-300"
              />
              <Label
                htmlFor={`${questionId}-${option.id}`}
                className="flex-grow cursor-pointer font-normal"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        <div className="space-y-4">
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 transition-colors hover:bg-secondary/20">
              <Checkbox
                id={`${questionId}-${option.id}`}
                checked={Array.isArray(currentAnswer) && currentAnswer.includes(option.id)}
                onCheckedChange={(checked) => 
                  onMultipleAnswer(option.id, checked as boolean)
                }
                className="text-rosegold-500 border-rosegold-300"
              />
              <Label
                htmlFor={`${questionId}-${option.id}`}
                className="flex-grow cursor-pointer font-normal"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default QuizQuestion;