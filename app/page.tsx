"use client";

import { useState } from "react";

/* ───────────────────────── tiny helpers ───────────────────────── */
const Check = () => (
  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);
const Dash = () => <span className="text-gray-300">—</span>;
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${className}`}>{children}</span>
);

/* ───────────────────── Window chrome wrapper ──────────────────── */
function AppWindow({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-[#222] bg-[#0a0a0a] ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[#222]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-gray-400 font-medium">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/* ───────── Mock: Merchant Dashboard ───────── */
function MerchantDashboard() {
  const stats = [
    { label: "Total Affiliates", value: "127", delta: "+12 this month" },
    { label: "Active Campaigns", value: "8", delta: "2 ending soon" },
    { label: "Revenue This Month", value: "$24,850", delta: "+18% vs last month" },
    { label: "Pending Commissions", value: "$3,420", delta: "14 payouts queued" },
  ];
  const affiliates = [
    { name: "Sarah Chen", code: "SARAH15", orders: 34, revenue: "$4,280" },
    { name: "Mike Torres", code: "MIKET10", orders: 28, revenue: "$3,150" },
    { name: "Jess Kim", code: "JESSK20", orders: 22, revenue: "$2,890" },
    { name: "Alex Rivera", code: "ALEXR15", orders: 19, revenue: "$2,410" },
  ];
  return (
    <AppWindow title="dAffiliates — Merchant Dashboard" className="transform -rotate-1 hover:rotate-0 transition-transform duration-500">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#1a1a1a] rounded-lg p-3 border border-[#222]">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{s.label}</p>
            <p className="text-lg font-bold text-white mt-1">{s.value}</p>
            <p className="text-[10px] text-gray-500 mt-1">{s.delta}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mb-2 font-semibold">Top Affiliates</p>
      <div className="overflow-hidden rounded-lg border border-[#222]">
        <table className="w-full text-xs text-gray-300">
          <thead className="bg-[#1a1a1a]">
            <tr>{["Affiliate", "Code", "Orders", "Revenue"].map((h) => <th key={h} className="px-3 py-2 text-left text-gray-500 font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            {affiliates.map((a) => (
              <tr key={a.code} className="border-t border-[#222] hover:bg-[#1a1a1a]/60">
                <td className="px-3 py-2 text-white">{a.name}</td>
                <td className="px-3 py-2"><code className="bg-purple-600/20 text-purple-400 px-1.5 py-0.5 rounded text-[10px]">{a.code}</code></td>
                <td className="px-3 py-2">{a.orders}</td>
                <td className="px-3 py-2 text-green-400">{a.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppWindow>
  );
}

/* ───────── Mock: Affiliate Portal ───────── */
function AffiliatePortal() {
  const stats = [
    { label: "Clicks", value: "1,247", icon: "🔗" },
    { label: "Orders", value: "89", icon: "🛒" },
    { label: "Earned", value: "$2,340", icon: "💰" },
    { label: "Pending Payout", value: "$560", icon: "⏳" },
  ];
  const orders = [
    { id: "#4821", date: "Feb 18", amount: "$89.00", commission: "$8.90", status: "Approved" },
    { id: "#4819", date: "Feb 17", amount: "$142.50", commission: "$14.25", status: "Approved" },
    { id: "#4815", date: "Feb 16", amount: "$67.00", commission: "$6.70", status: "Pending" },
  ];
  return (
    <AppWindow title="dAffiliates — Affiliate Portal" className="transform rotate-1 hover:rotate-0 transition-transform duration-500">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#1a1a1a] rounded-lg p-3 border border-[#222]">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{s.icon} {s.label}</p>
            <p className="text-lg font-bold text-white mt-1">{s.value}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mb-2 font-semibold">Recent Orders</p>
      <div className="overflow-hidden rounded-lg border border-[#222]">
        <table className="w-full text-xs text-gray-300">
          <thead className="bg-[#1a1a1a]">
            <tr>{["Order", "Date", "Amount", "Commission", "Status"].map((h) => <th key={h} className="px-3 py-2 text-left text-gray-500 font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-[#222]">
                <td className="px-3 py-2 text-white">{o.id}</td>
                <td className="px-3 py-2">{o.date}</td>
                <td className="px-3 py-2">{o.amount}</td>
                <td className="px-3 py-2 text-green-400">{o.commission}</td>
                <td className="px-3 py-2">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] ${o.status === "Approved" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppWindow>
  );
}

/* ───────── Mock: Campaign Builder ───────── */
function CampaignBuilder() {
  return (
    <AppWindow title="dAffiliates — Campaign Builder" className="transform -rotate-0.5 hover:rotate-0 transition-transform duration-500">
      <div className="space-y-4">
        <div>
          <label className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">Campaign Name</label>
          <div className="bg-[#1a1a1a] border border-[#222] rounded-lg px-3 py-2 text-sm text-white">Summer Sale 2026</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">Discount Type</label>
            <div className="bg-[#1a1a1a] border border-[#222] rounded-lg px-3 py-2 text-sm text-white flex justify-between items-center">
              Percentage <span className="text-purple-400 font-bold">15%</span>
            </div>
          </div>
          <div>
            <label className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">Commission Rate</label>
            <div className="bg-[#1a1a1a] border border-[#222] rounded-lg px-3 py-2 text-sm text-white flex justify-between items-center">
              Per Order <span className="text-green-400 font-bold">10%</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">Product Scope</label>
            <div className="bg-[#1a1a1a] border border-[#222] rounded-lg px-3 py-2 text-sm text-white">All Products</div>
          </div>
          <div>
            <label className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">Affiliates Enrolled</label>
            <div className="bg-[#1a1a1a] border border-[#222] rounded-lg px-3 py-2 text-sm text-white">42 affiliates</div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 bg-[#1a1a1a] border border-[#222] rounded-lg px-3 py-2">
            <p className="text-[10px] text-gray-500">Start Date</p>
            <p className="text-sm text-white">Jun 1, 2026</p>
          </div>
          <div className="flex-1 bg-[#1a1a1a] border border-[#222] rounded-lg px-3 py-2">
            <p className="text-[10px] text-gray-500">End Date</p>
            <p className="text-sm text-white">Aug 31, 2026</p>
          </div>
        </div>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
          Launch Campaign →
        </button>
      </div>
    </AppWindow>
  );
}

/* ───────────────────────── FEATURES DATA ──────────────────────── */
const features = [
  { icon: "🎯", title: "Campaign-Based Discounts", desc: "Create per-product discount rules with percentage or fixed amounts. Each campaign gets unique codes for every affiliate." },
  { icon: "📊", title: "Automatic Order Tracking", desc: "Dual attribution via discount codes and referral link cookies. Never miss a sale with webhook-based tracking." },
  { icon: "💰", title: "Commission Management", desc: "Per-line-item calculation with auto-approval workflows. Handles refunds, cancellations, and configurable payout delays." },
  { icon: "🌐", title: "Self-Service Affiliate Portal", desc: "Affiliates manage their own stats, orders, payouts, and profile. Supports custom domains for a branded experience." },
  { icon: "🎨", title: "White-Label Branding", desc: "Custom colors, logos, branded emails, and custom domains. Your affiliates see your brand, not ours." },
  { icon: "📥", title: "Bulk Import & Management", desc: "CSV/Excel import wizard for onboarding hundreds of affiliates. Team roles: Admin, Manager, and Viewer access levels." },
];

/* ───────────────────────── PRICING DATA ──────────────────────── */
const plans = [
  {
    name: "Free", price: "$0", period: "/mo", popular: false,
    cta: "Get Started Free", ctaStyle: "border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-700",
    features: { affiliates: "5", campaigns: "1", tracking: true, portal: true, domain: false, whitelabel: false, analytics: false, bulk: false, team: "1", trial: "—" },
  },
  {
    name: "Starter", price: "$29", period: "/mo", popular: false,
    cta: "Start 30-Day Free Trial", ctaStyle: "bg-purple-600 text-white hover:bg-purple-700",
    features: { affiliates: "50", campaigns: "5", tracking: true, portal: true, domain: false, whitelabel: false, analytics: true, bulk: true, team: "3", trial: "30 days free" },
  },
  {
    name: "Pro", price: "$99", period: "/mo", popular: true,
    cta: "Start 30-Day Free Trial", ctaStyle: "bg-purple-600 text-white hover:bg-purple-700",
    features: { affiliates: "Unlimited", campaigns: "Unlimited", tracking: true, portal: true, domain: true, whitelabel: true, analytics: true, bulk: true, team: "10", trial: "30 days free" },
  },
];

const featureRows: { key: keyof typeof plans[0]["features"]; label: string }[] = [
  { key: "affiliates", label: "Affiliates" },
  { key: "campaigns", label: "Campaigns" },
  { key: "tracking", label: "Order tracking" },
  { key: "portal", label: "Affiliate portal" },
  { key: "domain", label: "Custom domain" },
  { key: "whitelabel", label: "White-label branding" },
  { key: "analytics", label: "Analytics & reports" },
  { key: "bulk", label: "Bulk import" },
  { key: "team", label: "Team members" },
  { key: "trial", label: "Trial" },
];

/* ───────────────────────── PAGE ──────────────────────── */
export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* ─── CSS animations ─── */}
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        .fade-up-d1 { animation-delay: 0.1s; }
        .fade-up-d2 { animation-delay: 0.2s; }
        .fade-up-d3 { animation-delay: 0.3s; }
        .fade-up-d4 { animation-delay: 0.4s; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ═══════════════════ NAV ═══════════════════ */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-purple-700">dAffiliates</a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-purple-700 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-700 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-purple-700 transition-colors">Pricing</a>
            <a href="https://portal.daffiliates.com" className="hover:text-purple-700 transition-colors">Login</a>
            <a href="#pricing" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">Start Free Trial</a>
          </div>
          <button onClick={() => setMobileNav(!mobileNav)} className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileNav
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {mobileNav && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 text-sm font-medium">
            <a href="#features" onClick={() => setMobileNav(false)} className="block text-gray-700">Features</a>
            <a href="#how-it-works" onClick={() => setMobileNav(false)} className="block text-gray-700">How It Works</a>
            <a href="#pricing" onClick={() => setMobileNav(false)} className="block text-gray-700">Pricing</a>
            <a href="https://portal.daffiliates.com" className="block text-gray-700">Login</a>
            <a href="#pricing" className="block bg-purple-600 text-white text-center px-4 py-2 rounded-lg">Start Free Trial</a>
          </div>
        )}
      </nav>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-purple-100 text-purple-700 mb-6 fade-up">🎉 30-Day Free Trial — No Credit Card Required</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 fade-up fade-up-d1">
            Turn your customers into<br />
            <span className="text-purple-600">your sales team</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 fade-up fade-up-d2">
            The Shopify-native affiliate marketing platform. Create campaigns, track sales automatically, and manage commissions — all from your Shopify admin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up fade-up-d3">
            <a href="#pricing" className="bg-purple-600 text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
              Start Free Trial →
            </a>
            <a href="#how-it-works" className="border-2 border-gray-200 px-8 py-3.5 rounded-xl text-lg font-semibold text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-colors">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ DASHBOARD PREVIEWS ═══════════════════ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">See It In Action</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Everything you need, beautifully built</h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">Real views from the dAffiliates app — merchant dashboard, affiliate portal, and campaign builder.</p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {/* Merchant Dashboard */}
            <div className="fade-up">
              <p className="text-sm font-semibold text-purple-600 mb-3 text-center lg:text-left">Merchant Dashboard</p>
              <MerchantDashboard />
            </div>

            {/* Two-up: Affiliate Portal & Campaign Builder */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="fade-up fade-up-d1">
                <p className="text-sm font-semibold text-purple-600 mb-3">Affiliate Portal</p>
                <AffiliatePortal />
              </div>
              <div className="fade-up fade-up-d2">
                <p className="text-sm font-semibold text-purple-600 mb-3">Campaign Builder</p>
                <CampaignBuilder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Everything to run a world-class affiliate program</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Up and running in minutes</h2>
          </div>
          <div className="space-y-12">
            {[
              { step: "1", title: "Install & Create Campaigns", desc: "Set discount rates, commission structures, and product scope. Choose percentage or fixed-amount discounts per campaign." },
              { step: "2", title: "Invite or Import Affiliates", desc: "Send email invites with setup links, bulk import from CSV, or enable self-registration. Each affiliate gets a unique code." },
              { step: "3", title: "Track Sales & Pay Commissions", desc: "Orders are attributed automatically via discount codes and referral cookies. Configure payout delays, review analytics, and export reports." },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">{s.step}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRICING ═══════════════════ */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h2>
            <p className="text-gray-600 mt-4">All paid plans include a 30-day free trial. No credit card required.</p>
          </div>

          {/* Mobile: stacked cards */}
          <div className="lg:hidden space-y-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl border p-6 ${plan.popular ? "border-purple-600 shadow-lg shadow-purple-100 relative" : "border-gray-200"}`}>
                {plan.popular && <Badge className="bg-purple-600 text-white absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {featureRows.map((row) => {
                    const val = plan.features[row.key];
                    if (val === false) return null;
                    return (
                      <li key={row.key} className="flex items-center gap-2">
                        {val === true ? <Check /> : <span className="w-5 h-5 text-center text-purple-600 font-semibold text-xs flex items-center justify-center">✓</span>}
                        <span>{row.label}{typeof val === "string" && val !== "—" && val !== "" ? `: ${val}` : ""}</span>
                      </li>
                    );
                  })}
                </ul>
                <a href="#" className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.ctaStyle}`}>{plan.cta}</a>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-5 w-1/5"></th>
                  {plans.map((plan) => (
                    <th key={plan.name} className={`p-5 text-center ${plan.popular ? "bg-purple-50" : ""}`}>
                      {plan.popular && <Badge className="bg-purple-600 text-white mb-2">Most Popular</Badge>}
                      <div className="text-lg font-bold">{plan.name}</div>
                      <div className="mt-1">
                        <span className="text-3xl font-extrabold">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, i) => (
                  <tr key={row.key} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="p-4 font-medium text-gray-700">{row.label}</td>
                    {plans.map((plan) => {
                      const val = plan.features[row.key];
                      return (
                        <td key={plan.name} className={`p-4 text-center ${plan.popular ? "bg-purple-50/50" : ""}`}>
                          {val === true ? <span className="inline-flex justify-center"><Check /></span> : val === false ? <Dash /> : <span>{val}</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="border-t border-gray-200">
                  <td className="p-5"></td>
                  {plans.map((plan) => (
                    <td key={plan.name} className={`p-5 text-center ${plan.popular ? "bg-purple-50/50" : ""}`}>
                      <a href="#" className={`inline-block px-6 py-2.5 rounded-xl font-semibold transition-colors ${plan.ctaStyle}`}>{plan.cta}</a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST / SOCIAL PROOF ═══════════════════ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-100 text-green-700 mb-6">🛡️ Built for Shopify</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Shopify Native. No hacks.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            dAffiliates is built directly on Shopify&apos;s platform — using Shopify Functions, the embedded admin SDK, and the latest APIs. Your data never leaves Shopify&apos;s ecosystem.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "2025-04 API", desc: "Latest Shopify API version" },
              { label: "First-Party Cookies", desc: "Reliable tracking that works" },
              { label: "Webhook Attribution", desc: "Real-time order matching" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <p className="text-lg font-bold text-purple-700">{s.label}</p>
                <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to grow with affiliates?</h2>
          <p className="text-gray-600 text-lg mb-8">Start your 30-day free trial today. No credit card required. Cancel anytime.</p>
          <a href="#pricing" className="inline-block bg-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
            Start Free Trial →
          </a>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-6">
            <span className="font-bold text-gray-700">dAffiliates</span>
            <a href="/privacy" className="hover:text-purple-700 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-purple-700 transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-purple-700 transition-colors">Contact</a>
            <a href="https://portal.daffiliates.com" className="hover:text-purple-700 transition-colors">Login</a>
          </div>
          <p>© 2026 dAffiliates by Advanced Derm Solutions LLC</p>
        </div>
      </footer>
    </div>
  );
}
