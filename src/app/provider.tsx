'use client';

import { ReactNode } from 'react';
import Navbar from '@/components/layouts/navbar';
import { Provider } from 'react-redux'
import store from '@/store';
import { Toaster } from '@/components/ui/toaster';

const LayoutProvider = ({children}: {children: ReactNode}) => {
  return (
    <Provider store={store}>
      <Navbar />
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pt-14 sm:px-14 container">
        <div className="w-full">
          {children}
          <Toaster />
        </div>
      </section>
    </Provider>
  );
};

export default LayoutProvider;