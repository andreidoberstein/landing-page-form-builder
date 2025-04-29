
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FormLayout from "./FormLayout";

type DomainFormProps = {
  onNext: () => void;
  onBack: () => void;
  formData: {
    domainPreference: "yes" | "help" | "no";
    domainSuggestions: string;
  };
  updateFields: (fields: Partial<{
    domainPreference: "yes" | "help" | "no";
    domainSuggestions: string;
  }>) => void;
};

const DomainForm = ({
  onNext,
  onBack,
  formData,
  updateFields,
}: DomainFormProps) => {
  return (
    <FormLayout
      title="Domínio (nome do site)"
      description="Defina o endereço do seu site na internet"
      onNext={onNext}
      onBack={onBack}
    >
      <div className="space-y-6">
        <div className="grid gap-4">
          <Label>
            Gostaria de registrar um domínio próprio (ex: www.nomepsicologa.com.br)?
          </Label>
          <RadioGroup
            value={formData.domainPreference}
            onValueChange={(value) => 
              updateFields({ 
                domainPreference: value as "yes" | "help" | "no" 
              })
            }
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="help" id="help" />
              <Label htmlFor="help">Não sei ainda, quero ajuda</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">
                Não, pode usar um domínio gratuito por enquanto
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="domainSuggestions">
            Sugestões de nomes para o domínio
          </Label>
          <Input
            id="domainSuggestions"
            placeholder="Ex: seunome, suaespecialidade, etc."
            value={formData.domainSuggestions}
            onChange={(e) => updateFields({ domainSuggestions: e.target.value })}
          />
          <p className="text-sm text-slate-500">
            Pode ser seu nome ou algo criativo relacionado à sua prática
          </p>
        </div>
      </div>
    </FormLayout>
  );
};

export default DomainForm;
