"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/[\d\s\-().+]{10,}/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  serviceType: z.string().min(1, "Select a service"),
  propertySize: z.string().min(1, "Select property size"),
  budget: z.string().min(1, "Select a budget range"),
  contactMethod: z.string().min(1, "Select how we should reach you"),
  message: z.string().optional(),
});

export type QuoteValues = z.infer<typeof quoteSchema>;

const fieldClass = "min-h-12 md:min-h-10 text-base md:text-sm";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-destructive mt-1 text-sm">{message}</p>;
}

export function QuoteForm({
  className,
  heading = "Get your free quote",
  inDialog = false,
  centerHeading = false,
}: {
  className?: string;
  heading?: string;
  inDialog?: boolean;
  centerHeading?: boolean;
}) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      serviceType: "",
      propertySize: "",
      budget: "",
      contactMethod: "",
      message: "",
    },
  });

  const onSubmit = async (data: QuoteValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.info("Quote demo submit", data);
  };

  if (isSubmitSuccessful) {
    return (
      <Card
        className={cn(
          "border-limestone-secondary/30 bg-card shadow-lg",
          className
        )}
      >
        <CardContent className="pt-8 pb-8 text-center">
          <p className="text-limestone-primary font-semibold text-lg">
            Thank you! We&apos;ll be in touch shortly.
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            This is a demo — submissions are not sent yet.
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-6 min-h-11"
            onClick={() => reset()}
          >
            Submit another request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "border-limestone-secondary/25 shadow-lg",
        inDialog && "border-0 shadow-none sm:border",
        className
      )}
    >
      <CardHeader
        className={cn(
          inDialog ? "pb-2 pt-0" : "pb-2",
          centerHeading &&
            "items-center gap-2 px-3 text-center sm:px-4 md:px-5"
        )}
      >
        <CardTitle
          className={cn(
            "text-limestone-primary font-semibold tracking-tight",
            inDialog ? "text-xl" : "text-2xl",
            centerHeading &&
              "w-full max-w-none text-xl font-bold leading-[1.15] tracking-tight text-pretty sm:text-2xl md:text-3xl lg:text-4xl md:leading-[1.08]"
          )}
        >
          {centerHeading ? (
            <span
              className="inline-block w-full bg-gradient-to-br from-limestone-primary via-[#356019] to-limestone-secondary bg-clip-text py-0.5 font-extrabold text-transparent drop-shadow-[0_2px_10px_rgba(45,80,22,0.22)]"
            >
              {heading}
            </span>
          ) : (
            heading
          )}
        </CardTitle>
        <p
          className={cn(
            "text-muted-foreground text-sm",
            centerHeading &&
              "mt-1 w-full max-w-none text-pretty text-base leading-relaxed"
          )}
        >
          Tell us about your project — we&apos;ll follow up within one business
          day.
        </p>
      </CardHeader>
      <CardContent className="px-4 pb-5 pt-0 sm:px-6 sm:pb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5 sm:gap-4">
          <div>
            <Label htmlFor={`name-${inDialog}`}>Name *</Label>
            <Input
              id={`name-${inDialog}`}
              className={cn(fieldClass, "mt-1.5")}
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            <FieldError message={errors.name?.message} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor={`phone-${inDialog}`}>Phone *</Label>
              <Input
                id={`phone-${inDialog}`}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className={cn(fieldClass, "mt-1.5")}
                aria-invalid={!!errors.phone}
                {...register("phone")}
              />
              <FieldError message={errors.phone?.message} />
            </div>
            <div>
              <Label htmlFor={`email-${inDialog}`}>Email *</Label>
              <Input
                id={`email-${inDialog}`}
                type="email"
                autoComplete="email"
                className={cn(fieldClass, "mt-1.5")}
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              <FieldError message={errors.email?.message} />
            </div>
          </div>

          <div>
            <Label id={`service-label-${inDialog}`}>Service type *</Label>
            <Controller
              name="serviceType"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value ? field.value : undefined}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    className={cn(fieldClass, "mt-1.5 w-full")}
                    aria-labelledby={`service-label-${inDialog}`}
                    aria-invalid={!!errors.serviceType}
                  >
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landscaping">Landscaping</SelectItem>
                    <SelectItem value="lawn">Lawn Care</SelectItem>
                    <SelectItem value="snow">Snow Removal</SelectItem>
                    <SelectItem value="hardscape">Hardscaping</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.serviceType?.message} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label id={`size-label-${inDialog}`}>Property size *</Label>
              <Controller
                name="propertySize"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value ? field.value : undefined}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      className={cn(fieldClass, "mt-1.5 w-full")}
                      aria-labelledby={`size-label-${inDialog}`}
                    >
                      <SelectValue placeholder="Lot size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (&lt; ¼ acre)</SelectItem>
                      <SelectItem value="medium">Medium (¼–½ acre)</SelectItem>
                      <SelectItem value="large">Large (&gt; ½ acre)</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError message={errors.propertySize?.message} />
            </div>
            <div>
              <Label id={`budget-label-${inDialog}`}>Project budget *</Label>
              <Controller
                name="budget"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value ? field.value : undefined}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      className={cn(fieldClass, "mt-1.5 w-full")}
                      aria-labelledby={`budget-label-${inDialog}`}
                    >
                      <SelectValue placeholder="Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under5">&lt; $5k</SelectItem>
                      <SelectItem value="5-10">$5k – $10k</SelectItem>
                      <SelectItem value="10-25">$10k – $25k</SelectItem>
                      <SelectItem value="25plus">$25k+</SelectItem>
                      <SelectItem value="unsure">Not sure</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError message={errors.budget?.message} />
            </div>
          </div>

          <div>
            <Label id={`contact-label-${inDialog}`}>
              Preferred contact *
            </Label>
            <Controller
              name="contactMethod"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value ? field.value : undefined}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    className={cn(fieldClass, "mt-1.5 w-full")}
                    aria-labelledby={`contact-label-${inDialog}`}
                  >
                    <SelectValue placeholder="How should we reach you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="text">Text</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.contactMethod?.message} />
          </div>

          <div>
            <Label htmlFor={`message-${inDialog}`}>
              Message{" "}
              <span className="text-muted-foreground font-normal">
                (optional)
              </span>
            </Label>
            <Textarea
              id={`message-${inDialog}`}
              className="mt-1.5 min-h-[100px] text-base md:text-sm"
              {...register("message")}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="bg-limestone-primary hover:bg-limestone-primary/90 min-h-12 w-full text-base font-semibold"
          >
            Get my free quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
