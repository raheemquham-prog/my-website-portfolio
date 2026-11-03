"use client";

import { Download, FileText } from "lucide-react";
import { site } from "@/lib/site";

/**
 * CV download control.
 *
 * Set `CV_PDF_READY` to true once /public/cv/Raheem-Quham-Folahan-CV.pdf exists.
 * Until then the button offers the editable document instead of a broken link.
 */
const CV_PDF_READY = false;
const CV_DOCX = "/cv/Raheem-Quham-Folahan-CV.docx";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-elevated/60 px-5 text-sm font-medium text-ink transition-colors hover:border-cyan/50";

const wide = "w-full";

export function CvDownload() {
  return (
    <a
      href={CV_PDF_READY ? site.cvPath : CV_DOCX}
      download
      className={`${base} ${wide}`}
      aria-label={
        CV_PDF_READY
          ? "Download CV (PDF)"
          : "Download CV (Word document — PDF coming soon)"
      }
    >
      {CV_PDF_READY ? (
        <Download className="size-4 text-cyan" aria-hidden="true" />
      ) : (
        <FileText className="size-4 text-cyan" aria-hidden="true" />
      )}
      {CV_PDF_READY ? "Download CV" : "Download CV (Word)"}
    </a>
  );
}
