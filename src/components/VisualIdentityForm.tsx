
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FormLayout from "./FormLayout";

type VisualIdentityFormProps = {
  onNext: () => void;
  onBack: () => void;
  formData: {
    preferredColors: string;
    avoidColors: string;
    style: "clean" | "feminine" | "modern" | "cozy" | "other";
    otherStyle: string;
  };
  updateFields: (fields: Partial<{
    preferredColors: string;
    avoidColors: string;
    style: "clean" | "feminine" | "modern" | "cozy" | "other";
    otherStyle: string;
  }>) => void;
};

const VisualIdentityForm = ({
  onNext,
  onBack,
  formData,
  updateFields,
}: VisualIdentityFormProps) => {
  return (
    <FormLayout
      title="Identidade Visual"
      description="Defina o estilo e cores do seu site"
      onNext={onNext}
      onBack={onBack}
    >
      <div className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="preferredColors">
            Cores que gostaria que estivessem presentes no seu site
          </Label>
          <Input
            id="preferredColors"
            placeholder="Ex: Azul claro, verde pastel, tons neutros..."
            value={formData.preferredColors}
            onChange={(e) => updateFields({ preferredColors: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="avoidColors">
            Cores que não gosta ou prefere evitar
          </Label>
          <Input
            id="avoidColors"
            placeholder="Ex: Vermelho forte, amarelo, preto..."
            value={formData.avoidColors}
            onChange={(e) => updateFields({ avoidColors: e.target.value })}
          />
        </div>

        <div className="grid gap-4">
          <Label>Estilo que te representa melhor</Label>
          <RadioGroup
            value={formData.style}
            onValueChange={(value) => 
              updateFields({ 
                style: value as "clean" | "feminine" | "modern" | "cozy" | "other" 
              })
            }
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="clean" id="clean" />
              <Label htmlFor="clean">Clean / Minimalista</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="feminine" id="feminine" />
              <Label htmlFor="feminine">Feminino / Delicado</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="modern" id="modern" />
              <Label htmlFor="modern">Moderno / Criativo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cozy" id="cozy" />
              <Label htmlFor="cozy">Acolhedor / Calmo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Outro</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.style === "other" && (
          <div className="grid gap-2">
            <Label htmlFor="otherStyle">Descreva o estilo desejado</Label>
            <Input
              id="otherStyle"
              placeholder="Descreva o estilo que te representa"
              value={formData.otherStyle}
              onChange={(e) => updateFields({ otherStyle: e.target.value })}
            />
          </div>
        )}
      </div>
    </FormLayout>
  );
};

export default VisualIdentityForm;
