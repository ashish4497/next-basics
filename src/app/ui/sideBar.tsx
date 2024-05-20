/** @format */

import Link from 'next/link';
import './sideBarStyle.css';

export default function sideBar() {
  return (
    <div className='rotContainer'>
      <h2 className='px-10 py-4'>SideBar Nav Title</h2>
      <aside>

 
      <ul>
        <Link href='/homePage'>
          <li className='px-10 py-4'>Home</li>
        </Link>
        <Link href='#'>
          <li className='px-10 py-4'>Users</li>
        </Link>
        <Link href='#'>
          <li className='px-10 py-4'>Grossery</li>
        </Link>
        <Link href='#'>
          <li className='px-10 py-4'>Gallery</li>
        </Link>
      </ul>
        </aside>
    </div>
  );
}
