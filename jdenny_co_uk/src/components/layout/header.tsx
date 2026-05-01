export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="font-bold text-xl text-charcoal">
            James Denny
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-charcoal hover:text-primary font-medium transition-colors">
              About
            </a>
            <a href="#projects" className="text-charcoal hover:text-primary font-medium transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-charcoal hover:text-primary font-medium transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
