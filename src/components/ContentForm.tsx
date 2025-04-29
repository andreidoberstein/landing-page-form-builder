
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FormLayout from "./FormLayout";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

type ContentFormProps = {
  onNext: () => void;
  onBack: () => void;
  formData: {
    bio: string;
    instagram: string;
    linkedin: string;
    inspirationLinks: string;
  };
  updateFields: (fields: Partial<{
    bio: string;
    instagram: string;
    linkedin: string;
    inspirationLinks: string;
  }>) => void;
};

const ContentForm = ({
  onNext,
  onBack,
  formData,
  updateFields,
}: ContentFormProps) => {
  // In a real app, this would handle file uploads
  const handleFileUpload = () => {
    alert("No modo real, esta funcionalidade enviaria a foto para o servidor. Por favor, envie a foto profissional por WhatsApp conforme instruído.");
  };

  return (
    <FormLayout
      title="Conteúdo e Mídia"
      description="Adicione conteúdo e mídia para seu site"
      onNext={onNext}
      onBack={onBack}
    >
      <div className="space-y-6">
        <div className="grid gap-2">
          <Label>Foto profissional para o site</Label>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex gap-2 items-center border-lavender-300"
              onClick={handleFileUpload}
            >
              <Upload size={16} />
              <span>Escolher arquivo</span>
            </Button>
            <p className="text-sm text-slate-500">
              Envie também pelo WhatsApp para garantir a melhor qualidade.
            </p>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="bio">
            Bio (pequena apresentação profissional, de 3 a 5 linhas)
          </Label>
          <Textarea
            id="bio"
            placeholder="Escreva uma breve apresentação profissional..."
            value={formData.bio}
            onChange={(e) => updateFields({ bio: e.target.value })}
            className="min-h-[150px]"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            placeholder="Ex: @seuperfil"
            value={formData.instagram}
            onChange={(e) => updateFields({ instagram: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            placeholder="Ex: https://linkedin.com/in/seuperfil"
            value={formData.linkedin}
            onChange={(e) => updateFields({ linkedin: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="inspirationLinks">
            Links de outros perfis ou páginas que você gosta (inspiração)
          </Label>
          <Textarea
            id="inspirationLinks"
            placeholder="Cole aqui links de sites ou perfis que você considera inspiradores"
            value={formData.inspirationLinks}
            onChange={(e) => updateFields({ inspirationLinks: e.target.value })}
            className="min-h-[100px]"
          />
        </div>
      </div>
    </FormLayout>
  );
};

export default ContentForm;
