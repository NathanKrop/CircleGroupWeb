"use client";

import { motion } from "framer-motion";

const stages = [
  { n: "01", label: "Learn", desc: "Life skills & digital literacy" },
  { n: "02", label: "Train", desc: "Career readiness & vocational skills" },
  { n: "03", label: "Mentor", desc: "1:1 mentorship & networks" },
  { n: "04", label: "Earn", desc: "Employment & entrepreneurship" },
];

export default function Pathway() {
  return (
    <div className="relative">
      {/* connecting ascending line, desktop */}
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
        aria-hidden="true"
      >
        <motion.path
          d="M 60 170 L 353 120 L 646 70 L 940 24"
          fill="none"
          stroke="#E8A33D"
          strokeWidth="2"
          strokeDasharray="1 12"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>

      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
        {stages.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
            style={{
              marginTop: `${(3 - i) * 0}px`,
            }}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 font-mono text-sm font-semibold"
              style={{
                borderColor: "#E8A33D",
                color: "#1B3A2B",
                background: i === stages.length - 1 ? "#E8A33D" : "transparent",
              }}
            >
              {s.n}
            </div>
            <h3 className="mt-5 font-display text-2xl text-savanna">{s.label}</h3>
            <p className="mt-1.5 text-sm text-savanna/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
