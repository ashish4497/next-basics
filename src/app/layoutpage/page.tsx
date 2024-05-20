/** @format */

import HeaderNav from '../ui/navBar';
import SideBar from '../ui/sideBar';
import './layoutStyle.css'
export default function layoutPage() {
  return (
    <>
      <HeaderNav />
      <div className='flex parent-container'>
        <div className='sec-left'>
          <SideBar/>
        </div>
        <div className='sec-right'>rendring sec</div>
      </div>
    </>
  );
}
