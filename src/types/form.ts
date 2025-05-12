export interface Form {
  // Personal info
  fullName: string
  professionalName: string
  crpNumber: string
  location: string
  // Focus
  targetAudience: string
  specialties: string
  appointmentType: string
  mainMessage: string
  // Visual
  preferredColors: string
  avoidColors: string
  style: string
  otherStyle: string
  // Content
  bio: string
  instagram: string
  linkedin: string
  inspirationLinks: string
  // Domain
  domainPreference: string
  domainSuggestions: string
  // Contact
  whatsapp: string
  email: string
  appointmentLink: string
  // Extras
  testimonials: boolean,
  contactForm: boolean,
  blogLink: boolean,
  additionalRequests: string
}