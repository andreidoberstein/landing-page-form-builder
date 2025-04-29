
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FormLayout from "./FormLayout";

type FocusFormProps = {
  onNext: () => void;
  onBack: () => void;
  formData: {
    targetAudience: string;
    specialties: string;
    appointmentType: "presential" | "online" | "both";
    mainMessage: string;
  };
  updateFields: (fields: Partial<{
    targetAudience: string;
    specialties: string;
    appointmentType: "presential" | "online" | "both";
    mainMessage: string;
  }>) => void;
};

const FocusForm = ({
  onNext,
  onBack,
  formData,
  updateFields,
}: FocusFormProps) => {
  return (
    <FormLayout
      title="Foco da sua atuação"
      description="Defina qual é o seu público e especialidades"
      onNext={onNext}
      onBack={onBack}
    >
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="targetAudience">
            Público-alvo
          </Label>
          <Input
            id="targetAudience"
            placeholder="Ex: Mães, Adolescentes, Adultos, etc."
            value={formData.targetAudience}
            onChange={(e) => updateFields({ targetAudience: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="specialties">
            Especialidades
          </Label>
          <Textarea
            id="specialties"
            placeholder="Ex: Saúde mental na maternidade, Ansiedade, Luto, etc."
            value={formData.specialties}
            onChange={(e) => updateFields({ specialties: e.target.value })}
            className="min-h-[100px]"
          />
        </div>

        <div className="grid gap-2">
          <Label>Atendimento</Label>
          <RadioGroup
            value={formData.appointmentType}
            onValueChange={(value) => 
              updateFields({ 
                appointmentType: value as "presential" | "online" | "both" 
              })
            }
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="presential" id="presential" />
              <Label htmlFor="presential">Presencial</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="online" id="online" />
              <Label htmlFor="online">Online</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both" id="both" />
              <Label htmlFor="both">Ambos</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="mainMessage">
            Frase ou mensagem principal para o topo da página
          </Label>
          <Textarea
            id="mainMessage"
            placeholder="Uma mensagem que represente seu trabalho"
            value={formData.mainMessage}
            onChange={(e) => updateFields({ mainMessage: e.target.value })}
            className="min-h-[100px]"
          />
        </div>
      </div>
    </FormLayout>
  );
};

export default FocusForm;
