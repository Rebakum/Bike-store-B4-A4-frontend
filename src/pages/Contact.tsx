import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  //FaFacebookF,
  FaUserTie,
  FaTools,
} from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import CustomInputField from "@/components/custom-input/CustomInputField";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

export default function ContactFormPreview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Failed to send your message. Please try again.");
    }
  }

  return (
    <div className="bg-[#000000] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get in touch</h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-10">
          If you would like to find out more about how we can help you, please
          give us a call or drop us an email. We welcome your comments and
          suggestions about this website and/or any other issues you wish to
          raise.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <div className="bg-[#020303] p-8 rounded-md shadow-md space-y-4 text-sm">
            <h3 className="text-xl font-semibold mb-2">Contact information</h3>
            <p className="text-gray-300">
              If you would like to find out more about how we can help you,
              please give us a call or drop us an email.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-400" />
                +8801963213211, +8801963213212, +8801812345643
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                info@dotinternetbd.com
              </p>
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                350, Rayer Bazar East, (Lalbagh), Mohammadpur
              </p>
            </div>

            <div className="mt-6 space-y-2">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <strong>Billing enquiries:</strong> accounts@dotinternetbd.com
              </p>
              <p className="flex items-center gap-2">
                <FaTools className="text-blue-400" />
                <strong>Technical enquiries:</strong> noc@dotinternetbd.com
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <strong>New connection:</strong> sales@dotinternetbd.com
              </p>
              <p className="flex items-center gap-2">
                <FaUserTie className="text-blue-400" />
                <strong>Management:</strong> admin@dotinternetbd.com
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4 mt-6">
              <Button className="bg-blue-600 px-4 py-1">Page</Button>
              <Button className="bg-blue-600 px-4 py-1">Group</Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#ebeef5] p-8 rounded-md shadow-md">
            {/* Contact Form */}
            <Card className="mx-auto w-full md:w-96 lg:w-96">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="grid gap-4">
                      {/* Name Field */}
                      <CustomInputField
                        name="name"
                        label="Full Name"
                        placeholder="Enter Full Name"
                        type="text"
                        control={form.control}
                      />

                      {/* Email Field */}
                      <CustomInputField
                        name="email"
                        label="Email"
                        placeholder="Enter email address"
                        type="email"
                        control={form.control}
                      />

                      {/* Message Field */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="grid gap-2">
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                id="message"
                                placeholder="Your message..."
                                autoComplete="off"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
