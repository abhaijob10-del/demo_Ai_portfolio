"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import type { MatrixRow } from "@/lib/data";

const columns = [
  { key: "loan",     label: "Loan Approval",    short: "Loan" },
  { key: "netflix",  label: "Netflix Audit",     short: "Netflix" },
  { key: "criminal", label: "Criminal Justice",  short: "Justice" },
  { key: "uber",     label: "Uber AV Accident",  short: "Uber AV" },
  { key: "medical",  label: "Medical Diagnosis", short: "Medical" },
];

interface EthicsMatrixProps {
  data: MatrixRow[];
}

export default function EthicsMatrix({ data }: EthicsMatrixProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="overflow-x-auto"
    >
      <table
        className="w-full border-collapse"
        style={{ minWidth: "640px" }}
        aria-label="Cross-case ethical principles matrix"
      >
        <thead>
          <tr>
            <th
              className="text-left py-3 pr-6 label-gray"
              style={{ borderBottom: "1px solid var(--border)", minWidth: "140px" }}
            >
              Principle
            </th>
            {columns.map((col) => (
              <th
                key={col.key}
                className="py-3 px-4 label-gray text-center"
                style={{ borderBottom: "1px solid var(--border)", fontSize: "0.625rem" }}
              >
                <span className="hidden md:inline">{col.label}</span>
                <span className="md:hidden">{col.short}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <motion.tr
              key={row.principle}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <td
                className="py-3 pr-6 font-medium"
                style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}
              >
                {row.principle}
              </td>
              {columns.map((col) => {
                const present = row[col.key as keyof MatrixRow] as boolean;
                return (
                  <td key={col.key} className="py-3 px-4 text-center">
                    {present ? (
                      <CheckCircle2
                        size={15}
                        style={{ color: "var(--accent)", margin: "0 auto" }}
                        aria-label="Present"
                      />
                    ) : (
                      <span
                        style={{
                          display: "block",
                          width: "10px",
                          height: "1px",
                          background: "var(--border-2)",
                          margin: "0 auto",
                        }}
                        aria-label="Not central"
                      />
                    )}
                  </td>
                );
              })}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
