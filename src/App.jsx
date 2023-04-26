import { useState, useEffect } from 'react';
import { Bitski, AuthenticationStatus } from 'bitski';

const bitski = new Bitski('1812bcfa-44ab-48e3-87b2-b06de6c8e89d', 'http://localhost:5173/callback.html');

function App() {
  const [authStatus, setAuthStatus] = useState(null);
  const [buttonText, setButtonText] = useState('Sign In with Bitski');

  useEffect(() => {
    // async function getAuthStatus() {
    //   const status = await bitski.getAuthStatus();
    //   if (authStatus !== status) {
    //     setAuthStatus(status);
    //   }

    //   if (status === AuthenticationStatus.Connected) {
    //     setButtonText('Disconnect');
    //   }

    //   if (status === AuthenticationStatus.NotConnected) {
    //     setButtonText('Sign In with Bitski');
    //   }
    // }

    // getAuthStatus();

    bitski.initialize();
  });

  const signIn = async () => {
    await bitski.signIn();
  };

  const disconnect = async () => {
    await bitski.signOut();
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl">Bitski + web3.js</h1>
      <section>
        <button className="my-4 inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900" onClick={authStatus === AuthenticationStatus.Connected ? disconnect : signIn}>
          {buttonText}
        </button>
      </section>
    </main>
  )
}

export default App
