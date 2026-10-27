"use client"
import { useState } from "react";
import Link from "next/link";
// import { supabase } from "@/integrations/supabase/client";

import {
  Mail,
  MapPin,
  Phone,
//   Github,
//   Instagram,
//   Linkedin,
  Loader2,
  CheckCircle,
  ArrowUpRight,
  Terminal,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const footerLinks = [
    { name: "About Us", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    {
      name: "Gallery",
      href: "https://www.instagram.com/itesa.dyp/",
      external: true,
    },
    {
      name: "Resources",
      href: "https://www.instagram.com/itesa.dyp/",
      external: true,
    },
  ];

  const handleSubscribe = async (
    event: React.SubmitEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // if (!email) {
    //   setMessage("Please enter your email address.");
    //   setIsError(true);
    //   return;
    // }

    // setLoading(true);
    // setMessage("");
    // setIsError(false);

    // try {
    //   const { error } = await supabase
    //     .from("subscribers")
    //     .insert({ email });

    //   if (error) {
    //     if (error.code === "23505") {
    //       throw new Error("This email is already subscribed.");
    //     }

    //     throw error;
    //   }

    //   setMessage("Thank you for subscribing!");
    //   setEmail("");
    // } catch (error: any) {
    //   setMessage(
    //     error.message || "An error occurred. Please try again."
    //   );
    //   setIsError(true);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.08]
        bg-[#020406]
        pt-20
        pb-8
      "
    >
      {/* =========================================
          BACKGROUND ATMOSPHERE
          ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.07),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(16,185,129,0.04),transparent_25%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/50
          to-transparent
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* =========================================
            NEWSLETTER / TERMINAL
            ========================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-[#080b10]/80
            p-7
            backdrop-blur-md
            sm:p-10
          "
        >
          {/* Terminal header */}

          <div
            className="
              mb-8
              flex
              items-center
              justify-between
              border-b
              border-white/[0.06]
              pb-4
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                font-mono
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/30
                sm:text-[10px]
              "
            >
              <Terminal className="h-4 w-4 text-cyan-400/70" />

              ITESA_NOTIFICATION_SYSTEM
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[9px]
                uppercase
                tracking-wider
                text-emerald-400/60
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_7px_rgba(52,211,153,0.8)]
                "
              />

              ONLINE
            </div>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            <div>
              <div
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400/60
                "
              >
                // SUBSCRIBE_PROTOCOL
              </div>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                Stay{" "}
                <span className="text-cyan-400">
                  Connected
                </span>
              </h3>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-relaxed
                  text-white/40
                  sm:text-base
                "
              >
                Get updates about upcoming ITESA events,
                workshops, competitions and opportunities.
              </p>
            </div>

            {/* Subscribe */}

            <form
              onSubmit={handleSubscribe}
              className="
                flex
                w-full
                flex-col
                gap-2
                sm:flex-row
                lg:w-auto
              "
            >
              <input
                type="email"
                placeholder="enter.email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="
                  h-11
                  min-w-0
                  rounded-md
                  border
                  border-white/10
                  bg-black/30
                  px-4
                  font-mono
                  text-xs
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-all
                  duration-300
                  focus:border-cyan-400/40
                  focus:bg-cyan-400/[0.03]
                  sm:w-64
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-cyan-400/25
                  bg-cyan-400/[0.06]
                  px-5
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/50
                  hover:bg-cyan-400/[0.1]
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Response */}

          {message && (
            <div
              className={`
                mt-5
                flex
                items-center
                gap-2
                font-mono
                text-xs
                ${
                  isError
                    ? "text-red-400"
                    : "text-emerald-400"
                }
              `}
            >
              {!isError && (
                <CheckCircle className="h-4 w-4" />
              )}

              <span>
                {isError ? "ERROR // " : "SUCCESS // "}
                {message}
              </span>
            </div>
          )}
        </div>

        {/* =========================================
            MAIN FOOTER
            ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            border-b
            border-white/[0.06]
            py-14
            md:grid-cols-3
          "
        >

          {/* =========================================
              CLUB INFO
              ========================================= */}

          <div>
            <Link
              href="/"
              className="inline-block group"
            >
              {/* NEW ITESA LOGO */}

              <img
                src="/images/itesa-logo.png"
                alt="ITESA Logo"
                className="
                  h-12
                  sm:h-14
                  w-auto
                  max-w-[210px]
                  object-contain
                  transition-all
                  duration-300
                  group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.4)]
                "
              />
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-relaxed
                text-white/35
              "
            >
              Innovation, Technology, and Excellence
              Students Association. Empowering students
              through technology, creativity and innovation.
            </p>

            {/* Social links */}

            <div className="mt-6 flex items-center gap-2">

              {/* GitHub */}

              <a
                href="#"
                aria-label="GitHub"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  text-white/35
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.05]
                  hover:text-cyan-300
                "
              >
                {/* <Github className="h-4 w-4" /> */}
              </a>

              {/* Instagram */}

              <a
                href="https://www.instagram.com/itesa.dyp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  text-white/35
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.05]
                  hover:text-cyan-300
                "
              >
                {/* <Instagram className="h-4 w-4" /> */}
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  text-white/35
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.05]
                  hover:text-cyan-300
                "
              >
                {/* <Linkedin className="h-4 w-4" /> */}
              </a>

            </div>
          </div>

          {/* =========================================
              QUICK LINKS
              ========================================= */}

          <div>
            <div
              className="
                mb-5
                flex
                items-center
                gap-2
                font-mono
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              <span className="text-cyan-400">
                //
              </span>

              NAVIGATION
            </div>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-white/40
                        transition-colors
                        duration-200
                        hover:text-cyan-300
                      "
                    >
                      <span>{link.name}</span>

                      <ArrowUpRight
                        className="
                          h-3
                          w-3
                          text-white/20
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-cyan-400
                        "
                      />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-white/40
                        transition-colors
                        duration-200
                        hover:text-cyan-300
                      "
                    >
                      <span>{link.name}</span>

                      <ArrowUpRight
                        className="
                          h-3
                          w-3
                          text-white/20
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-cyan-400
                        "
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================
              CONTACT
              ========================================= */}

          <div>
            <div
              className="
                mb-5
                flex
                items-center
                gap-2
                font-mono
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              <span className="text-emerald-400">
                //
              </span>

              CONTACT_NODE
            </div>

            <div className="space-y-5">

              {/* Address */}

              <div className="flex items-start gap-3">
                <MapPin
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    text-cyan-400/70
                  "
                />

                <span
                  className="
                    text-sm
                    leading-relaxed
                    text-white/40
                  "
                >
                  DYP Engineering College
                  <br />
                  IT Department, Block A
                  <br />
                  Akurdi, Pune, Maharashtra
                </span>
              </div>

              {/* Phone */}

              <div className="flex items-center gap-3">
                <Phone
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-cyan-400/70
                  "
                />

                <span className="text-sm text-white/40">
                  +91 98345 67890
                </span>
              </div>

              {/* Email */}

              <div className="flex items-center gap-3">
                <Mail
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-cyan-400/70
                  "
                />

                <span className="text-sm text-white/40">
                  itesa31@gmail.com
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================
            SYSTEM FOOTER
            ========================================= */}

        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-4
            pt-7
            sm:flex-row
            sm:items-center
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-[9px]
              uppercase
              tracking-wider
              text-white/20
              sm:text-[10px]
            "
          >
            <ShieldCheck
              className="
                h-3.5
                w-3.5
                text-emerald-400/50
              "
            />

            SYSTEM_SECURE // ITESA_CORE
          </div>

          <p
            className="
              font-mono
              text-[9px]
              text-white/20
              sm:text-[10px]
            "
          >
            © {new Date().getFullYear()} ITESA
            {" // "}
            ALL RIGHTS RESERVED
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;