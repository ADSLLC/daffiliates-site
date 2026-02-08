export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            d<span className="text-blue-600">Affiliates</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a
              href="https://apps.shopify.com"
              className="text-sm font-semibold bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Install App
            </a>
            <a
              href="https://portal.daffiliates.com"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
            Shopify Affiliate Marketing
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Turn your customers into your
            <span className="text-blue-600"> sales team</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Launch a powerful affiliate program on your Shopify store in minutes.
            Campaign-based discounts, automatic tracking, and commission
            management — all in one app.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.shopify.com"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Get Started Free
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 px-8 py-3.5 rounded-xl text-lg font-medium hover:text-gray-900 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to run an affiliate program
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From campaign setup to payout — dAffiliates handles the entire
              affiliate lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Campaign-Based Discounts",
                description:
                  "Create unlimited campaigns with per-product discount rules. Each affiliate gets one vanity code that works across all their campaigns.",
                icon: "M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z M6 6h.008v.008H6V6z",
              },
              {
                title: "Automatic Order Tracking",
                description:
                  "Orders are attributed automatically via discount codes and referral link cookies. No manual work required.",
                icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
              },
              {
                title: "Commission Management",
                description:
                  "Per-line-item commission calculation with automatic approval workflows. Handle refunds and adjustments gracefully.",
                icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
              },
              {
                title: "Affiliate Portal",
                description:
                  "Self-service portal where affiliates view stats, track orders, request payouts, and manage their profile. Works on custom domains.",
                icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
              },
              {
                title: "Referral Link Tracking",
                description:
                  "First-party cookie tracking with automatic cart attribute injection. Attribute sales even when discount codes aren't used.",
                icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
              },
              {
                title: "Shopify Native",
                description:
                  "Built with Shopify Functions for per-product discounts at checkout. Embedded admin UI with Polaris. Works with your theme.",
                icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36c-.723 0-1.215-.723-.975-1.398l3-7.75A1.125 1.125 0 015.43 11.25H8.25m4.5 9.75H18m-4.5 0a1.5 1.5 0 01-1.5-1.5V18m6 4.5l3-7.75c.24-.675-.252-1.398-.975-1.398H16.5",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Up and running in 3 steps
            </h2>
            <p className="text-lg text-gray-500">
              Get your affiliate program live in under 10 minutes.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "Create Campaigns",
                description:
                  "Set up campaigns with per-product discount rates and commission structures. Choose percentage or fixed-amount discounts, assign specific products or entire collections.",
              },
              {
                step: "2",
                title: "Invite Affiliates",
                description:
                  "Invite affiliates by email or enable self-registration. Each affiliate gets a unique vanity code (like JOHN) that works as both a discount code and referral link parameter.",
              },
              {
                step: "3",
                title: "Track & Pay",
                description:
                  "Orders are tracked automatically. Commissions are calculated per-line-item based on campaign rules. Affiliates request payouts through their self-service portal.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple pricing
          </h2>
          <p className="text-lg text-gray-500 mb-12">
            Start free while in beta. No credit card required.
          </p>

          <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
            <div className="text-sm font-semibold text-blue-600 mb-2">
              EARLY ACCESS
            </div>
            <div className="text-5xl font-extrabold text-gray-900 mb-2">
              Free
            </div>
            <div className="text-gray-500 mb-8">During beta period</div>
            <ul className="text-left space-y-3 mb-8">
              {[
                "Unlimited campaigns",
                "Unlimited affiliates",
                "Automatic order tracking",
                "Per-product discount rules",
                "Self-service affiliate portal",
                "Custom domain portal",
                "Commission management",
                "Referral link tracking",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://apps.shopify.com"
              className="block w-full bg-blue-600 text-white py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Install Free
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to grow with affiliates?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Join Shopify merchants using dAffiliates to drive sales through
            affiliate partnerships.
          </p>
          <a
            href="https://apps.shopify.com"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} dAffiliates. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="mailto:support@daffiliates.com" className="hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
