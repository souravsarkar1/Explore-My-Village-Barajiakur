import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // This ensures the loader is centered in the whole viewport
      }}
    >
      <TailSpin
        height={80}
        width={80}
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius={1}
        visible={true}
      />
    </div>
  );
};

export default Loader;
