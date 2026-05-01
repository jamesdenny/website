export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} James Denny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
