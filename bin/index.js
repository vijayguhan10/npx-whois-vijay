#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import gradient from "gradient-string";
import ora from "ora";

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

console.clear();

/* =========================
   SOFT BOOT
========================= */

const boot = ora({
  text: chalk.gray("Initializing identity layer"),
  spinner: "line"
}).start();

await sleep(1200);
boot.text = chalk.gray("Aligning distributed systems profile");
await sleep(900);
boot.succeed(chalk.gray("Ready\n"));

/* =========================
   SIGNATURE HEADER
========================= */

const name = figlet.textSync("VIJAY", {
  font: "ANSI Shadow",
  horizontalLayout: "fitted"
});

console.log(gradient.mind(name));

console.log(
  chalk.hex("#C9A24D").bold("Backend & Systems Engineering\n") +
  chalk.gray(
    "Designing reliable, observable, and scalable backend systems\n" +
    "for real-world production environments.\n"
  )
);

await sleep(600);

/* =========================
   EXECUTIVE SUMMARY
========================= */

console.log(
  boxen(
    chalk.hex("#C9A24D").bold("DISTRIBUTED SYSTEMS ENGINEER\n\n") +
    chalk.white(
      "I build backend systems with a focus on longevity, correctness,\n" +
      "and graceful failure under pressure.\n\n" +
      "My work centers around machine-to-machine communication,\n" +
      "event-driven architectures, and production reliability."
    ),
    {
      padding: 1,
      borderStyle: "round",
      borderColor: "yellow",
      margin: 1
    }
  )
);

await sleep(700);

/* =========================
   CAPABILITY COMPOSITION
========================= */

console.log(
  boxen(
    chalk.bold.hex("#6FA3A8")("CORE CAPABILITIES\n\n") +
    chalk.white(
      "• Distributed system design\n" +
      "• Event-driven messaging\n" +
      "• Failure handling & recovery\n" +
      "• Observability & diagnostics\n" +
      "• System design trade-offs\n\n"
    ) +
    chalk.bold.hex("#8FA87F")("ARCHITECTURE\n\n") +
    chalk.white(
      "• API gateways & service boundaries\n" +
      "• Load balancing & auto-scaling\n" +
      "• Kafka, RabbitMQ, async workflows\n" +
      "• Circuit breakers & backpressure\n\n"
    ) +
    chalk.bold.hex("#B89B5E")("TECH STACK\n\n") +
    chalk.white(
      "• Node.js, TypeScript, NestJS\n" +
      "• PostgreSQL, MongoDB, Redis\n" +
      "• Docker, CI/CD pipelines\n" +
      "• AWS (ECS, EC2, RDS, WAF)"
    ),
    {
      padding: 1,
      borderStyle: "round",
      borderColor: "cyan",
      margin: 1
    }
  )
);

await sleep(700);

/* =========================
   SYSTEM SIGNATURE
========================= */

console.log(
  boxen(
    chalk.bold("SYSTEM FLOW\n\n") +
    chalk.bgHex("#3A3A3A").white(" API-GATEWAY ") +
    chalk.gray("  →  ") +
    chalk.bgHex("#2E5EAA").white(" SERVICES ") +
    chalk.gray("  →  ") +
    chalk.bgHex("#2E7D32").white(" EVENT BUS ") +
    chalk.gray("  →  ") +
    chalk.bgHex("#8D6E63").white(" WORKERS ") +
    chalk.gray("  →  ") +
    chalk.bgHex("#455A64").white(" CACHE "),
    {
      padding: 1,
      borderStyle: "round",
      borderColor: "white",
      margin: 1
    }
  )
);

await sleep(600);

/* =========================
   SIGNAL STATUS
========================= */

const signals = [
  chalk.bgHex("#2E7D32").white(" STABLE "),
  chalk.bgHex("#0277BD").white(" OBSERVABLE "),
  chalk.bgHex("#6A1B9A").white(" SCALABLE "),
  chalk.bgHex("#F9A825").black(" RESILIENT ")
].join("  ");

console.log("\n  " + signals + "\n");

/* =========================
   CONTACT
========================= */

console.log(
  boxen(
    chalk.bold("CONTACT\n\n") +
    chalk.white("Email: ") + chalk.hex("#C9A24D")("vijayguhan10@gmail.com") + "\n" +
    chalk.white("Location: ") + chalk.gray("Salem, Tamil Nadu, India\n\n") +
    chalk.white("Phone: ") + chalk.gray("8438434868\n\n") +

    chalk.bold("LINKS\n\n") +
    chalk.white("LinkedIn: ") + chalk.gray("linkedin.com/in/vijay-guhan-728299283") + "\n" +
    chalk.white("LeetCode: ") + chalk.gray("leetcode.com/u/vijayguhan12\n\n") +

    chalk.bold("SELECTED WORK\n\n") +
    chalk.gray("• revozen-partner.vercel.app — Partner Platform\n") +
    chalk.gray("• acs-lead.vercel.app — Lead Management System"),
    {
      padding: 1,
      borderStyle: "round",
      borderColor: "yellow",
      margin: 1
    }
  )
);

/* =========================
   CLOSING MARK
========================= */

console.log(
  chalk.hex("#C9A24D").bold(
    "\nReliable  •  Observable  •  Scalable  •  Resilient\n"
  )
);
