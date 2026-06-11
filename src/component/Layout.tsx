import desktopBg from "../assets/bg.jpg";
import mobileBg from "../assets/bg1.jpg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${mobileBg})` }}
      />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${desktopBg})` }}
      />

      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;