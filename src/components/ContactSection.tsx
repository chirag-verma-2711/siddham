import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ContactSection() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: "", message: "" });

    if (!formData.state) {
      setFormStatus({
        type: "error",
        message: "Please select a state.",
      });
      return;
    }

    if (!captchaToken) {
      setFormStatus({
        type: "error",
        message: "Please verify that you are not a robot.",
      });
      return;
    }

    try {
      const response = await fetch(
        "https://vibrantlivingblog.com/steel-tiffins/backend/insert_contact.php",
        // "http://localhost/steel-tiffins/backend/insert_contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            captchaToken: captchaToken,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: "success",
          message:
            "Thank you for reaching out! We will get back to you shortly.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          message: "",
        });

        setCaptchaToken(null);

        // Optional auto-hide
        setTimeout(() => {
          setFormStatus({ type: "", message: "" });
        }, 5000);
      } else {
        setFormStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("API Error:", error);
      setFormStatus({
        type: "error",
        message: "Server error. Please try again later.",
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for product enquiries and business
              opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h3 className="text-2xl mb-8 text-foreground">
                Deep Metal Industries
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Ground floor Evershine, Industrial Estate,
                    <br />
                    A 6/12, Dewan And Shah Udyog Nagar,
                    <br />
                    Chinchpada, Vasai East, Waliv,
                    <br />
                    Vasai-Virar, Maharashtra 401208
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground">+91 9325063509</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    deepmetalindustries@yahoo.com
                  </p>
                </div>
              </div>

              <div>
                {/* Map Placeholder */}
                <div className="mt-8 rounded-lg overflow-hidden h-64 border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3763.1005510933323!2d72.8534418!3d19.408061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af7fe0e11b8f%3A0x1ba4a81046dbe51e!2sDeep%20Metal%20Industries!5e0!3m2!1sen!2sin!4v1768037326071!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Siddham - Deep Metal Industries Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-slate-50 rounded-lg border border-border p-8">
                <h3 className="text-2xl mb-6 text-foreground">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input
                      className="bg-white"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input
                      className="bg-white"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Phone Number *</Label>
                    <Input
                      className="bg-white"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>State *</Label>
                    <Select
                      value={formData.state}
                      onValueChange={(value) =>
                        setFormData({ ...formData, state: value })
                      }
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select a state" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianStates.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>City *</Label>
                    <Input
                      className="bg-white"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Message *</Label>
                    <Textarea
                      className="bg-white"
                      rows={5}
                      required
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  {typeof window !== "undefined" && (
                    <ReCAPTCHA
                      sitekey="6LeWSUYsAAAAAL3ITdlo7x4uxcQ3FGJQ9G30A8kk"
                      onChange={(token) => setCaptchaToken(token)}
                    />
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  {/* Inline success / error message */}
                  {formStatus.message && (
                    <div
                      style={{
                        marginTop: "1rem",
                        textAlign: "center",
                        fontSize: "18px",
                        color:
                          formStatus.type === "success"
                            ? "#16a34a"
                            : "#dc2626",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
