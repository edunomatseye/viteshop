import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="p-2">
      <h3>Contact Us</h3>
      <p>This is the contact page.</p>
    </div>
  );
}
