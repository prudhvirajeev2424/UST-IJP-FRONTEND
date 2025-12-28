import React from 'react';

const TableHeader: React.FC = () => {
  const columns = [
    { label: 'SO ID', width: 'w-[100px]' },
    { label: 'Role', width: 'w-[180px]' },
    { label: 'Account', width: 'w-[100px]' },
    { label: 'Applied Date', width: 'w-[110px]' },
    { label: 'Hiring Manager', width: 'w-[140px]' },
    { label: 'Required Skills', width: 'w-[140px]' },
    { label: 'Status', width: 'w-[120px]' },
  ];

  return (
    <thead className="bg-[#E8ECED]">
      <tr>
        {columns.map((column) => (
          <th
            key={column.label}
            className={`${column.width} px-3 py-3 text-left text-[12px] font-medium text-[#7A7480] leading-tight border-b border-[#E8EBED]`}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;