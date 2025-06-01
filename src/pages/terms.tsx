import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-energy-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            Last Updated: June 1, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-12">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-8">
                  These Terms of Service ("Terms") govern your access to and use of Tengoku Solutions' 
                  website, products, and services ("Services"). By accessing or using our Services, you 
                  agree to be bound by these Terms and our Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing or using any part of the Services, you agree to become bound by these Terms. 
                  If you do not agree to all the terms and conditions of this agreement, then you may not 
                  access the Services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                <p className="text-gray-600 mb-6">
                  Tengoku Solutions provides biochar products and related agricultural solutions. 
                  We reserve the right to modify or discontinue, temporarily or permanently, the Services 
                  (or any part thereof) with or without notice.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
                <p className="text-gray-600 mb-6">
                  Certain features of our Services may require you to register for an account. You agree to 
                  provide accurate, current, and complete information during registration and to update 
                  such information to keep it accurate, current, and complete.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-600 mb-6">
                  For paid Services, you agree to pay all applicable fees. Fees are non-refundable except 
                  as required by law. We may suspend or terminate your access if your payment is late or 
                  your payment method is declined.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-600 mb-6">
                  All content included on our Services, such as text, graphics, logos, images, as well as 
                  the compilation thereof, is our property and protected by copyright and other laws. 
                  You may not use our trademarks without our prior written permission.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Conduct</h2>
                <p className="text-gray-600 mb-6">
                  You agree not to use the Services to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Interfere with or disrupt the Services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">
                  To the maximum extent permitted by law, Tengoku Solutions shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, or any loss of profits 
                  or revenues, whether incurred directly or indirectly.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
                <p className="text-gray-600 mb-6">
                  You agree to indemnify and hold harmless Tengoku Solutions from any claim or demand, 
                  including reasonable attorneys' fees, made by any third party due to or arising out of 
                  your breach of these Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-600 mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of India, 
                  without regard to its conflict of law principles.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-600 mb-6">
                  We reserve the right to modify these Terms at any time. We will provide notice of 
                  significant changes through our Services. Your continued use after changes constitutes 
                  acceptance of the new Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms, please contact us at:
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
                  Contact Us for Questions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
