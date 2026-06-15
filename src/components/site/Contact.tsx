import { FormEvent, useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  location: z.string().trim().min(2, "Location is required").max(80),
  type: z.string().trim().min(2).max(60),
  message: z.string().trim().max(800),
});

export function Contact() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      location: fd.get("location"),
      type: fd.get("type"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setErr(null);
    setSent(true);
  };

  return (
    <section id="contact" className="flow-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="text-xs tracking-[0.25em] text-aqua uppercase">Contact</div>
            <h2 className="mt-3 text-4xl font-medium sm:text-5xl">
              Let&rsquo;s build your <span className="text-gradient italic">aquarium</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your space. We&rsquo;ll respond within one business day with a free
              consultation.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+919566002857"
                className="bg-white border border-slate-200 flex items-center gap-4 rounded-2xl p-4 transition-all hover:shadow-md"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#E0F7FA] text-[#00BCD4]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Call</div>
                  <div className="font-bold text-[#0B1E36]">095660 02857</div>
                </div>
              </a>
              <a
                href="https://wa.me/919566002857"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-slate-200 flex items-center gap-4 rounded-2xl p-4 transition-all hover:shadow-md"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-green-50 text-green-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">WhatsApp</div>
                  <div className="font-bold text-[#0B1E36]">Chat with our studio</div>
                </div>
              </a>
              <div className="bg-white border border-slate-200 flex items-center gap-4 rounded-2xl p-4">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-red-50 text-red-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Studio</div>
                  <div className="font-bold text-[#0B1E36] text-sm sm:text-base leading-snug">
                    No.8/112, Anna Salai, Satya Nagar,<br/>Kovilambakkam, Chennai 600129
                  </div>
                </div>
              </div>
              <div className="bg-white border border-slate-200 flex items-center gap-4 rounded-2xl p-4">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Email</div>
                  <div className="font-bold text-[#0B1E36]">hello@saiaquatics.in</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-9 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Phone" name="phone" placeholder="+91 ..." />
              <Field label="Location" name="location" placeholder="City / Area" />
              <Field label="Project Type" name="type" placeholder="Home / Office / Commercial" />
              <div className="sm:col-span-2">
                <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={800}
                  placeholder="Tell us about your space and vision..."
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#0B1E36] outline-none transition-colors focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4]"
                />
              </div>
            </div>

            {err && (
              <div className="mt-4 rounded-xl bg-destructive/15 px-4 py-2 text-sm text-destructive-foreground">
                {err}
              </div>
            )}
            {sent && (
              <div className="mt-4 rounded-xl bg-aqua/15 px-4 py-2 text-sm text-aqua">
                Thank you — we&rsquo;ll be in touch shortly.
              </div>
            )}

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aqua to-cyan-glow px-6 py-3.5 text-sm font-semibold text-ocean-deep shadow-[0_10px_40px_-10px_var(--aqua)] transition-transform hover:scale-[1.01] sm:w-auto"
            >
              Send Enquiry
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm relative w-full pt-[100%] sm:pt-[50%] md:pt-[40%]">
          <iframe
            title="Studio location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4779395771143!2d80.18362367507595!3d12.941240087371359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fdf9bb65d65%3A0x6ba9bb478c040426!2ssai%20aquatics!5e0!3m2!1sen!2sin!4v1781533271192!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        maxLength={120}
        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#0B1E36] outline-none transition-colors focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4]"
      />
    </div>
  );
}
