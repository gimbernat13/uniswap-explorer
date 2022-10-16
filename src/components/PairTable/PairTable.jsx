import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import { setSelectedPair } from "../../context/actionNames";
import { PairsContext } from "../../context/PairsContext";
import { TokensContext } from "../../context/TokensContext";
import formatNumber from "../../utils/formatNumber";
import { Card } from "../Card/Card";
export function PairTable({ data1 }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Pair",
        accessor: (row) => {
          return (
            <div>
              <Link to={`/pairs/${row.id}`}>
                {/* <Card> */}
                {row.token0.symbol} - {row.token1.symbol}
                {/* </Card> */}
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
    useTable({ columns, data: data1 }, useSortBy);

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
                        // border: "solid 1px gray",
                        //   background: "papayawhip",
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
