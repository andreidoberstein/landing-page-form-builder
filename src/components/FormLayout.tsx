
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

type FormLayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
  isFirstStep?: boolean;
};

const FormLayout = ({
  children,
  title,
  description,
  onNext,
  onBack,
  isLastStep = false,
  isFirstStep = false,
}: FormLayoutProps) => {
  return (
    <Card className="w-full max-w-3xl mx-auto border border-lavender-100 shadow-md">
      <CardHeader className="bg-gradient-to-r from-lavender-100 to-teal-100 rounded-t-lg">
        <h2 className="text-2xl font-serif text-center font-bold text-lavender-700">
          {title}
        </h2>
        {description && (
          <p className="text-center text-slate-600">{description}</p>
        )}
      </CardHeader>
      <CardContent className="p-6">
        {children}
        
        <div className="flex justify-between mt-6">
          {!isFirstStep && (
            <Button
              variant="outline"
              onClick={onBack}
              className="border-lavender-300 hover:bg-lavender-50 text-lavender-700"
            >
              Voltar
            </Button>
          )}
          {isFirstStep && <div></div>}
          
          <Button
            onClick={onNext}
            className="bg-lavender-600 hover:bg-lavender-700 text-white"
          >
            {isLastStep ? "Enviar" : "Próximo"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FormLayout;
