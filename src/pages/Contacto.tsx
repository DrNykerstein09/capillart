import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  const whatsappNumber = "5215520923088";
  const message = "Hola, me gustaría obtener más información sobre los servicios de CapilArt";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Agenda tu diagnóstico gratuito o consulta cualquier duda directamente por WhatsApp.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex"
          >
            <Card className="shadow-strong bg-whatsapp text-whatsapp-foreground flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FaWhatsapp className="h-8 w-8" />
                  Contáctanos por WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow flex flex-col">
                <p className="text-base text-whatsapp-foreground/90">
                  La forma más rápida de comunicarte con nosotros. Obtén respuesta inmediata 
                  a tus preguntas y agenda tu diagnóstico gratuito.
                </p>
                <div className="flex-grow flex items-center justify-center py-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="w-full bg-background text-whatsapp hover:bg-background/90 text-lg h-14 shadow-medium"
                  >
                    <FaWhatsapp className="h-6 w-6 mr-2" />
                    Iniciar Conversación
                  </Button>
                </div>
                <div className="pt-3 border-t border-whatsapp-foreground/20">
                  <p className="text-sm text-whatsapp-foreground/80 text-center">
                    Respuesta inmediata en horario de atención
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Phone */}
            <Card className="shadow-medium">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3 flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground text-lg mb-1">Teléfono</h3>
                    <p className="text-muted-foreground text-lg font-medium mb-1">
                      +52 55 2092 3088
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Atención telefónica de L-V 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="shadow-medium">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3 flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground text-lg font-medium mb-1">
                      contacto@capilart.com.mx
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Respuesta en menos de 24 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card className="shadow-medium bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary-foreground/10 p-3 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-3">Horarios de Atención</h3>
                    <div className="space-y-2 text-primary-foreground/90">
                      <div className="flex justify-between">
                        <span className="font-medium">Lunes - Viernes</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sábado</span>
                        <span>2:00 PM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Domingo</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="shadow-strong overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <MapPin className="h-7 w-7 text-accent" />
                Nuestra Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-6 bg-muted">
                <p className="text-foreground font-medium text-lg mb-1">
                  C. Querétaro 27, Roma Nte., Cuauhtémoc
                </p>
                <p className="text-muted-foreground">
                  06700, Ciudad de México, CDMX
                </p>
              </div>
              <div className="w-full h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6179445842897!2d-99.16254892472949!3d19.42096904124344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3b8f4f5f5f%3A0x5f5f5f5f5f5f5f5f!2sC.%20Quer%C3%A9taro%2027%2C%20Roma%20Nte.%2C%20Cuauht%C3%A9moc%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de CapilArt"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
