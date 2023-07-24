import Link from 'next/link';

const Footer = (): JSX.Element => (
  <footer className="flex justify-between align-middle py-8 px-10 bg-indigo-200">
    <h3 className="text-lg font-medium">Breakout</h3>
    <div className="flex justify-between gap-4 text-sm">
      <Link href="/discord">Discord</Link>
      <Link href="/facebook">Facebook</Link>
      <Link href="/email">Email</Link>
    </div>
    <div className="flex text-sm gap-2">
      <Link href="/privacy">Privacy Policy</Link>
      <span>2023.Breakout</span>
    </div>
  </footer>
);

export default Footer;
