import { Card } from "components/atomic/atoms/Card/Card";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import { setSelectedPair } from "../../../../context/actionNames";
import { PairsContext } from "../../../../context/PairsContext";
import formatNumber from "../../../../utils/formatNumber";
export function PairTable({ tableData }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Pair",
        accessor: (row) => {
          return (
            <div>
              <Link to={`/pairs/${row.id}`}>
                {row.token0.symbol} - {row.token1.symbol}
              </Link>
            </div>
          );
        },
      },
      {
        Header: "TX Count",
        accessor: (row) => <div>{formatNumber(parseFloat(row.txCount))} </div>,
      },
      {
        Header: "Volume USD",
        accessor: (row) => (
          <div>$ {formatNumber(parseFloat(row.volumeUSD).toFixed(2))} </div>
        ),
      },
      {
        Header: "Reserve ETH",
        accessor: (row) => (
          <div>{formatNumber(parseFloat(row.reserveETH).toFixed(2))} </div>
        ),
      },
      {
        Header: "Reserve USD",
        accessor: (row) => (
          <div>{formatNumber(parseFloat(row.reserveUSD).toFixed(2))} </div>
        ),
      },
    ],
    []
  );
  const { state: pairState, dispatch: pairDispatch } = useContext(PairsContext);
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
                className={row.id === pairState.selectedPair ? "active" : ""}
                onClick={() =>
                  pairDispatch({ type: setSelectedPair, payload: row.id })
                }
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                      }}
                    >
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
