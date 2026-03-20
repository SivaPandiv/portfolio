export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-secondary)' }}>
      <p className="text-muted text-sm">
        Designed & Built with <span className="gradient-text">React</span> and <span className="gradient-text">Framer Motion</span>. <br/>
        &copy; {new Date().getFullYear()} My Portfolio.
      </p>
    </footer>
  );
}
