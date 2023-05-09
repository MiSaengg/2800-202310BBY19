import React from 'react';
import BranchTreadBox from '../../components/box/branchTreadBox';
import MainTreadBox from '../../components/box/mainTreadBox';

const Page = () => {
  return (
    <div>
      <h1>Component Playground</h1>
      <div>
        <MainTreadBox/>
        <BranchTreadBox/>
      </div>
    </div>
  );
};

export default Page;
