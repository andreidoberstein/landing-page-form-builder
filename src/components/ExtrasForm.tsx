
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import FormLayout from "./FormLayout";

type ExtrasFormProps = {
  onNext: () => void;
  onBack: () => void;
  formData: {
    testimonials: boolean;
    contactForm: boolean;
    blogLink: boolean;
    additionalRequests: string;
  };
  updateFields: (fields: Partial<{
    testimonials: boolean;
    contactForm: boolean;
    blogLink: boolean;
    additionalRequests: string;
  }>) => void;
};

const ExtrasForm = ({
  onNext,
  onBack,
  formData,
  updateFields,
}: ExtrasFormProps) => {
  return (
    <FormLayout
      title="Extras"
      description="Recursos adicionais para o seu site"
      onNext={onNext}
      onBack={onBack}
      isLastStep={true}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <Label>Extras que gostaria:</Label>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="testimonials"
              checked={formData.testimonials}
              onCheckedChange={(checked) => 
                updateFields({ testimonials: checked as boolean })
              }
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="testimonials"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Depoimentos de pacientes
              </Label>
              <p className="text-sm text-muted-foreground">
                Você enviará os depoimentos posteriormente
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="contactForm"
              checked={formData.contactForm}
              onCheckedChange={(checked) => 
                updateFields({ contactForm: checked as boolean })
              }
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="contactForm"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Formulário de contato no site
              </Label>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="blogLink"
              checked={formData.blogLink}
              onCheckedChange={(checked) => 
                updateFields({ blogLink: checked as boolean })
              }
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="blogLink"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Link para blog/artigos
              </Label>
              <p className="text-sm text-muted-foreground">
                Para implementação futura
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="additionalRequests">
            Outro desejo ou ideia que gostaria de ver no seu site?
          </Label>
          <Textarea
            id="additionalRequests"
            placeholder="Descreva outras funcionalidades ou ideias que gostaria de ter em seu site"
            value={formData.additionalRequests}
            onChange={(e) => updateFields({ additionalRequests: e.target.value })}
            className="min-h-[150px]"
          />
        </div>
      </div>
    </FormLayout>
  );
};

export default ExtrasForm;
