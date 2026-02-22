import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - dAffiliates",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-purple-700">dAffiliates</Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-purple-700">← Back to Home</Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: February 21, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By installing or using dAffiliates (&quot;the App&quot;), you agree to these Terms of Service. The App is provided by Advanced Derm Solutions LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). If you do not agree to these terms, do not use the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Service Description</h2>
            <p>dAffiliates is a Shopify application that enables merchants to create and manage affiliate marketing programs. The App provides tools for affiliate management, referral tracking, commission calculation, discount code management, and affiliate portal access.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Account Eligibility</h2>
            <p>To use dAffiliates, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Have an active Shopify store</li>
              <li>Be at least 18 years of age</li>
              <li>Have the authority to bind your organization to these terms</li>
              <li>Provide accurate and complete information during setup</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Plans and Billing</h2>
            <p>dAffiliates offers a free tier and paid subscription plans. Paid plans are billed monthly through the Shopify billing system. Prices are as listed on our website and within the App. We may offer free trials for paid plans; after the trial period, your chosen plan will be charged automatically unless cancelled.</p>
            <p>We reserve the right to change pricing with 30 days&apos; notice. Plan limits (affiliates, campaigns, features) are enforced based on your current subscription.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the App for any illegal purpose or to promote illegal activities</li>
              <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
              <li>Interfere with or disrupt the App or its infrastructure</li>
              <li>Use the App to send spam or unsolicited communications</li>
              <li>Share your account credentials with unauthorized parties</li>
              <li>Exceed reasonable usage limits or abuse API access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Data and Privacy</h2>
            <p>Your use of the App is also governed by our <Link href="/privacy" className="text-purple-700 hover:underline">Privacy Policy</Link>. You are responsible for ensuring that your use of the App complies with applicable data protection laws, including obtaining any necessary consent from your affiliates.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
            <p>The App, including its design, code, and documentation, is owned by Advanced Derm Solutions LLC. You retain ownership of your data. By using the App, you grant us a limited license to process your data solely to provide the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p>The App is provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of harmful components. We are not responsible for the accuracy of commission calculations, referral tracking, or any financial decisions made based on App data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, profits, or data, arising from your use of the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Termination</h2>
            <p>You may stop using the App at any time by uninstalling it from your Shopify store. We may suspend or terminate your access if you violate these terms. Upon termination, your right to use the App ceases immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. Continued use of the App after changes constitutes acceptance of the new terms. We will notify you of material changes through the App or via email.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Florida, United States, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">13. Contact</h2>
            <p>Questions about these Terms? Please <Link href="/contact" className="text-purple-700 hover:underline">contact us</Link>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
