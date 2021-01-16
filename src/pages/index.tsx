import React, { FC } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

export interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => {
  const [session] = useSession();

  if (!session) {
    return (
      <>
        <div>Signed Out</div>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  return (
    <>
      <div>Signed In</div>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

Home.propTypes = {};

export default Home;
