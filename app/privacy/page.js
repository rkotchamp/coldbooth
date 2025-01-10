import { ChevronDown } from "lucide-react";

// Server Component for Legal Section
function LegalSection({ title, children }) {
  return (
    <div className="group mb-6">
      <div className="mb-2 flex w-full items-center justify-between rounded-[var(--small-border-radius)] bg-[var(--light-mint-green-color)] p-4">
        <h2 className="panelHeading-text">{title}</h2>
        <ChevronDown size={24} />
      </div>
      <div className="rounded-[var(--small-border-radius)] bg-[var(--pure-White)] p-6 shadow-sm">
        {children}
      </div>
    </div>
  );
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[var(--entire-window-bg-color)]">
      <header className="bg-[var(--pure-White)] shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="font-bold-headers text-center text-[var(--text-black-color)]">
            Legal Documentation
          </h1>
        </div>
      </header>

      <nav className="border-b border-[var(--gray-light-border-color)] bg-[var(--pure-White)]">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex space-x-6 overflow-x-auto py-4">
            <a
              href="#terms"
              className="panelHeading-text whitespace-nowrap hover:text-[var(--primary-green-color)]"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="panelHeading-text whitespace-nowrap hover:text-[var(--primary-green-color)]"
            >
              Privacy Policy
            </a>
            <a
              href="#dpa"
              className="panelHeading-text whitespace-nowrap hover:text-[var(--primary-green-color)]"
            >
              Data Processing
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-4">
          <section id="terms">
            <LegalSection title="Terms of Service">
              <div className="space-y-6">
                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">
                    1. Introduction
                  </h3>
                  <p className="text-[var(--text-black-color)]">
                    Welcome to BridgeMessage. By accessing or using our
                    cross-platform messaging integration service, you agree to
                    be bound by these Terms of Service.
                  </p>
                </section>

                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">
                    2. Subscription and Payment
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Monthly and annual subscription options</li>
                    <li>7-day free trial period</li>
                    <li>Payments processed securely through Stripe</li>
                  </ul>
                </section>

                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">
                    3. Data Security
                  </h3>
                  <p className="text-[var(--text-black-color)]">
                    All messages are end-to-end encrypted. We maintain strict
                    security protocols to protect your data.
                  </p>
                </section>
              </div>
            </LegalSection>
          </section>

          <section id="privacy">
            <LegalSection title="Privacy Policy">
              <div className="space-y-6">
                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">
                    Information We Collect
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Name and contact information</li>
                    <li>Message metadata</li>
                    <li>Platform integration data</li>
                  </ul>
                </section>

                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">
                    How We Use Your Data
                  </h3>
                  <p className="text-[var(--text-black-color)]">
                    We use your information to provide and improve our services,
                    process payments, and ensure platform security.
                  </p>
                </section>
              </div>
            </LegalSection>
          </section>

          <section id="dpa">
            <LegalSection title="Data Processing Agreement">
              <div className="space-y-6">
                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">
                    Data Protection Measures
                  </h3>
                  <p className="text-[var(--text-black-color)]">
                    We implement appropriate technical and organizational
                    measures to ensure data security.
                  </p>
                </section>

                <section>
                  <h3 className="mid-bold-user-name-fonts mb-4">
                    Subprocessors
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
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
          <p className="small-supporting-fonts mt-2 text-[var(--gray-dark-color)]">
            © 2025 BridgeMessage. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
