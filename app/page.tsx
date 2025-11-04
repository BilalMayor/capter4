// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/fonts/manager/dashboard");

  return null; }
