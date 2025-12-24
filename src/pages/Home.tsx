import { ActiveRoleContext } from './landing_page';
import React from 'react';
import WfmHome from './layout/WfmHome';
import EmpHome from './layout/EmpHome';

const Home = () => {
  const { activeRole } = React.useContext(ActiveRoleContext);
  return (
    <>
    {activeRole === "WFM" && (
        <WfmHome />
      )}
    {activeRole === "Employee" && (
        <EmpHome />
      )}
    </>
  );
};
export default Home;
