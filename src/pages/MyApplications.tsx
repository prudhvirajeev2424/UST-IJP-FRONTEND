import React from 'react';
import FilterPanel from '../components/employee/myapplications/FilterPanel';
import SearchBar from '../components/employee/myapplications/SearchBar';
import ApplicationTable from '../components/employee/myapplications/ApplicationTable';
import Layout from '../components/employee/myapplications/Layout';

const MyApplications: React.FC = () => {
  return (
    <Layout>
      {/* Page Header: Title (left) and Search (right) */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[18px] font-medium text-[#231F20] leading-tight">
          Application history
        </h1>
        <div className="ml-4">
          <SearchBar />
        </div>
      </div>

      {/* Main Content - Filter and Table */}
      <div className="flex gap-6">
        <FilterPanel />
        <div className="flex-1">

            {/* Application Table */}
            <ApplicationTable />
        </div>
      </div>
    </Layout>
  );
};

export default MyApplications;