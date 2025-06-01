import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            Last Updated: June 1, 2025
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-12">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-8">
                  Tengoku Solutions ("we", "us", or "our") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or use our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-6">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Register for an account</li>
                  <li>Request a quote or information</li>
                  <li>Contact us via email or contact forms</li>
                  <li>Subscribe to our newsletter</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  The types of personal information we collect may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Company name and job title</li>
                  <li>Payment information for purchases</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-6">
                  We may use the information we collect for various purposes, including to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Provide and maintain our Services</li>
                  <li>Process transactions and send invoices</li>
                  <li>Respond to inquiries and offer customer support</li>
                  <li>Send marketing communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 mb-6">
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Service providers who assist with our business operations</li>
                  <li>Business partners for joint offerings (with your consent)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Successors in the event of a merger or acquisition</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600 mb-6">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information. However, no method of transmission over the internet is 
                  100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                <p className="text-gray-600 mb-6">
                  We retain personal information only for as long as necessary to fulfill the purposes 
                  for which it was collected, including for legal, accounting, or reporting requirements.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-600 mb-6">
                  Depending on your location, you may have rights regarding your personal information, 
                  including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your information</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  To exercise these rights, please contact us using the information below.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-600 mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage, 
                  and deliver personalized content. You can control cookies through your browser settings.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Transfers</h2>
                <p className="text-gray-600 mb-6">
                  Your information may be transferred to and maintained on computers located outside 
                  your jurisdiction. By using our Services, you consent to this transfer.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-600 mb-6">
                  Our Services are not directed to individuals under 18. We do not knowingly collect 
                  personal information from children. If we become aware of such collection, we will 
                  take steps to delete it.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-600 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of significant 
                  changes by posting the new policy on our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-600">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> info@tengokusolutions.com
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> S.n. 21/4/c,b 504,5th Flr, Goldville, Dange Chowk, Chinchwadgaon, Pune, Maharashtra, India, 411033
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link to="/contact">
                <Button className="bg-energy-gradient text-white hover:opacity-90">
                  Contact Our Privacy Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
