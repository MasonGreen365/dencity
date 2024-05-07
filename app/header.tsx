import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-md text-black">
      <div>
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">Dencity</a>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/services" legacyBehavior>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;