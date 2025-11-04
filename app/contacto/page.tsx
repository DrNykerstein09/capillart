"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { CONTACT_INFO } from "@/lib/constants";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Calendar,
  Shield,
  Award,
  Sparkles,
  ArrowRight,
  User,
  Smartphone,
  Brain
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

// Información del consultorio
const clinicInfo = {
  address: "C. Querétaro 27, Roma Nte., Cuauhtémoc",
  city: "06700, CDMX",
  googleMapsUrl: "https://maps.app.goo.gl/zSKJ9dhDnkvgTX8M7",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7669999999996!2d-99.16799999999999!3d19.423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3ad3b3e3b3%3A0x123456789!2sC.%20Quer%C3%A9taro%2027%2C%20Roma%20Nte.%2C%20Cuauht%C3%A9moc%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890",
  hours: [
    { day: "Lunes - Viernes", time: "9:00 AM - 7:00 PM" },
    { day: "Sábado", time: "9:00 AM - 2:00 PM" },
    { day: "Domingo", time: "Cerrado" },
  ]
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "whatsapp"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferredContact: "whatsapp"
        });
      }, 3000);
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, mi nombre es ${formData.name || '[Tu nombre]'}. Me gustaría agendar mi diagnóstico gratuito para trasplante capilar.`
    );
    const phone = CONTACT_INFO.whatsapp.replace(/\s+/g, "");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">Diagnóstico 100% Gratuito</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Da el primer paso hacia tu{" "}
              <span className="relative">
                nueva imagen
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-white rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Agenda tu consulta gratuita hoy mismo. Nuestro equipo de expertos te espera 
              en nuestra clínica en la Roma Norte, CDMX.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Formulario de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl border-0 h-full">
                <CardHeader className="bg-gradient-to-br from-primary to-secondary text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Send className="w-6 h-6" />
                    Solicita tu Diagnóstico Gratuito
                  </CardTitle>
                  <p className="text-white/90 mt-2">
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        ¡Mensaje Enviado!
                      </h3>
                      <p className="text-muted-foreground">
                        Nos pondremos en contacto contigo muy pronto
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Nombre */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Nombre Completo *
                        </Label>
                        <Input
                          id="name"
                          required
                          placeholder="Juan Pérez"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="h-12"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Correo Electrónico *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="juan@ejemplo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="h-12"
                        />
                      </div>

                      {/* Teléfono */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4" />
                          Teléfono *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="55 1234 5678"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="h-12"
                        />
                      </div>

                      {/* Mensaje */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          ¿Cómo podemos ayudarte?
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Cuéntanos sobre tu caso o las dudas que tengas..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="resize-none"
                        />
                      </div>

                      {/* Preferencia de Contacto */}
                      <div className="space-y-2">
                        <Label>¿Cómo prefieres que te contactemos?</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {["whatsapp", "telefono", "email"].map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setFormData({...formData, preferredContact: method})}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                formData.preferredContact === method
                                  ? "border-accent bg-accent/10"
                                  : "border-muted hover:border-accent/50"
                              }`}
                            >
                              {method === "whatsapp" && <MessageCircle className="w-5 h-5 mx-auto mb-1" />}
                              {method === "telefono" && <Phone className="w-5 h-5 mx-auto mb-1" />}
                              {method === "email" && <Mail className="w-5 h-5 mx-auto mb-1" />}
                              <span className="text-xs capitalize">{method}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Botones de Envío */}
                      <div className="flex flex-col gap-3">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-accent hover:bg-accent/90 text-white font-semibold h-12 shadow-lg"
                        >
                          {isSubmitting ? (
                            <>Enviando...</>
                          ) : (
                            <>
                              Solicitar Diagnóstico Gratuito
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </>
                          )}
                        </Button>
                        
                        <Button
                          type="button"
                          size="lg"
                          variant="outline"
                          onClick={handleWhatsAppClick}
                          className="w-full border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white font-semibold h-12"
                        >
                          <MessageCircle className="mr-2 w-5 h-5" />
                          Contactar por WhatsApp
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Información de Contacto y Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Información de la Clínica */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-accent" />
                    Visítanos en Roma Norte
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Dirección */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Dirección</h4>
                      <p className="text-muted-foreground">
                        {clinicInfo.address}<br />
                        {clinicInfo.city}
                      </p>
                      <a 
                        href={clinicInfo.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1 mt-2"
                      >
                        Ver en Google Maps
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Teléfono</h4>
                      <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Atención telefónica de L-V 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Respuesta en menos de 24 horas
                      </p>
                    </div>
                  </div>

                  {/* Horarios */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Horarios de Atención</h4>
                      <div className="space-y-1">
                        {clinicInfo.hours.map((schedule, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{schedule.day}</span>
                            <span className="font-medium text-primary">{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mapa de Google Maps */}
              <Card className="shadow-xl border-0 overflow-hidden">
                <div className="aspect-[16/10] bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7337!2d-99.16581!3d19.4241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff5a8a8a8a8b%3A0x9b9b9b9b9b9b9b9b!2sC.%20Quer%C3%A9taro%2027%2C%20Roma%20Nte.%2C%20Cuauht%C3%A9moc%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de CapilArt"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios de Visitarnos */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Por qué visitarnos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tu primera consulta es completamente gratuita e incluye:
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: CheckCircle,
                title: "Diagnóstico Completo",
                description: "Evaluación profesional de tu caso específico"
              },
              {
                icon: Brain,
                title: "Simulación 3D con IA",
                description: "Visualiza tus resultados antes del procedimiento"
              },
              {
                icon: Shield,
                title: "Plan Personalizado",
                description: "Propuesta adaptada a tus necesidades"
              },
              {
                icon: Award,
                title: "Sin Compromiso",
                description: "Toma tu decisión con toda la información"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tu nueva imagen te está esperando
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Miles de pacientes han recuperado su confianza con CapilArt. 
              Comienza tu transformación hoy mismo.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 rounded-full shadow-2xl"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 w-6 h-6" />
                Chatea con Nosotros Ahora
              </Button>
            </motion.div>
            <p className="text-white/70 text-sm mt-4">
              Respuesta inmediata por WhatsApp
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}