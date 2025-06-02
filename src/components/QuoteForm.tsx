import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  // const onSubmit = async (data: FormData) => {
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch('http://localhost:5000/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         to: 'satwikpersonal04@gmail.com', // Your business email
  //         from: data.email,
  //         subject: `New Quote Request from ${data.name}`,
  //         text: `
  //           Name: ${data.name}
  //           Email: ${data.email}
  //           Phone: ${data.phone}
  //           Company: ${data.company || 'Not provided'}
  //           Message: ${data.message || 'No additional message'}

  //           This is a new quote request from your website.
  //         `,
  //         html: `
  //           <h1>New Quote Request</h1>
  //           <p><strong>Name:</strong> ${data.name}</p>
  //           <p><strong>Email:</strong> ${data.email}</p>
  //           <p><strong>Phone:</strong> ${data.phone}</p>
  //           <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
  //           <p><strong>Message:</strong> ${data.message || 'No additional message'}</p>
  //           <p>This is a new quote request from your website.</p>
  //         `
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to send email');
  //     }

  //     // Send confirmation email to user
  //     await fetch('/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         to: data.email,
  //         from: 'satwikpersonal04@gmail.com',
  //         subject: 'Thank you for your quote request',
  //         text: `Dear ${data.name},\n\nThank you for requesting a quote from Tengoku Solutions. We have received your request and will get back to you within 24 hours.\n\nBest regards,\nThe Tengoku Solutions Team`,
  //         html: `
  //           <h1>Thank you for your quote request</h1>
  //           <p>Dear ${data.name},</p>
  //           <p>Thank you for requesting a quote from Tengoku Solutions. We have received your request and will get back to you within 24 hours.</p>
  //           <p>Best regards,<br>The Tengoku Solutions Team</p>
  //         `
  //       }),
  //     });

  //     toast({
  //       title: "Quote request submitted!",
  //       description: "We'll get back to you within 24 hours. A confirmation has been sent to your email.",
  //       variant: "default",
  //     });

  //     form.reset();
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toast({
  //       title: "Something went wrong",
  //       description: "Please try again later or contact us directly.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  try {
    const response = await fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.message
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit quote request');
    }

    toast({
      title: "Quote request submitted!",
      description: result.message || "Our team will contact you shortly.",
      variant: "default",
    });

    form.reset();  // Reset the form on success
  } catch (error) {
    console.error("Error submitting form:", error);
    toast({
      title: "Something went wrong",
      description: "Please try again later or contact us directly.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How can we help you? (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project and energy requirements..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-energy-gradient" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Get Your Free Quote"}
        </Button>
      </form>
    </Form>
  );
};

export default QuoteForm;
