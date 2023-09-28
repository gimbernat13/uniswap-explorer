import React from "react";
import { useTable, useSortBy } from "react-table";
import formatNumber from "../../../../utils/formatNumber";
import { UilAngleUp, UilAngleDown } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { Card } from "components/atomic/atoms/Card/Card";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

export function TokenTable({ tableData }) {

  const history = useHistory();
  const navigateTo = (id) => {
    history.push(`/tokens/${id}`);
  };

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


  const location = useLocation();
  const tokenIdFromUrl = location.pathname.split("/").pop();


  return (
    <Card noPadding>
      <table className="stylssed-table" {...getTableProps()}>
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
            const isActive = row.original.id === tokenIdFromUrl;

            return (
              <tr {...row.getRowProps()} className={isActive ? "active" : ""} onClick={() => navigateTo(row.original.id)}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} style={{}}>
                      <Link to={`/tokens/${row.original.id}`}>
                        {cell.render("Cell")}
                      </Link>
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
