"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Reference {
  id: number;
  citation: string;
  url: string;
}

interface ReferenceListProps {
  references: Reference[];
}

export default function ReferenceList({ references }: ReferenceListProps) {
  return (
    <ol className="flex flex-col gap-6" aria-label="References">
      {references.map((ref) => (
        <li
          key={ref.id}
          className="flex gap-5 group"
        >
          <span
            className="font-mono text-sm select-none flex-shrink-0 mt-0.5"
            style={{ color: "var(--text-tertiary)", minWidth: "1.5rem" }}
          >
            {ref.id}.
          </span>
          <div>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              {ref.citation}
            </p>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-1 transition-colors hover:text-[var(--text-primary)]"
              style={{ fontSize: "0.8125rem", color: "var(--accent)" }}
            >
              {ref.url}
              <ExternalLink size={11} />
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}
