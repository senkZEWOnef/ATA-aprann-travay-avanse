// src/app/page.tsx
import { redirect } from "next/navigation";

export default function RootRedirect() {
  // Send users to the Kreyòl version by default
  redirect("/ht");
}
