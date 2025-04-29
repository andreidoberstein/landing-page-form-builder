
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormLayout from "./FormLayout";

type PersonalInfoFormProps = {
  onNext: () => void;
  formData: {
    fullName: string;
    professionalName: string;
    crpNumber: string;
    location: string;
  };
  updateFields: (fields: Partial<{
    fullName: string;
    professionalName: string;
    crpNumber: string;
    location: string;
  }>) => void;
};

const PersonalInfoForm = ({
  onNext,
  formData,
  updateFields,
}: PersonalInfoFormProps) => {
  return (
    <FormLayout
      title="Informações Pessoais"
      description="Preencha seus dados profissionais"
      onNext={onNext}
      isFirstStep={true}
    >
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="fullName">Nome Completo</Label>
          <Input
            id="fullName"
            placeholder="Seu nome completo"
            value={formData.fullName}
            onChange={(e) => updateFields({ fullName: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="professionalName">Nome Profissional</Label>
          <Input
            id="professionalName"
            placeholder="Como deseja ser chamado(a) no site"
            value={formData.professionalName}
            onChange={(e) => updateFields({ professionalName: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="crpNumber">Número do CRP</Label>
          <Input
            id="crpNumber"
            placeholder="Seu número de registro profissional"
            value={formData.crpNumber}
            onChange={(e) => updateFields({ crpNumber: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="location">Cidade/Estado onde atende</Label>
          <Input
            id="location"
            placeholder="Ex: São Paulo/SP"
            value={formData.location}
            onChange={(e) => updateFields({ location: e.target.value })}
          />
        </div>
      </div>
    </FormLayout>
  );
};

export default PersonalInfoForm;
