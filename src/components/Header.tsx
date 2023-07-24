import Link from 'next/link';

const Header = (): JSX.Element => (
  <div className="flex justify-between align-middle py-4">
    <h1 className="text-2xl font-bold">Breakout</h1>
    <nav>
      <ul className="flex justify-center align-middle gap-4">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/discussions">Discussions</Link></li>
        <li className="font-bold"><Link href="/skin-diary">Skin Diary</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  
    <div className="flex justify-center align-middle gap-4">
      <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">View notifications</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </button>
      <button type="button" className="flex max-w-xs items-center rounded-full bg-violet-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        <span className="sr-only">Open user menu</span>
        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        <div className="text-white px-2">John Doe</div>
      </button>
    </div>
  </div>
);

export default Header;