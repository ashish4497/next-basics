/** @format */

import Link from 'next/link';
export default function HeaderNav() {
  return (
    <div>
      <nav class='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
        <div class='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div class='text-sm lg:flex-grow'>
            <Link
              href='/'
              class='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
              HomePage
            </Link>
            <Link
              href='/tododashboard'
              class='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
              TodoDashboard
            </Link>
            <Link
              href='#'
              class='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
              Layout
            </Link>
          </div>
          <div>
            <Link href='#'>
              <div class='rounded-full h-16 w-16 flex items-center justify-center bg-gray-200'>
                Ashish
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
