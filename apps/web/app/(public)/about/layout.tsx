import SiteBackground from "./components/SiteBackground";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteBackground />
      <main className="relative z-10">{children}</main>
    </>
  );
}
