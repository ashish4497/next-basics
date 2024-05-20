/** @format */

import HeaderNav from '../ui/navBar';
import SideBar from '../ui/sideBar';

export default function layoutPage() {
  return (
    <>
      <HeaderNav />
      <div className='flex'>
        <div>
          <SideBar/>
        </div>
        <div>rendring sec</div>
      </div>
    </>
  );
}
