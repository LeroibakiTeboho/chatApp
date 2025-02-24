// Redirect to /login when accessing the root URL
import { redirect } from "next/navigation";

const notFound = () => {
  redirect("/chat");
};

export default notFound;
