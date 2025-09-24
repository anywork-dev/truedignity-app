import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.25 5.16-.51 9-4.7 9-10.25V7l-10-5zm0 18c-3.14-.35-6-3.54-6-7.5V8.3l6-2.7 6 2.7V12.5c0 3.96-2.86 7.15-6 7.5z"/>
                  <path d="M9 12l2 2 5-5-1.41-1.41L11 11.17l-.59-.58L9 12z"/>
                </svg>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                TrueDignity
              </h1>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 mb-4">
              The Future of Notary Services
            </p>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
              A revolutionary notary operating system built on federated network architecture where security comes first. 
              Experience seamless, secure, and transparent notarization at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-600 text-slate-300 hover:bg-slate-800">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Built for the Modern World
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              TrueDignity combines cutting-edge technology with traditional notary principles to deliver unprecedented security and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <CardTitle className="text-2xl font-semibold text-slate-900">Federated Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 text-lg leading-relaxed">
                  Distributed architecture ensures no single point of failure while maintaining seamless connectivity across the global notary network.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 16H6V10h12v12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                  </svg>
                </div>
                <CardTitle className="text-2xl font-semibold text-slate-900">Security First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 text-lg leading-relaxed">
                  End-to-end encryption, multi-factor authentication, and blockchain-verified signatures protect every transaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 18H7v-1h6v1zm0-3H7v-1h6v1zm0-3H7V9h6v5zm0-7H7V6h6v1z"/>
                  </svg>
                </div>
                <CardTitle className="text-2xl font-semibold text-slate-900">Digital Notary OS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 text-lg leading-relaxed">
                  Complete operating system designed specifically for notary operations with intuitive workflows and compliance tools.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Security at Every Layer
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our security-first approach ensures your documents and identity remain protected throughout the entire notarization process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 10.25 5.16-.51 9-4.7 9-10.25V5l-9-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                    <p className="text-slate-300">All communications and document transfers are protected with military-grade encryption protocols.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Blockchain Verification</h3>
                    <p className="text-slate-300">Every notarization is recorded on an immutable blockchain ledger for permanent verification.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Identity Verification</h3>
                    <p className="text-slate-300">Multi-layer identity verification ensures all parties are authenticated before any notarial act.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.25 5.16-.51 9-4.7 9-10.25V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Zero Trust Architecture</h3>
                  <p className="text-slate-300 mb-6">Every request is verified, every user authenticated, and every action audited in our zero-trust security model.</p>
                  <div className="flex justify-center space-x-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">99.9%</div>
                      <div className="text-sm text-slate-400">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">256-bit</div>
                      <div className="text-sm text-slate-400">Encryption</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">24/7</div>
                      <div className="text-sm text-slate-400">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Notary Experience?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join thousands of notaries and organizations who trust TrueDignity for secure, efficient, and compliant notarization services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              No credit card required • 30-day free trial • Setup in minutes
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.25 5.16-.51 9-4.7 9-10.25V7l-10-5z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">TrueDignity</span>
            </div>
            <div className="text-sm text-slate-400">
              © 2025 TrueDignity. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
