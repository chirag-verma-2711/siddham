import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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
import { Handshake, TrendingUp, Package, HeadphonesIcon } from "lucide-react";

const INSERT_DISTRIBUTOR_API = import.meta.env.VITE_INSERT_DISTRIBUTOR_API;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export function DistributorSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    businessType: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setFormStatus({ type: "", message: "" });

    if (!captchaToken) {
      setFormStatus({
        type: "error",
        message: "Please verify that you are not a robot.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(INSERT_DISTRIBUTOR_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken: captchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: "success",
          message:
            "Thank you! Your distributor enquiry has been submitted successfully.",
        });

        setFormData({
          fullName: "",
          companyName: "",
          mobile: "",
          email: "",
          city: "",
          state: "",
          businessType: "",
          message: "",
        });

        setCaptchaToken(null);

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
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Handshake,
      title: "Partnership Benefits",
      description: "Competitive margins and exclusive territory rights",
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description: "Tap into the premium kitchenware segment",
    },
    {
      icon: Package,
      title: "Quality Products",
      description: "ISI certified, premium stainless steel range",
    },
    {
      id: "contacts",
      icon: HeadphonesIcon,
      title: "Support",
      description: "Dedicated distributor support team",
    },
  ];

  return (
    <section id="distributor" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Become a Distributor
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our network of trusted distributors and grow your business
              with Siddham
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center border border-border hover:border-primary transition-all hover:shadow-md"
              >
                <benefit.icon
                  className="w-10 h-10 text-primary mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h4 className="mb-2 text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg border border-border p-8 lg:p-12">
            <h3 className="text-2xl mb-8 text-foreground text-center">
              Distributor Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Full Name *</Label>
                  <Input
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Company Name *</Label>
                  <Input
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Mobile Number *</Label>
                  <Input
                    required
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>City *</Label>
                  <Input
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>State *</Label>
                  <Input
                    required
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Type of Business *</Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, businessType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wholesaler">Wholesaler</SelectItem>
                    <SelectItem value="retailer">Retailer</SelectItem>
                    <SelectItem value="distributor">Distributor</SelectItem>
                    <SelectItem value="trader">Trader</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your business..."
                />
              </div>

              {typeof window !== "undefined" && (
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                />
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? "Processing..." : "Submit Distributor Enquiry"}
              </Button>

              {formStatus.message && (
                <div
                  className={`mt-4 text-xl text-center transition-all duration-300 ${
                    formStatus.type === "success"
                      ? "text_success"
                      : "text_error"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
