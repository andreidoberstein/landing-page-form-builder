
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormLayout from "./FormLayout";

type ContactFormProps = {
  onNext: () => void;
  onBack: () => void;
  formData: {
    whatsapp: string;
    email: string;
    appointmentLink: string;
  };
  updateFields: (fields: Partial<{
    whatsapp: string;
    email: string;
    appointmentLink: string;
  }>) => void;
};

const ContactForm = ({
  onNext,
  onBack,
  formData,
  updateFields,
}: ContactFormProps) => {
  return (
    <FormLayout
      title="Contato"
      description="Adicione suas informações de contato"
      onNext={onNext}
      onBack={onBack}
    >
      <div className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="whatsapp">
            Número de WhatsApp para incluir no botão de contato
          </Label>
          <Input
            id="whatsapp"
            placeholder="Ex: (11) 99999-9999"
            value={formData.whatsapp}
            onChange={(e) => updateFields({ whatsapp: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">
            E-mail profissional (caso queira exibir no site)
          </Label>
          <Input
            id="email"
            placeholder="Ex: seu.email@example.com"
            value={formData.email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="appointmentLink">
            Link para agendamento online
          </Label>
          <Input
            id="appointmentLink"
            placeholder="Ex: https://calendly.com/seuperfil"
            value={formData.appointmentLink}
            onChange={(e) => updateFields({ appointmentLink: e.target.value })}
          />
          <p className="text-sm text-slate-500">
            Se tiver, como Calendly ou Doctoralia
          </p>
        </div>
      </div>
    </FormLayout>
  );
};

export default ContactForm;
