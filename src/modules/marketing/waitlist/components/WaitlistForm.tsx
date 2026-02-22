"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import type { FC } from "react";
import type { WaitlistFormState } from "../types/waitlist.types";

export const WaitlistForm: FC = () => {
  const [state, setState] = useState<WaitlistFormState>({ email: "", status: "idle" });
  const [referralPosition, setReferralPosition] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.email.trim()) return;
    setState((s) => ({ ...s, status: "loading" }));
    try {
      // Simulate API call – replace with real endpoint
      await new Promise((r) => setTimeout(r, 800));
      const position = 348 + Math.floor(Math.random() * 30);
      setReferralPosition(position);
      setState({ email: "", status: "success", message: "You're on the list! We'll be in touch." });
    } catch {
      setState((s) => ({ ...s, status: "error", message: "Something went wrong. Try again." }));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto min-w-0">
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          placeholder="you@yourpg.com"
          value={state.email}
          onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
          disabled={state.status === "loading"}
          className="flex-1 min-w-0 w-full px-4 py-3 min-h-[44px] rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base bg-white text-slate-900"
          required
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={state.status === "loading"}
          className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-70 transition-all flex items-center justify-center gap-2"
        >
          {state.status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden /> : "Join Founding Operators"}
        </button>
      </motion.form>
      {state.status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
        >
          <p className="flex items-center gap-2 text-green-400 text-sm font-medium">
            <CheckCircle className="w-4 h-4 flex-shrink-0" /> {state.message}
          </p>
          {referralPosition != null && (
            <p className="text-slate-400 text-xs mt-2">Your position: #{referralPosition.toLocaleString()} — share your link to move up.</p>
          )}
        </motion.div>
      )}
      {state.status === "error" && (
        <p className="flex items-center gap-2 text-red-400 text-sm mt-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" /> {state.message}
        </p>
      )}
    </div>
  );
};
