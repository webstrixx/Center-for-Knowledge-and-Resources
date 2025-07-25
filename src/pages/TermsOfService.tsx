
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">Terms of Service</h1>
                <p className="text-sm text-gray-600">Terms and conditions for using DHRC</p>
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
            <CardTitle>Terms of Service for DHRC</CardTitle>
            <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the Dev Haven Resources Center (DHRC), you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to use DHRC for lawful purposes only and not to misuse the platform.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Uses</h2>
                <p className="text-gray-700 leading-relaxed">
                  You may not use DHRC to:
                  <ul className="list-disc ml-6">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Upload or distribute malicious software</li>
                    <li>Engage in unauthorized data collection or scraping</li>
                  </ul>
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content and materials on DHRC are the property of their respective owners. You may not copy, reproduce, or distribute any content without permission.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials on DHRC are provided on an 'as is' basis. DHRC makes no warranties, expressed or implied, and disclaims all other warranties.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitations of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall DHRC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption).
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms of Service from time to time. Continued use of DHRC after changes constitutes acceptance of the new terms.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms are governed by and construed in accordance with the laws of the applicable jurisdiction. You agree to submit to the exclusive jurisdiction of the courts.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us through our support channels or email us directly.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
