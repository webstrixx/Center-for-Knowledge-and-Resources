
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">Privacy Policy</h1>
                <p className="text-sm text-gray-600">How we protect and handle your data</p>
              </div>
            </div>
            <Link to="/" className="flex items-center ml-auto">
              <span className="text-sm text-gray-600 mr-2">Back to DHRC</span>
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle>Privacy Policy for DHRC</CardTitle>
            <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. We may also collect technical data (such as browser type, device, and IP address) and usage data (such as pages visited and actions taken).
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies & Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and improve our services. You can control cookies through your browser settings.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use third-party analytics tools (such as Google Analytics or Vercel Analytics) to understand how our services are used. These providers may collect information as described in their own privacy policies.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, personalize your experience, and communicate with you.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Rights & Choices</h2>
                <p className="text-gray-700 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may also opt out of certain communications or request that we restrict processing of your data, subject to applicable law.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us through our support channels or email us directly.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
