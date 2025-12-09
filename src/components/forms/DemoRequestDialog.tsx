import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client"; // Aapka supabase client
import { useToast } from "@/hooks/use-toast"; // Aapka toast hook
import { ChevronDown } from "lucide-react"; 

// Products Data Import
import { products } from "@/data/productsData";

interface DemoRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string | null;
}

export const DemoRequestDialog = ({ open, onOpenChange, productName }: DemoRequestDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    product: "",
  });

  // Jab popup open ho, product name set karein
  useEffect(() => {
    if (open) {
      setFormData((prev) => ({
        ...prev,
        product: productName || "" 
      }));
    }
  }, [open, productName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 🔥 FIX: Product Name ko Message ke saath jod rahe hain
      // Taaki database mein naya column na banana pade.
      const finalMessage = `Interested Product: ${formData.product || "General"}\n\nUser Message: ${formData.message || ""}`;

      const { error } = await supabase.from("demo_requests").insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          message: finalMessage, // ✅ Product info yahan bhej diya
        },
      ]);

      if (error) throw error;

      toast({
        title: "Demo Request Submitted!",
        description: `We'll get back to you shortly regarding ${formData.product}.`,
      });

      // Form Reset
      setFormData({ name: "", email: "", company: "", phone: "", message: "", product: "" });
      onOpenChange(false);
      
    } catch (error) {
      console.error("Error submitting demo request:", error);
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-border">
          <DialogTitle className="text-2xl font-bold text-gradient">Request a Demo</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Select a product and fill out your details. We'll schedule a personalized demo for you.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          
          {/* Product Selection Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="demo-product" className="text-sm font-semibold">Interested Product</Label>
            <div className="relative">
              <select
                id="demo-product"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="flex h-11 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
              >
                <option value="" disabled>Select a product...</option>
                {products.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 opacity-50 pointer-events-none" />
            </div>
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="demo-name" className="text-sm font-semibold">Name *</Label>
              <Input
                id="demo-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="John Doe"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-email" className="text-sm font-semibold">Email *</Label>
              <Input
                id="demo-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="john@company.com"
                className="h-11"
              />
            </div>
          </div>

          {/* Company & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="demo-company" className="text-sm font-semibold">Company</Label>
              <Input
                id="demo-company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your Company"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-phone" className="text-sm font-semibold">Phone</Label>
              <Input
                id="demo-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="h-11"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="demo-message" className="text-sm font-semibold">Message</Label>
            <Textarea
              id="demo-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              placeholder="Tell us about your needs..."
              className="resize-none"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Demo Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};