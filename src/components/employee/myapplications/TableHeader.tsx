import React from 'react';

const TableHeader: React.FC = () => {
  const columns = [
    'SO ID',
    'Role',
    'Account',
    'Applied Date',
    'Hiring Manager',
    'Required Skills',
    'Status',
  ];

  return (
    <thead className="border-b border-[#E5E7EB] bg-[#E8ECED]">
      <tr>
        {columns.map((column) => (
          <th
            key={column}
            className="px-4 py-3 text-left text-[13px] font-medium text-[#7A7480] leading-tight tracking-normal"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;