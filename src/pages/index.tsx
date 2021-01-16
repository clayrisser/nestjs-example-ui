import React, { FC } from 'react';

export interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => {
  return <div>Hello, world!</div>;
};

Home.propTypes = {};

export default Home;
