import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import { setSelectedPair } from "../../../../context/actionNames";
import { PairsContext } from "../../../../context/PairsContext";
import formatNumber from "../../../../utils/formatNumber";
import { Card } from "../Card/Card";
export function TokenTable({ tableData }) {
  const columns = React.useMemo(
    () => [
      // {
      //   Header: "Pair",
      //   accessor: (row) => {
      //     return (
      //       <div>
      //         <Link to={`/pairs/${row.id}`}>
      //           {row.token0.symbol} - {row.token1.symbol}
      //         </Link>
      //       </div>
      //     );
      //   },
      // },
      {
        Header: "Symbol",
        accessor: "symbol",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Trade Volume ",
        accessor: (row) => (
          <div>{formatNumber(parseFloat(row.tradeVolume).toFixed(2))} </div>
        ),
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

  return (
    <Card>
      <table {...getTableProps()}>
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
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                // className={row.id === pairState.selectedPair ? "active" : ""}
                // onClick={() =>
                //   pairDispatch({ type: setSelectedPair, payload: row.id })
                // }
              >
                {row.cells.map((cell) => {
                  return (
                    // <Link to={`/pairs/${row.id}`}>
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        // border: "solid 1px gray",
                        //   background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                    // </Link>
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
