
import { ChevronDown } from 'lucide-react';

// Server Component for Legal Section
function LegalSection({ title, children }) {
  return (
    <div className="mb-6 group">
      <div className="w-full flex items-center justify-between p-4 bg-[var(--light-mint-green-color)] rounded-[var(--small-border-radius)] mb-2">
        <h2 className="panelHeading-text">{title}</h2>
        <ChevronDown size={24} />
      </div>
      <div className="p-6 bg-[var(--pure-White)] rounded-[var(--small-border-radius)] shadow-sm">
        {children}
      </div>
    </div>
  );
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[var(--entire-window-bg-color)]">
      <header className="bg-[var(--pure-White)] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="font-bold-headers text-center text-[var(--text-black-color)]">
            Legal Documentation
          </h1>
        </div>
      </header>

      <nav className="bg-[var(--pure-White)] border-b border-[var(--gray-light-border-color)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex space-x-6 overflow-x-auto py-4">
            <a href="#terms" className="panelHeading-text whitespace-nowrap hover:text-[var(--primary-green-color)]">
              Terms of Service
            </a>
            <a href="#privacy" className="panelHeading-text whitespace-nowrap hover:text-[var(--primary-green-color)]">
              Privacy Policy
            </a>
            <a href="#dpa" className="panelHeading-text whitespace-nowrap hover:text-[var(--primary-green-color)]">
              Data Processing
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          <section id="terms">
            <LegalSection title="Terms of Service">
              <div className="space-y-6">
                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">1. Introduction</h3>
                  <p className="text-[var(--text-black-color)]">
                    Welcome to BridgeMessage. By accessing or using our cross-platform messaging integration service, you agree to be bound by these Terms of Service.
                  </p>
                </section>

                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">2. Subscription and Payment</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Monthly and annual subscription options</li>
                    <li>7-day free trial period</li>
                    <li>Payments processed securely through Stripe</li>
                  </ul>
                </section>

                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">3. Data Security</h3>
                  <p className="text-[var(--text-black-color)]">
                    All messages are end-to-end encrypted. We maintain strict security protocols to protect your data.
                  </p>
                </section>
              </div>
            </LegalSection>
          </section>

          <section id="privacy">
            <LegalSection title="Privacy Policy">
              <div className="space-y-6">
                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">Information We Collect</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information</li>
                    <li>Message metadata</li>
                    <li>Platform integration data</li>
                  </ul>
                </section>

                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">How We Use Your Data</h3>
                  <p className="text-[var(--text-black-color)]">
                    We use your information to provide and improve our services, process payments, and ensure platform security.
                  </p>
                </section>
              </div>
            </LegalSection>
          </section>

          <section id="dpa">
            <LegalSection title="Data Processing Agreement">
              <div className="space-y-6">
                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">Data Protection Measures</h3>
                  <p className="text-[var(--text-black-color)]">
                    We implement appropriate technical and organizational measures to ensure data security.
                  </p>
                </section>

                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">Subprocessors</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Stripe - Payment processing</li>
                    <li>Cloud service providers</li>
                    <li>Analytics services</li>
                  </ul>
                </section>
              </div>
            </LegalSection>
          </section>
        </div>

        <footer className="mt-12 text-center">
          <p className="small-supporting-fonts text-[var(--gray-dark-color)]">
            Last updated: January 8, 2025
          </p>
          <p className="small-supporting-fonts text-[var(--gray-dark-color)] mt-2">
            © 2025 BridgeMessage. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}