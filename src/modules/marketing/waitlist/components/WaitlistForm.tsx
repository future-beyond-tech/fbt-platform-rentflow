"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import type { FC } from "react";
import type { WaitlistFormState } from "../types/waitlist.types";

export const WaitlistForm: FC = () => {
  const [state, setState] = useState<WaitlistFormState>({ email: "", status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.email.trim()) return;
    setState((s) => ({ ...s, status: "loading" }));
    try {
      // Simulate API call – replace with real endpoint
      await new Promise((r) => setTimeout(r, 800));
      setState({ email: "", status: "success", message: "You're on the list! We'll be in touch." });
    } catch {
      setState((s) => ({ ...s, status: "error", message: "Something went wrong. Try again." }));
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto min-w-0"
    >
      <input
        type="email"
        placeholder="you@yourpg.com"
        value={state.email}
        onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
        disabled={state.status === "loading"}
        className="flex-1 min-w-0 w-full px-4 py-3 min-h-[44px] rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base"
        required
      />
      <button
        type="submit"
        disabled={state.status === "loading"}
        className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-70 transition-all flex items-center justify-center gap-2"
      >
        {state.status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Join Waitlist"}
      </button>
      {state.status === "success" && (
        <p className="flex items-center gap-2 text-green-600 text-sm col-span-full">
          <CheckCircle className="w-4 h-4" /> {state.message}
        </p>
      )}
      {state.status === "error" && (
        <p className="flex items-center gap-2 text-red-600 text-sm col-span-full">
          <AlertCircle className="w-4 h-4" /> {state.message}
        </p>
      )}
    </motion.form>
  );
};
