import React from 'react'
import CyberBackground from '@/components/public/CyberBackground'


import {
  Mail,
  MapPin,
  Send,
  Terminal,
  // Instagram,
  // Github,
  // Linkedin,
} from "lucide-react";

const ContactPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030508] text-white">

      {/* =================================================
          HOME PAGE BACKGROUND
          ================================================= */}

      <CyberBackground />


      {/* =================================================
          CONTENT
          ================================================= */}

      <section className="relative z-20 pt-36 pb-24 px-6">

        <div className="max-w-6xl mx-auto">


          {/* HEADER */}

          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-black/30 backdrop-blur-md font-mono text-xs text-cyan-300 mb-8">

              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

              COMMUNICATION_CHANNEL // ACTIVE

            </div>


            <div className="font-mono text-xs sm:text-sm tracking-[0.4em] uppercase text-cyan-400/70 mb-4">
              INFORMATION TECHNOLOGY
            </div>


            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
              CONTACT US
            </h1>


            <p className="max-w-2xl mx-auto mt-6 text-white/50 text-base sm:text-lg">
              Have an idea, question or collaboration in mind?
              Establish a connection with the ITESA core.
            </p>

          </div>


          {/* TERMINAL */}

          <div className="max-w-3xl mx-auto mb-14 font-mono text-xs sm:text-sm text-white/30 border-l border-cyan-400/30 pl-4">

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              establishing_secure_connection...
            </div>

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              communication_channel:{" "}
              <span className="text-emerald-400">
                READY
              </span>
            </div>

            <div>
              <span className="text-cyan-400">&gt;</span>{" "}
              response_protocol:{" "}
              <span className="text-emerald-400">
                ACTIVE
              </span>
            </div>

          </div>


          {/* MAIN */}

          <div className="grid lg:grid-cols-5 gap-8">


            {/* CONTACT DETAILS */}

            <div className="lg:col-span-2 space-y-5">


              {/* EMAIL */}

              <div className="border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-6 hover:border-cyan-400/30 transition-all">

                <div className="flex items-start gap-4">

                  <div className="p-3 rounded-lg bg-cyan-400/5 border border-cyan-400/10">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>

                    <div className="font-mono text-[10px] tracking-[0.2em] text-white/30">
                      EMAIL
                    </div>

                    <div className="mt-2 text-white/80 text-sm">
                      itesa@dypcoeakurdi.ac.in
                    </div>

                  </div>

                </div>

              </div>


              {/* LOCATION */}

              <div className="border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-6 hover:border-emerald-400/30 transition-all">

                <div className="flex items-start gap-4">

                  <div className="p-3 rounded-lg bg-emerald-400/5 border border-emerald-400/10">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>

                  <div>

                    <div className="font-mono text-[10px] tracking-[0.2em] text-white/30">
                      LOCATION
                    </div>

                    <div className="mt-2 text-white/80 text-sm leading-relaxed">
                      Dr. D. Y. Patil College of Engineering
                      <br />
                      Akurdi, Pune, Maharashtra
                    </div>

                  </div>

                </div>

              </div>


              {/* SOCIAL */}

              <div className="border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-6">

                <div className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-5">
                  SOCIAL_NETWORKS
                </div>

                <div className="flex gap-3">

                  <a
                    href="#"
                    className="p-3 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition-all"
                  >
                    {/* <Instagram className="h-4 w-4" /> */}
                  </a>

                  <a
                    href="#"
                    className="p-3 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition-all"
                  >
                    {/* <Github className="h-4 w-4" /> */}
                  </a>

                  <a
                    href="#"
                    className="p-3 rounded-lg border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition-all"
                  >
                    {/* <Linkedin className="h-4 w-4" /> */}
                  </a>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="lg:col-span-3">

              <div className="relative border border-white/10 bg-black/20 backdrop-blur-md rounded-xl p-7 sm:p-9">


                <div className="flex items-center justify-between mb-8">

                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">

                    <Terminal className="h-4 w-4" />

                    SEND_MESSAGE

                  </div>


                  <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />

                    SECURE

                  </div>

                </div>


                <form className="space-y-6">


                  {/* NAME */}

                  <div>

                    <label className="block font-mono text-[10px] tracking-[0.2em] text-white/35 mb-2">
                      IDENTIFICATION
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      className="
                        w-full
                        h-12
                        rounded-md
                        border
                        border-white/10
                        bg-black/30
                        px-4
                        text-sm
                        text-white
                        placeholder:text-white/20
                        outline-none
                        focus:border-cyan-400/50
                        transition-all
                      "
                    />

                  </div>


                  {/* EMAIL */}

                  <div>

                    <label className="block font-mono text-[10px] tracking-[0.2em] text-white/35 mb-2">
                      COMMUNICATION_ADDRESS
                    </label>

                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="
                        w-full
                        h-12
                        rounded-md
                        border
                        border-white/10
                        bg-black/30
                        px-4
                        text-sm
                        text-white
                        placeholder:text-white/20
                        outline-none
                        focus:border-cyan-400/50
                        transition-all
                      "
                    />

                  </div>


                  {/* SUBJECT */}

                  <div>

                    <label className="block font-mono text-[10px] tracking-[0.2em] text-white/35 mb-2">
                      SUBJECT
                    </label>

                    <input
                      type="text"
                      placeholder="What would you like to discuss?"
                      className="
                        w-full
                        h-12
                        rounded-md
                        border
                        border-white/10
                        bg-black/30
                        px-4
                        text-sm
                        text-white
                        placeholder:text-white/20
                        outline-none
                        focus:border-cyan-400/50
                        transition-all
                      "
                    />

                  </div>


                  {/* MESSAGE */}

                  <div>

                    <label className="block font-mono text-[10px] tracking-[0.2em] text-white/35 mb-2">
                      MESSAGE_PAYLOAD
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Enter your message..."
                      className="
                        w-full
                        rounded-md
                        border
                        border-white/10
                        bg-black/30
                        px-4
                        py-3
                        text-sm
                        text-white
                        placeholder:text-white/20
                        outline-none
                        resize-none
                        focus:border-cyan-400/50
                        transition-all
                      "
                    />

                  </div>


                  {/* SEND */}

                  <button
                    type="submit"
                    className="
                      group
                      w-full
                      h-12
                      rounded-md
                      bg-cyan-400
                      text-black
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-2
                      hover:bg-cyan-300
                      hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                      transition-all
                    "
                  >

                    TRANSMIT MESSAGE

                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />

                  </button>

                </form>

              </div>

            </div>

          </div>


          {/* FOOTER TERMINAL */}

          <div className="mt-16 flex justify-center">

            <div className="font-mono text-[10px] tracking-wider text-white/20">
              CONNECTION_SECURE // ITESA_CORE // 0x7F
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ContactPage;