import frameOne from './assets/Frame (1).png'
import frameTwo from './assets/Frame (2).png'

function App() {
  return (
    <div className="site">
      <header className="nav">
        <div className="container nav__inner">
          <a href="#home" className="brand">Wheelers</a>
          <nav className="nav__links">
            <a href="#riders">Riders</a>
            <a href="#drivers">Drivers</a>
            <a href="#safety">Safety</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Contact</a>
            <a href="#policies">Policies</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__content">
              <h1>Ride further, faster, fairer</h1>
              <p className="lead">
                Wheelers is a modern ride‑hailing platform built for riders and drivers.
                Safe, reliable rides for passengers. Better earnings and tools for drivers.
              </p>
              <div className="cta__group">
                <a className="btn btn--primary" href="#download">Download Rider App</a>
                <a className="btn btn--secondary" href="#download">Download Driver App</a>
              </div>
              {/* <div className="cta__group cta__group--sub">
                <a className="link" href="https://www.figma.com/design/FTffD6EGXmZzcWjlkXplgk/Wheelers?node-id=0-1&p=f&t=CMcY2nViLJV4096a-0" target="_blank" rel="noreferrer">View Rider Screens</a>
                <span className="divider">•</span>
                <a className="link" href="https://www.figma.com/design/Roa07ukbIYFpixLg4aZdpU/Wheeler-Rider?node-id=0-1&p=f&t=2w0Z18UD7riFDygb-0" target="_blank" rel="noreferrer">View Driver Screens</a>
              </div> */}
            </div>
            <div className="hero__art" aria-hidden="true">
              <div className="mock mock--left">
                <img src={frameOne} alt="Wheelers rider app preview" loading="eager" />
              </div>
              <div className="mock mock--right">
                <img src={frameTwo} alt="Wheelers driver app preview" loading="eager" />
              </div>
            </div>
          </div>
        </section>

        <section id="riders" className="section">
          <div className="container">
            <div className="section__header">
              <span className="section__badge">For Passengers</span>
              <h2>For Riders</h2>
              <p className="section__intro">Affordable, safe, and on‑time rides wherever you go.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Quick pickups</h3>
                <p>Smart matching finds nearby drivers for faster arrivals.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Upfront fares</h3>
                <p>Know the price before you ride—no surprises at drop‑off.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>24/7 support</h3>
                <p>In‑app help center and email support for peace of mind.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Safety toolkit</h3>
                <p>Share trip, SOS shortcut, and verified driver profiles.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-rider" className="section alt">
          <div className="container">
            <h2>How it works for Riders</h2>
            <div className="timeline">
              <div className="timeline__item">
                <div className="timeline__marker">1</div>
                <div className="timeline__content">
                  <h3>Set pickup and destination</h3>
                  <p>Enter where you are and where you want to go</p>
                </div>
              </div>
              <div className="timeline__connector"></div>
              <div className="timeline__item">
                <div className="timeline__marker">2</div>
                <div className="timeline__content">
                  <h3>Choose ride type and confirm fare</h3>
                  <p>See your price upfront, select your ride option</p>
                </div>
              </div>
              <div className="timeline__connector"></div>
              <div className="timeline__item">
                <div className="timeline__marker">3</div>
                <div className="timeline__content">
                  <h3>Track your driver live</h3>
                  <p>Watch as your driver approaches in real-time</p>
                </div>
              </div>
              <div className="timeline__connector"></div>
              <div className="timeline__item">
                <div className="timeline__marker">4</div>
                <div className="timeline__content">
                  <h3>Pay seamlessly and rate</h3>
                  <p>Automatic payment and share your experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="drivers" className="section">
          <div className="container">
            <div className="section__header">
              <span className="section__badge">For Partners</span>
              <h2>For Drivers</h2>
              <p className="section__intro">Earn more with fair commissions and powerful tools.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-box">
                <div className="benefit-stat">85%</div>
                <h3>Fair earnings</h3>
                <p>Transparent, competitive commission so you keep more per trip.</p>
              </div>
              <div className="benefit-box">
                <div className="benefit-stat">2.5x</div>
                <h3>Peak boosts</h3>
                <p>Surge incentives and bonuses during busy hours.</p>
              </div>
              <div className="benefit-box">
                <div className="benefit-stat">AI</div>
                <h3>Smart navigation</h3>
                <p>Optimized routes and smart zones to reduce idle time.</p>
              </div>
              <div className="benefit-box">
                <div className="benefit-stat">24/7</div>
                <h3>Flexible schedule</h3>
                <p>Be your own boss—go online and earn when you want.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-driver" className="section alt">
          <div className="container">
            <h2>How it works for Drivers</h2>
            <div className="process-flow">
              <div className="process-card">
                <div className="process-number">1</div>
                <h3>Sign up and verify vehicle</h3>
                <p>Quick onboarding process with document verification</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-card">
                <div className="process-number">2</div>
                <h3>Go online to receive trips</h3>
                <p>Toggle online mode and start receiving ride requests</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-card">
                <div className="process-number">3</div>
                <h3>Pickup, complete ride, get paid</h3>
                <p>Complete trips and earnings are credited instantly</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-card">
                <div className="process-number">4</div>
                <h3>Track earnings and ratings</h3>
                <p>Monitor your performance and income in real-time</p>
              </div>
            </div>
          </div>
        </section>

        <section id="safety" className="section">
          <div className="container">
            <div className="safety-header">
              <h2>Safety and Trust</h2>
              <p className="section__intro">Your security is our top priority</p>
            </div>
            <div className="safety-grid">
              <div className="safety-card">
                <div className="safety-icon-large">✓</div>
                <h3>Verified drivers</h3>
                <p>Identity checks and document verification for all drivers</p>
              </div>
              <div className="safety-card">
                <div className="safety-icon-large">📍</div>
                <h3>Trip sharing</h3>
                <p>Share live trip status with friends and family in real-time</p>
              </div>
              <div className="safety-card">
                <div className="safety-icon-large">🆘</div>
                <h3>Support 24/7</h3>
                <p>Dedicated help for incident resolution anytime, anywhere</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section alt">
          <div className="container pricing">
            <h2>Simple, transparent pricing</h2>
            <div className="pricing-showcase">
              <div className="pricing-feature">
                <div className="pricing-check">✓</div>
                <div>
                  <h3>Upfront fare shown before you ride</h3>
                  <p>No surprises, know exactly what you'll pay</p>
                </div>
              </div>
              <div className="pricing-feature">
                <div className="pricing-check">✓</div>
                <div>
                  <h3>No hidden fees—taxes and fees included</h3>
                  <p>Complete transparency in every transaction</p>
                </div>
              </div>
              <div className="pricing-feature">
                <div className="pricing-check">✓</div>
                <div>
                  <h3>Drivers enjoy competitive commission</h3>
                  <p>Fair rates that benefit both riders and drivers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="section">
          <div className="container">
            <h2>Get the apps</h2>
            <p className="section__intro">Download Wheelers for iOS or Android</p>
            <div className="app-store">
              <div className="app-card">
                <div className="app-icon">📱</div>
                <h3>Rider App</h3>
                <p>Request rides, track drivers, pay seamlessly</p>
                <div className="store-buttons">
                  <a className="store-btn store-btn--ios" aria-disabled="true" href="#">
                    <span>Download on</span>
                    <strong>App Store</strong>
                  </a>
                  <a className="store-btn store-btn--android" aria-disabled="true" href="#">
                    <span>Get it on</span>
                    <strong>Google Play</strong>
                  </a>
                </div>
              </div>
              <div className="app-card">
                <div className="app-icon">🚗</div>
                <h3>Driver App</h3>
                <p>Accept rides, navigate routes, earn more</p>
                <div className="store-buttons">
                  <a className="store-btn store-btn--ios" aria-disabled="true" href="#">
                    <span>Download on</span>
                    <strong>App Store</strong>
                  </a>
                  <a className="store-btn store-btn--android" aria-disabled="true" href="#">
                    <span>Get it on</span>
                    <strong>Google Play</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section alt">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <details className="faq-item">
                <summary>
                  <span className="faq-question">Where is Wheelers available?</span>
                  <span className="faq-toggle">+</span>
                </summary>
                <div className="faq-answer">Launching city‑by‑city. Sign up to get notified when we arrive in your area.</div>
              </details>
              <details className="faq-item">
                <summary>
                  <span className="faq-question">How do I contact support?</span>
                  <span className="faq-toggle">+</span>
                </summary>
                <div className="faq-answer">Use the in‑app help center or email support at support@wheelers.app.</div>
              </details>
              <details className="faq-item">
                <summary>
                  <span className="faq-question">What payment methods are supported?</span>
                  <span className="faq-toggle">+</span>
                </summary>
                <div className="faq-answer">Cash and digital payments (including PayFast) where available.</div>
              </details>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Get in Touch</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-label">Email</div>
                <a href="mailto:support@wheelers.app" className="contact-value">support@wheelers.app</a>
              </div>
              <div className="contact-card">
                <div className="contact-label">Phone / WhatsApp</div>
                <a href="tel:+00000000000" className="contact-value">+00 000 000 000</a>
              </div>
              <div className="contact-card">
                <div className="contact-label">Address</div>
                <div className="contact-value">123 Innovation Street, Tech City</div>
              </div>
              <div className="contact-card">
                <div className="contact-label">Business Hours</div>
                <div className="contact-value">24/7 support available</div>
              </div>
            </div>
          </div>
        </section>

        <section id="policies" className="section alt">
          <div className="container policies">
            <h2>Legal & Policies</h2>
            <div className="policies-tabs">
              <div className="policy-tab">
                <div className="policy-tab-header">
                  <h3>Privacy Policy</h3>
                  <span className="policy-badge">Data Protection</span>
                </div>
                <div className="policy-tab-content">
                  <p>We collect only the data necessary to provide and improve our service: account details, trip information, and payment data. We never sell personal data. Data is stored securely and retained only as long as needed for legal and operational purposes. You can request data access or deletion by emailing privacy@wheelers.app.</p>
                </div>
              </div>
              <div className="policy-tab">
                <div className="policy-tab-header">
                  <h3>Terms and Conditions</h3>
                  <span className="policy-badge">User Agreement</span>
                </div>
                <div className="policy-tab-content">
                  <p>By using Wheelers, riders agree to request lawful trips and pay the displayed fare; drivers agree to maintain valid licenses and insure vehicles. Wheelers is a technology platform connecting riders and drivers; we are not a transportation carrier. Disputes may be resolved via our support channels.</p>
                </div>
              </div>
              <div className="policy-tab">
                <div className="policy-tab-header">
                  <h3>Refund & Cancellation Policy</h3>
                  <span className="policy-badge">Money Back</span>
                </div>
                <div className="policy-tab-content">
                  <p>Cancellations made before driver arrival may incur a small fee to compensate driver time. If you are incorrectly charged, contact support@wheelers.app within 48 hours for review. Approved refunds are processed to the original payment method within 7–10 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="brand">Wheelers</div>
          <div className="footer__links">
            <a href="#policies">Privacy</a>
            <a href="#policies">Terms</a>
            <a href="#policies">Refunds</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="copy">© {new Date().getFullYear()} Wheelers Technologies. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
