import { ActiveRoleContext } from './landing_page';
import React from 'react';
import WfmHome from './layout/WfmHome';

const Home = () => {
  const { activeRole } = React.useContext(ActiveRoleContext);
  return (
    <>
    {activeRole === "WFM" && (
        <WfmHome />
      )}
    </>
  );
};
export default Home;
