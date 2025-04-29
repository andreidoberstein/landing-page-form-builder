
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const SubmitSuccess = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto border border-lavender-100 shadow-md">
      <CardHeader className="bg-gradient-to-r from-lavender-100 to-teal-100 rounded-t-lg">
        <h2 className="text-2xl font-serif text-center font-bold text-lavender-700">
          Obrigado!
        </h2>
        <p className="text-center text-slate-600">
          Suas informações foram enviadas com sucesso
        </p>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-3">
            <Check className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h3 className="text-xl font-medium text-gray-900 mb-4">
          Formulário enviado com sucesso!
        </h3>
        
        <p className="mb-6 text-gray-600">
          Entraremos em contato em breve para discutir os próximos passos da criação da sua landing page personalizada.
        </p>
        
        <Button
          className="bg-lavender-600 hover:bg-lavender-700 text-white"
          onClick={() => window.location.reload()}
        >
          Enviar outro formulário
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubmitSuccess;
