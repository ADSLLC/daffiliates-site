import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - dAffiliates",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-purple-700">dAffiliates</Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-purple-700">← Back to Home</Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: February 21, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p>dAffiliates (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by Advanced Derm Solutions LLC. This Privacy Policy explains how we collect, use, and protect information when you use our Shopify affiliate marketing application and related services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p><strong>Account Information:</strong> When you install dAffiliates, we collect your Shopify store name, store URL, and admin email address through the Shopify OAuth process.</p>
            <p><strong>Affiliate Data:</strong> Information about affiliates you add to your program, including names, email addresses, referral codes, and commission records.</p>
            <p><strong>Order Data:</strong> We access order information from your Shopify store to track affiliate referrals and calculate commissions. This includes order totals, discount codes used, and customer referral attribution.</p>
            <p><strong>Usage Data:</strong> We collect information about how you interact with the app, including page views, feature usage, and session duration.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain the dAffiliates service</li>
              <li>Track affiliate referrals and calculate commissions</li>
              <li>Send transactional emails (welcome emails, password resets, payout notifications)</li>
              <li>Improve our application and develop new features</li>
              <li>Provide customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party services that help us operate (e.g., hosting providers, email delivery services)</li>
              <li><strong>Shopify:</strong> As required by the Shopify platform and API terms</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data, including encrypted connections (TLS/SSL), secure password hashing, and access controls. Your Shopify access tokens are stored securely and never exposed to end users.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
            <p>We retain your data for as long as your account is active or as needed to provide services. If you uninstall the app, we retain data for 90 days to allow for reinstallation, after which it may be permanently deleted.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
            </ul>
            <p>To exercise these rights, please contact us through our <Link href="/contact" className="text-purple-700 hover:underline">contact form</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Contact</h2>
            <p>If you have questions about this Privacy Policy, please <Link href="/contact" className="text-purple-700 hover:underline">contact us</Link>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
