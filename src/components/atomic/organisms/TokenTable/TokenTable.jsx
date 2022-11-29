import React from "react";
import { useTable, useSortBy } from "react-table";
import formatNumber from "../../../../utils/formatNumber";
import { UilAngleUp, UilAngleDown } from "@iconscout/react-unicons";
import { Link, useHistory } from "react-router-dom";
import { Card } from "components/atomic/atoms/Card/Card";
export function TokenTable({ tableData }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Symbol",
        accessor: "symbol",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Tx's",
        accessor: (row) => <div>{formatNumber(parseFloat(row.txCount))} </div>,
      },
      {
        Header: "Trade Volume USD",
        accessor: (row) => (
          <div>{formatNumber(parseFloat(row.tradeVolumeUSD).toFixed(2))} </div>
        ),
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData }, useSortBy);

    const history = useHistory()

    function handleRowClick(row) {
      history.push(`/tokens/${row.original.id}`);

    }
  return (
    <Card noPadding>
      <table className="styled-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: "var(--border)",
                    fontWeight: "bold",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <UilAngleDown />
                      ) : (
                        <UilAngleUp />
                      )
                    ) : (
                      <UilAngleUp color="transparent" />
                    )}{" "}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr onClick={()  => handleRowClick(row)} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} style={{}}>
                        {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
