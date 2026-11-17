import ResumeView from "./resume-view";
import { config } from "@/data/config";

export const metadata = {
  title: `Résumé | ${config.displayName || config.author}`,
  description: `Résumé of ${config.displayName || config.author} — ${config.subtitle || "Full-Stack Engineer"}. View online or download the PDF.`,
};

export default function ResumePage() {
  return <ResumeView />;
}
