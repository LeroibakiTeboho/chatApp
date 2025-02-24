// Redirect to /login when accessing the root URL
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/chat");
}
