import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminHomePage from "./AdminHome";

export default async function AdminPage() {
  const supabase = await createClient();

  // Verify the logged-in user on the server
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  // Check the user's role
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (
    profileError ||
    (profile?.role !== "super_admin" &&
      profile?.role !== "admin")
  ) {
    redirect("/403");
  }

  return <AdminHomePage />;
}