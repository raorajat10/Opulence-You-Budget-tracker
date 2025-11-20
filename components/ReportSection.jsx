"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Wallet,
  SunMoon,
} from "lucide-react";

import { incomeData, expenseData } from "@/data/chartData";
import { defaultTransactions } from "@/data/transactionData";
import { promoCard } from "@/data/promoData";
import { summary } from "@/data/summaryData";

export default function ReportSection() {
  const [tab, setTab] = useState("income");
  const [dark, setDark] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("opulence-dark") === "true"
  );
  const [transactions, setTransactions] = useState(defaultTransactions);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("opulence-dark", dark ? "true" : "false");
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark]);

  const data = tab === "income" ? incomeData : expenseData;

  const amountClass = (amt) =>
    amt.startsWith("-") ? "text-red-500" : "text-[#5bb66e]";

  return (
    <section
      className={`py-20 ${
        dark ? "bg-[#07110f] text-white" : "bg-white text-[#152517]"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header Controls */}
        <div className="flex items-center justify-between mb-6">
          {/* Tabs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTab("income")}
              className={`px-5 py-2 rounded-full font-semibold ${
                tab === "income"
                  ? "bg-[#5bb66e] text-white shadow-lg"
                  : "bg-[#e6ece8] text-[#316959]"
              }`}
            >
              Income
            </button>

            <button
              onClick={() => setTab("expense")}
              className={`px-5 py-2 rounded-full font-semibold ${
                tab === "expense"
                  ? "bg-[#5bb66e] text-white shadow-lg"
                  : "bg-[#e6ece8] text-[#316959]"
              }`}
            >
              Expense
            </button>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#e6ece8] bg-white dark:bg-[#0f1f1a]"
          >
            <SunMoon
              size={16}
              className={dark ? "text-[#5bb66e]" : "text-[#316959]"}
            />
            <span className="text-sm">{dark ? "Dark" : "Light"}</span>
          </button>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Chart Card */}
            <div
              className={`${
                dark
                  ? "bg-[#07201c] border-[#12392f]"
                  : "bg-[#f0fdf4] border-[#e3f7e7]"
              } border rounded-3xl p-6 shadow-sm`}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p
                    className={`text-sm font-medium ${
                      dark ? "text-[#9fb8a7]" : "text-[#316959]"
                    }`}
                  >
                    Total {tab === "income" ? "Income" : "Expenses"}
                  </p>
                  <h2
                    className={`text-3xl font-extrabold ${
                      dark ? "text-white" : "text-[#152517]"
                    }`}
                  >
                    {tab === "income"
                      ? summary.incomeTotal
                      : summary.expenseTotal}
                  </h2>
                </div>

                <span
                  className={`font-bold text-lg flex items-center ${
                    tab === "income" ? "text-[#5bb66e]" : "text-red-400"
                  }`}
                >
                  {tab === "income" ? (
                    <ArrowUpRight size={20} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={20} className="mr-1" />
                  )}
                  {tab === "income"
                    ? summary.incomeGrowth
                    : summary.expenseGrowth}
                </span>
              </div>

              {/* Chart */}
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} barSize={22}>
                    <XAxis
                      dataKey="month"
                      tick={{
                        fill: dark ? "#9fb8a7" : "#316959",
                      }}
                    />
                    <Tooltip
                      wrapperStyle={{
                        background: dark ? "#06201b" : "#fff",
                      }}
                      contentStyle={{
                        borderRadius: "10px",
                        border: "none",
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill="#5bb66e"
                      radius={[10, 10, 10, 10]}
                      animationDuration={700}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Promo Card */}
            <div
              className={`${
                dark
                  ? "bg-[#071a16] border-[#12392f]"
                  : "bg-white border-[#e3ece8]"
              } border rounded-3xl p-6 shadow-sm`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      dark ? "bg-[#052919]" : "bg-[#eaf8ee]"
                    }`}
                  >
                    <CreditCard
                      size={32}
                      className={dark ? "text-[#5bb66e]" : "text-[#0d5c42]"}
                    />
                  </div>

                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        dark ? "text-white" : "text-[#152517]"
                      }`}
                    >
                      {promoCard.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        dark ? "text-[#9fb8a7]" : "text-[#316959]"
                      }`}
                    >
                      {promoCard.description}
                    </p>
                  </div>
                </div>

                <button className="px-5 py-2 rounded-full bg-[#5bb66e] text-white font-semibold">
                  {promoCard.button}
                </button>
              </div>
            </div>

            {/* Transactions */}
            <div className="space-y-4">
              <h2
                className={`text-2xl font-bold ${
                  dark ? "text-white" : "text-[#152517]"
                }`}
              >
                Recent Transactions
              </h2>

              {loading ? (
                <div className="text-center py-6 text-sm text-[#316959]">
                  Loading...
                </div>
              ) : (
                transactions.map((t) => (
                  <div
                    key={t.id}
                    className={`flex items-center justify-between p-4 rounded-2xl border shadow-sm ${
                      dark
                        ? "bg-[#071a16] border-[#12392f]"
                        : "bg-white border-[#e3ece8]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          dark ? "bg-[#052919]" : "bg-[#eaf8ee]"
                        }`}
                      >
                        <Wallet
                          size={22}
                          className="text-[#5bb66e]"
                        />
                      </div>

                      <div>
                        <h3
                          className={`font-semibold ${
                            dark ? "text-white" : "text-[#152517]"
                          }`}
                        >
                          {t.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            dark ? "text-[#9fb8a7]" : "text-[#316959]"
                          }`}
                        >
                          {t.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className={`font-bold ${amountClass(t.amount)}`}>
                      {t.amount}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Summary Widget */}
            <div
              className={`p-6 rounded-2xl border shadow-sm ${
                dark
                  ? "bg-[#071b17] border-[#12392f]"
                  : "bg-white border-[#e3ece8]"
              }`}
            >
              <h4
                className={`font-semibold mb-2 ${
                  dark ? "text-white" : "text-[#152517]"
                }`}
              >
                This Month
              </h4>
              <p className={`${dark ? "text-[#9fb8a7]" : "text-[#316959]"}`}>
                Income:{" "}
                <span className="font-bold text-[#5bb66e]">
                  {summary.incomeTotal}
                </span>
              </p>
              <p
                className={`mt-1 ${
                  dark ? "text-[#9fb8a7]" : "text-[#316959]"
                }`}
              >
                Expenses:{" "}
                <span className="font-bold text-red-400">
                  {summary.expenseTotal}
                </span>
              </p>
            </div>

            {/* Budget Widget */}
            <div
              className={`p-6 rounded-2xl border shadow-sm ${
                dark
                  ? "bg-[#071b17] border-[#12392f]"
                  : "bg-white border-[#e3ece8]"
              }`}
            >
              <h4
                className={`font-semibold mb-2 ${
                  dark ? "text-white" : "text-[#152517]"
                }`}
              >
                Budget
              </h4>

              <div className="w-full bg-[#e6ece8] rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-[#5bb66e]"
                  style={{ width: "62%" }}
                />
              </div>

              <div className="flex justify-between text-sm mt-2">
                <span className={`${dark ? "text-[#9fb8a7]" : "text-[#316959]"}`}>
                  Spent
                </span>
                <span
                  className={`${dark ? "text-[#9fb8a7]" : "text-[#316959]"}`}
                >
                  $620 / $1000
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div
              className={`p-6 rounded-2xl border shadow-sm ${
                dark
                  ? "bg-[#071b17] border-[#12392f]"
                  : "bg-white border-[#e3ece8]"
              }`}
            >
              <h4
                className={`font-semibold mb-3 ${
                  dark ? "text-white" : "text-[#152517]"
                }`}
              >
                Quick Actions
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <button className="px-3 py-2 rounded-xl bg-[#5bb66e] text-white">
                  Add Expense
                </button>
                <button className="px-3 py-2 rounded-xl border border-[#e3ece8]">
                  Export
                </button>
                <button className="px-3 py-2 rounded-xl border border-[#e3ece8]">
                  Insights
                </button>
                <button className="px-3 py-2 rounded-xl border border-[#e3ece8]">
                  Settings
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
