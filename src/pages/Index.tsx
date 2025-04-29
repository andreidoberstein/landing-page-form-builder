
import { useState } from "react";
import StepIndicator from "@/components/StepIndicator";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import FocusForm from "@/components/FocusForm";
import VisualIdentityForm from "@/components/VisualIdentityForm";
import ContentForm from "@/components/ContentForm";
import DomainForm from "@/components/DomainForm";
import ContactForm from "@/components/ContactForm";
import ExtrasForm from "@/components/ExtrasForm";
import SubmitSuccess from "@/components/SubmitSuccess";
import { useToast } from "@/components/ui/use-toast";

const STEPS = [
  "Informações Pessoais",
  "Foco de Atuação",
  "Identidade Visual",
  "Conteúdo",
  "Domínio",
  "Contato",
  "Extras",
];

const Index = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    professionalName: "",
    crpNumber: "",
    location: "",
    
    // Focus
    targetAudience: "",
    specialties: "",
    appointmentType: "both" as "presential" | "online" | "both",
    mainMessage: "",
    
    // Visual Identity
    preferredColors: "",
    avoidColors: "",
    style: "clean" as "clean" | "feminine" | "modern" | "cozy" | "other",
    otherStyle: "",
    
    // Content
    bio: "",
    instagram: "",
    linkedin: "",
    inspirationLinks: "",
    
    // Domain
    domainPreference: "help" as "yes" | "help" | "no",
    domainSuggestions: "",
    
    // Contact
    whatsapp: "",
    email: "",
    appointmentLink: "",
    
    // Extras
    testimonials: false,
    contactForm: false,
    blogLink: false,
    additionalRequests: "",
  });

  function updateFields(fields: Partial<typeof formData>) {
    setFormData(prev => ({ ...prev, ...fields }));
  }

  function next() {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      // Submit the form
      console.log("Form data:", formData);
      toast({
        title: "Formulário enviado!",
        description: "Suas informações foram recebidas com sucesso.",
      });
      setIsSubmitted(true);
    }
  }

  function back() {
    setCurrentStep(prev => Math.max(0, prev - 1));
    window.scrollTo(0, 0);
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-lavender-50 py-12 px-4">
        <SubmitSuccess />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-lavender-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-lavender-700 mb-4">
            Formulário para Landing Page de Psicóloga
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Preencha as informações abaixo para que possamos criar uma landing page personalizada que represente sua identidade profissional.
          </p>
        </header>

        <StepIndicator steps={STEPS} currentStep={currentStep} />

        {currentStep === 0 && (
          <PersonalInfoForm 
            onNext={next}
            formData={formData}
            updateFields={updateFields}
          />
        )}

        {currentStep === 1 && (
          <FocusForm
            onNext={next}
            onBack={back}
            formData={formData}
            updateFields={updateFields}
          />
        )}

        {currentStep === 2 && (
          <VisualIdentityForm
            onNext={next}
            onBack={back}
            formData={formData}
            updateFields={updateFields}
          />
        )}

        {currentStep === 3 && (
          <ContentForm
            onNext={next}
            onBack={back}
            formData={formData}
            updateFields={updateFields}
          />
        )}

        {currentStep === 4 && (
          <DomainForm
            onNext={next}
            onBack={back}
            formData={formData}
            updateFields={updateFields}
          />
        )}

        {currentStep === 5 && (
          <ContactForm
            onNext={next}
            onBack={back}
            formData={formData}
            updateFields={updateFields}
          />
        )}

        {currentStep === 6 && (
          <ExtrasForm
            onNext={next}
            onBack={back}
            formData={formData}
            updateFields={updateFields}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
