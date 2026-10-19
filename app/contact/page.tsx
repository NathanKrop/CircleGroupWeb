import { redirect } from "next/navigation";

const contacts = [
  { label: "Email", value: "info@circlegroup.co.ke", href: "mailto:info@circlegroup.co.ke" },
  { label: "Phone / WhatsApp", value: "+254 181 094 157", href: "tel:+254181094157" },
];

const mapLocations = [
  "Nairobi, Kenya",
  "Kiambu, Kenya",
  "Narok, Kenya",
  "Meru, Kenya",
];

export default function Contact() {
  redirect("/#contact");
}
