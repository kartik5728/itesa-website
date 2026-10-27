"use client"

import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap/gsap'
import { navLinks } from "@/constants/constants"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button'
import { Menu, X, ShieldCheck } from "lucide-react";


const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = usePathname();

	const isActive = (href: string) => {
		if (href === "/") {
			return location === "/";
		}

		console.log(location);
		return location.startsWith(`/${href}`);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	/* =========================================
	   CLOSE MOBILE MENU ON ROUTE CHANGE
	   ========================================= */

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location]);


	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: 'nav',
				start: 'bottom top',
			}
		});

		navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
			backgroundColor: '#00000050',
			//  backgroundFilter: 'blur(10px)',
			duration: 1,
			ease: 'power1.inOut'
		});
	});



	return (
		<nav
			className={`
        fixed
        left-0
        right-0
        top-0
        z-50

        transition-all
        duration-500

        ${isScrolled
					? "border-b border-cyan-400/10 bg-[#030508]/90 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
					: "border-b border-white/[0.04] bg-[#030508]/55 backdrop-blur-md"
				}
      `}
		>
			{/* =====================================
          TOP CYAN LINE
          ===================================== */}

			<div
				className={`
          absolute
          left-0
          right-0
          top-0
          h-px

          bg-cyan-400/50

          transition-opacity
          duration-500

          ${isScrolled ? "opacity-100" : "opacity-40"}
        `}
			/>

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div
					className={`
            flex
            items-center
            justify-between

            transition-all
            duration-500

            ${isScrolled ? "h-16" : "h-20"}
          `}
				>
					{/* =================================
              LOGO
              ================================= */}

					<Link
						href="/"
						className="
              group
              flex
              items-center
              gap-3
            "
					>
						<div
							className="
                relative
                flex
                items-center
                justify-center
                shrink-0
              "
						>
							{/* NEW ITESA LOGO */}

							<img
								src="/images/itesa-logo.png"
								alt="ITESA Logo"
								className="
                  h-10
                  sm:h-11
                  md:h-12

                  w-auto
                  max-w-[180px]

                  object-contain

                  transition-all
                  duration-300

                  group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.45)]
                "
							/>
						</div>

						{/* SYSTEM STATUS */}

						<div
							className="
                hidden

                border-l
                border-white/10

                pl-3

                sm:block
              "
						>
							<div
								className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/40
                "
							>
								ITESA // CORE
							</div>

							<div
								className="
                  mt-0.5

                  flex
                  items-center
                  gap-1.5

                  font-mono
                  text-[8px]
                  uppercase
                  tracking-wider

                  text-emerald-400/70
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

								SYSTEM ONLINE
							</div>
						</div>
					</Link>

					{/* =================================
              DESKTOP NAVIGATION
              ================================= */}

					<div className="hidden md:flex md:items-center">
						<div
							className="
                flex
                items-center
                gap-1

                rounded-lg

                border
                border-white/[0.06]

                bg-white/[0.02]

                p-1
              "
						>
							{navLinks.map((link) => {
								const active = isActive(link.href);

								return (
									<Link
										key={link.title}
										href={link.href}
										className={`
                      group
                      relative

                      rounded-md

                      px-4
                      py-2.5

                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.12em]

                      transition-all
                      duration-300

                      ${active
												? "bg-cyan-400/[0.08] text-cyan-300"
												: "text-white/45 hover:bg-white/[0.04] hover:text-white/90"
											}
                    `}
									>
										{link.title}

										{/* ACTIVE INDICATOR */}

										<span
											className={`
                        absolute

                        bottom-0.5
                        left-1/2

                        h-px

                        -translate-x-1/2

                        bg-cyan-400

                        shadow-[0_0_8px_rgba(34,211,238,0.7)]

                        transition-all
                        duration-300

                        ${active
													? "w-5 opacity-100"
													: "w-0 opacity-0 group-hover:w-3 group-hover:opacity-70"
												}
                      `}
										/>
									</Link>
								);
							})}
						</div>
					</div>

					{/* =================================
              DESKTOP AUTH
              ================================= */}



					{/* =================================
              MOBILE MENU BUTTON
              ================================= */}

					<div className="md:hidden">
						<Button
							variant="ghost"
							size="sm"
							onClick={() =>
								setIsMobileMenuOpen((prev) => !prev)
							}
							className="
                h-10
                w-10

                rounded-md

                border
                border-white/[0.08]

                bg-white/[0.03]

                p-0

                text-white/70

                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.05]
                hover:text-cyan-300
              "
							aria-label={
								isMobileMenuOpen
									? "Close navigation menu"
									: "Open navigation menu"
							}
						>
							{isMobileMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>

				{/* =====================================
            MOBILE MENU
            ===================================== */}

				<div
					className={`
            overflow-hidden

            transition-all
            duration-500

            md:hidden

            ${isMobileMenuOpen
							? "max-h-[500px] pb-4 opacity-100"
							: "max-h-0 opacity-0"
						}
          `}
				>
					<div
						className="
              rounded-xl

              border
              border-white/[0.08]

              bg-[#080b10]/95

              p-3

              shadow-[0_20px_50px_rgba(0,0,0,0.4)]

              backdrop-blur-xl
            "
					>
						{/* MOBILE SYSTEM HEADER */}

						<div
							className="
                mb-2

                flex
                items-center
                justify-between

                border-b
                border-white/[0.06]

                px-3
                pb-3
              "
						>
							<span
								className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/30
                "
							>
								NAVIGATION_MODULE
							</span>

							<span
								className="
                  flex
                  items-center
                  gap-1.5

                  font-mono
                  text-[8px]
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
                  "
								/>

								ONLINE
							</span>
						</div>

						{/* MOBILE LINKS */}

						<div className="space-y-1">
							{navLinks.map((link) => {
								const active = isActive(link.href);

								return (
									<Link
										key={link.title}
										href={link.href}
										onClick={() =>
											setIsMobileMenuOpen(false)
										}
										className={`
                      flex
                      items-center
                      justify-between

                      rounded-md

                      px-3
                      py-3

                      font-mono
                      text-xs
                      uppercase
                      tracking-wider

                      transition-all
                      duration-300

                      ${active
												? "bg-cyan-400/[0.08] text-cyan-300"
												: "text-white/50 hover:bg-white/[0.04] hover:text-white"
											}
                    `}
									>
										<span>{link.title}</span>

										{active && (
											<span
												className="
                          h-1.5
                          w-1.5

                          rounded-full

                          bg-cyan-400

                          shadow-[0_0_8px_rgba(34,211,238,0.8)]
                        "
											/>
										)}
									</Link>
								);
							})}
						</div>

						{/* MOBILE AUTH */}

						{/* <div
							className="
                mt-3

                border-t
                border-white/[0.06]

                pt-3
              "
						>
							{(
								<div className="space-y-2">
									<Link
										href="/admin"
										onClick={() =>
											setIsMobileMenuOpen(false)
										}
									>
										<Button
											variant="outline"
											className="
                        w-full
                        justify-center

                        border-cyan-400/20

                        bg-cyan-400/[0.03]

                        font-mono
                        text-[10px]
                        uppercase
                        tracking-wider

                        text-cyan-300

                        hover:border-cyan-400/40
                        hover:bg-cyan-400/[0.08]
                      "
										>
											<ShieldCheck className="mr-2 h-4 w-4" />

											Admin Dashboard
										</Button>
									</Link>

									<Button
										variant="ghost"
										// onClick={handleSignOut}
										className="
                      w-full

                      font-mono
                      text-[10px]
                      uppercase
                      tracking-wider

                      text-white/40

                      hover:bg-white/[0.04]
                      hover:text-white
                    "
									>
										Sign Out
									</Button>
								</div>
							) }
						</div> */}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar