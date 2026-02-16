export default function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <small>&copy; {new Date().getFullYear()}  {profile.name}. All rights reserved.</small>
      </div>
    </footer>
  );
}
