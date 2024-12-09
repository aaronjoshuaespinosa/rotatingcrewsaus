import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone } from "lucide-react";
import { Separator } from "./ui/separator";

// Define the form schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  contactNumber: z
    .string()
    .min(1, "Contact number is required")
    .regex(/^\d+$/, "Contact number must be a valid phone number"), // Regex for numbers only
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        setError(null);
      } else {
        setSuccess(false);
        setError(
          "There was an issue sending your message. Please try again later.",
        );
      }
    } catch (error) {
      setSuccess(false);
      setError("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-md bg-white p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-y-4"
      >
        <div>
          <label htmlFor="name" className="text-bold text-blue-950">
            Full Name<span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            {...register("name")}
            className="w-full"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="flex w-full flex-col gap-x-4 gap-y-4 md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="text-bold text-blue-950">
              Email Address<span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              {...register("email")}
              className="w-full"
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="name" className="text-bold text-blue-950">
              Contact Number<span className="text-red-500">*</span>
            </label>
            <Input
              id="contactNumber"
              {...register("contactNumber")}
              className="w-full"
              placeholder="04XXXXXXXX"
            />
            {errors.contactNumber && (
              <p className="text-sm text-red-500">
                {errors.contactNumber.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="name" className="text-bold text-blue-950">
            Inquiry<span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            {...register("message")}
            className="w-full"
            placeholder="Enter your inquiry..."
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-950 text-white"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>

        {success && (
          <p className="text-center text-green-500">
            Your message has been sent successfully!
          </p>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <div className="flex w-full items-center gap-x-4 py-4">
        <div className="h-[2px] w-full bg-blue-950" />
        <p className="font-black text-blue-950"> or</p>
        <div className="h-[2px] w-full bg-blue-950" />
      </div>
      <div className="flex w-full items-center justify-center gap-10 text-blue-950">
        <div className="flex items-center gap-x-2">
          <Mail size={20} />
          <p>rotatingcrewaus@gmail.com</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Phone size={20} />
          <p>0447 818 882</p>
        </div>
      </div>
    </div>
  );
}
