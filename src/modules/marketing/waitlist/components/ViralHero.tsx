"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountdownTimer } from "./CountdownTimer";
import { WaitlistForm } from "./WaitlistForm";
import { LAUNCH_DATE } from "../data/waitlist.data";
import type { FC } from "react";

export const ViralHero: FC = () => {
  return (
    <section className="relative min-h-[100dvh] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full min-w-0">
        <CountdownTimer targetDate={LAUNCH_DATE} />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 sm:mt-6 mb-3 sm:mb-4 leading-tight px-1"
        >
          India&apos;s First{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Usage-Based
          </span>{" "}
          PG Management Platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8"
        >
          Join the waitlist. Get 50% lifetime discount as a founding member.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <WaitlistForm />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-500 text-sm mt-4"
        >
          No credit card. No spam. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
};
