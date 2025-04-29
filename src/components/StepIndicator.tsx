
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type StepIndicatorProps = {
  steps: string[];
  currentStep: number;
};

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex justify-center items-center py-4 mb-8">
      {steps.map((step, i) => (
        <div
          key={i}
          className={cn(
            "step-item",
            currentStep === i && "active",
            currentStep > i && "complete"
          )}
        >
          <div className="step">
            {currentStep > i ? <Check className="w-5 h-5" /> : i + 1}
          </div>
          <p className="text-sm mt-2">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
