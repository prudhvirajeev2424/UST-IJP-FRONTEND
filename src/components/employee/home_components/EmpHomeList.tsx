import React, { useEffect } from 'react';
import StatusBadge from './StatusBadge';

interface EmpHomeListProps {
  opportunities: any[];
}

interface TableColumn {
  header: string;
  headerClass?: string;
  cellClass?: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
}

const EmpHomeList: React.FC<EmpHomeListProps> = ({ opportunities }) => {
  // Log on mount to confirm rendering
  useEffect(() => {
    console.log("EmpHomeList mounted with", opportunities?.length ?? 0, "items");
  }, [opportunities]);

  const handleRowClick = (opportunityId: string) => {
    console.log('Opportunity clicked:', opportunityId);
  };

  // Accept string[] or string and normalize to array
  const formatSkills = (skills: string[] | string | undefined) => {
    const skillsArray: string[] = Array.isArray(skills)
      ? skills
      : typeof skills === 'string'
      ? skills.split(/[,;]+/).map(s => s.trim()).filter(Boolean)
      : [];

    if (skillsArray.length <= 2) {
      return skillsArray.join(', ');
    }

    const firstTwoSkills = skillsArray.slice(0, 2).join(', ');
    const remainingCount = skillsArray.length - 2;

    return `${firstTwoSkills}, +${remainingCount}`;
  };

  // Table column configuration - Easy to modify or reuse
  const columns: TableColumn[] = [
    {
      header: 'SOE',
      headerClass: 'uppercase',
      cellClass: 'table-cell-text-sm table-cell-primary',
      accessor: 'id'
    },
    {
      header: 'Role',
      cellClass: 'table-cell-text-lg table-cell-primary',
      accessor: 'role'
    },
    {
      header: 'Band',
      cellClass: 'table-cell-text-lg table-cell-secondary',
      accessor: 'band'
    },
    {
      header: 'Location',
      cellClass: 'table-cell-text-md table-cell-secondary',
      accessor: 'location'
    },
    {
      header: 'Skills',
      cellClass: 'table-cell-text-md table-cell-secondary',
      accessor: 'skills',
      render: (skills, row) => (
        <span title={Array.isArray(skills) ? skills.join('; ') : String(skills)}>
          {formatSkills(skills)}
        </span>
      )
    },
    {
      header: 'Action Taken',
      accessor: 'status',
      render: (status) => status && <StatusBadge status={status} />
    }
  ];

  // Helper function to get cell value
  const getCellValue = (row: any, accessor: string) => {
    return row[accessor];
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="table-header-row">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`table-header-cell ${column.headerClass || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opp, index) => (
            <tr
              key={opp.id ?? index}
              onClick={() => handleRowClick(opp.id)}
              className="table-body-row clickable"
            >
              {columns.map((column, colIndex) => {
                const cellValue = getCellValue(opp, column.accessor);
                
                return (
                  <td
                    key={colIndex}
                    className={`table-body-cell ${column.cellClass || ''}`}
                  >
                    {column.render 
                      ? column.render(cellValue, opp)
                      : cellValue
                    }
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpHomeList;