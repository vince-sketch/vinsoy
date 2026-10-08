import { useState } from 'react'
import heroImage from './assets/vinceako.png'
import './App.css'

const Spark = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
  </svg>
)

function App() {
  const [formData, setFormData] = useState({ fullName: '', email: '', aboutProject: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  // New state to track which work tab is active
  const [activeWorkTab, setActiveWorkTab] = useState('current')

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const endpoint = 'https://formsubmit.co/ajax/YOUR_EMAIL_HERE'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: formData.aboutProject
        })
      })
      if (!response.ok) throw new Error('Network response was not ok')
      setSubmitStatus('success')
      setFormData({ fullName: '', email: '', aboutProject: '' })
    } catch (err) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="folio-layout">
      {/* Navigation */}
      <nav className="folio-nav">
        <div className="nav-brand">
          <Spark /> Vince Collin
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
        </div>
        <a href="#contact" className="pill-btn primary">Hire Me</a>
      </nav>

      <main className="folio-main">
        {/* Hero Section */}
        <section className="hero-section" id="about">
          <div className="hero-content">
            <div className="section-meta">
              <Spark /> Networking Engineer <span className="meta-right">Vol 01 · 2026</span>
            </div>
            <h1 className="marquee-title">
              A quieter way to route data.
            </h1>
            <p className="hero-desc">
              Vince is a dedicated IT professional specializing in complex network topologies. 
              Clean architecture, secure protocols, one solid connection — and nothing else asking for attention.
            </p>
            <ul className="hero-list">
              <li>One reliable network. Zero packet loss.</li>
              <li>Cisco environments for routing, Inter for switching.</li>
              <li>1px hairlines carry every data separation.</li>
              <li>A single four-point spark, used sparingly.</li>
            </ul>
            <div className="hero-actions">
              <a href="#contact" className="pill-btn primary">Begin a project →</a>
              <a href="#work" className="pill-btn secondary">View topologies</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img src={heroImage} alt="Vince Collin Panes" className="hero-img" />
            <div className="image-caption">
              <Spark /> Plate I — Networking Desk
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <h2 className="section-title">Three quiet rules.</h2>
          <p className="section-subtitle">
            Networking is small on purpose. The whole system runs on a handful of decisions that never get spent on decoration.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="card-icon">⚡</div>
              <h3>Set in routing.</h3>
              <p>Topologies live in dynamic environments from 32 to 96 nodes. Subnetting in IPv4/IPv6. Two protocols, no exceptions.</p>
              <div className="card-meta"><span>01</span><span>Routing</span></div>
            </div>
            <div className="service-card">
              <div className="card-icon">−</div>
              <h3>Built on hairlines.</h3>
              <p>Every switch, router, and VLAN connection is a single solid line. Depth is bandwidth contrast, not shadow.</p>
              <div className="card-meta"><span>02</span><span>Switching</span></div>
            </div>
            <div className="service-card">
              <div className="card-icon"><Spark /></div>
              <h3>Reduced to one mark.</h3>
              <p>Security is the only ornament permitted. It signs the wordmark, divides subnets, and otherwise stays out of the way.</p>
              <div className="card-meta"><span>03</span><span>Security</span></div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="work-section" id="work">
          <div className="work-header">
            <h2 className="section-title">The routing desk.</h2>
            <p className="section-subtitle">A small worked example. VLANs, inputs, a quiet checklist — all dressed in the same hairlines.</p>
          </div>
          
          <div className="work-container">
            <div className="work-list">
              <div className="work-tabs">
                <span 
                  className={`tab ${activeWorkTab === 'current' ? 'active' : ''}`} 
                  onClick={() => setActiveWorkTab('current')}
                >
                  Current
                </span>
                <span 
                  className={`tab ${activeWorkTab === 'archive' ? 'active' : ''}`} 
                  onClick={() => setActiveWorkTab('archive')}
                >
                  Archive
                </span>
              </div>
              
              {/* Render items based on active tab */}
              {activeWorkTab === 'current' ? (
                <>
                  <div className="work-item">
                    <input type="checkbox" readOnly checked />
                    <div className="work-details">
                      <h4>Dynamic Routing Topology</h4>
                      <span>Cisco Packet Tracer · 18 min configure</span>
                    </div>
                    <a href="/dynamic.png" target="_blank" rel="noreferrer" className="status-pill">View</a>
                  </div>
                  
                  <div className="work-item">
                    <input type="checkbox" readOnly checked />
                    <div className="work-details">
                      <h4>VLAN Architecture</h4>
                      <span>Volume II · 24 min configure</span>
                    </div>
                    <a href="/vlan.png" target="_blank" rel="noreferrer" className="status-pill">View</a>
                  </div>
                </>
              ) : (
                <>
                  <div className="work-item">
                    <input type="checkbox" readOnly checked />
                    <div className="work-details">
                      <h4>Enterprise Branch Topology</h4>
                      <span>Cisco Packet Tracer · 45 min configure</span>
                    </div>
                    <a href="/archive1.png" target="_blank" rel="noreferrer" className="status-pill">View</a>
                  </div>
                </>
              )}
            </div>
            
            <div className="work-preview">
              {/* Render preview images based on active tab */}
              {activeWorkTab === 'current' ? (
                <>
                  <img src="/dynamic.png" alt="Topology Preview" className="preview-image" onError={(e) => e.target.style.display = 'none'} />
                  <img src="/vlan.png" alt="VLAN Preview" className="preview-image" style={{marginTop: '1rem'}} onError={(e) => e.target.style.display = 'none'} />
                </>
              ) : (
                <>
                  <img src="/archive1.png" alt="Archived Topology Preview" className="preview-image" onError={(e) => e.target.style.display = 'none'} />
                </>
              )}
            </div>
          </div>
        </section>

        <div className="section-divider"><Spark /></div>
        
        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="contact-box">
            <h2 className="section-title text-center">One quiet letter, a fortnight.</h2>
            <p className="section-subtitle text-center mx-auto">
              A small dispatch from the workshop — topology notes, a single image, the odd marginalia. No tracking, no newsletters dressed up as something else.
            </p>
            
            <form className="large-form" onSubmit={handleFormSubmit}>
              <div className="input-row">
                <input type="text" placeholder="Your Name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} required className="large-input" />
                <input type="email" placeholder="you@quiet.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="large-input" />
              </div>
              <div className="input-group">
                <textarea placeholder="Your message..." rows="5" value={formData.aboutProject} onChange={(e) => setFormData({...formData, aboutProject: e.target.value})} required className="large-input"></textarea>
              </div>
              <div className="form-footer">
                <span className="disclaimer">Usually replies within a single day.</span>
                <button type="submit" className="pill-btn primary submit-btn large-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send the letter ↗'}
                </button>
              </div>
              {submitStatus === 'success' && <p className="success-msg">Letter sent successfully.</p>}
            </form>
            
            <div className="contact-divider"></div>
            
            <div className="social-highlights">
              <p className="social-label">Or connect directly:</p>
              <div className="social-pills-container">
                <a href="https://web.facebook.com/vincecollinelchico.panes" target="_blank" rel="noreferrer" className="social-highlight-pill">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://www.instagram.com/vnc_clln/?hl=en" target="_blank" rel="noreferrer" className="social-highlight-pill">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="folio-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4><Spark /> Vince</h4>
            <p>A quiet, paper-thin network design system. Made on a desk by a window, not in a server room.</p>
          </div>
          <div className="footer-col">
            <h5>FOLIO</h5>
            <a href="#about">Index</a>
            <a href="#work">Notes</a>
            <a href="#contact">Letters</a>
          </div>
          <div className="footer-col">
            <h5>SYSTEM</h5>
            <a href="#">Tokens</a>
            <a href="#">Specimen</a>
            <a href="#">Download</a>
          </div>
          <div className="footer-col">
            <h5>WORKSHOP</h5>
            <a href="https://web.facebook.com/vincecollinelchico.panes" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/vnc_clln/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vince — set in Instrument Serif & Inter.</span>
          <span>Bone paper · Ink · One spark.</span>
        </div>
      </footer>
    </div>
  )
}

export default App