import React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import formatNumber from "../../utils/formatNumber";
import { Card } from "../Card/Card";
export function PairTable({ data1 }) {
  console.log("data1 ", data1);
  const columns = React.useMemo(
    () => [
      {
        Header: "Pair",

        accessor: (row) => {
          console.log(row);
          return (
            <td>
              <Link to={`/pairs/${row.id}`}>
                {/* <Card> */}
                {row.token0.symbol} - {row.token1.symbol}
                {/* </Card> */}
              </Link>
            </td>
          );
        },
      },
      {
        Header: "TX Count",
        accessor: (row) => (
          <td>{formatNumber(parseFloat(row.txCount))} </td>
        ),
      },
      {
        Header: "Volume USD",
        accessor: (row) => (
          <td>{formatNumber(parseFloat(row.volumeUSD).toFixed(2))} </td>
        ),
      },
      {
        Header: "Reserve ETH",
        accessor: (row) => (
          <td>{formatNumber(parseFloat(row.reserveETH).toFixed(2))} </td>
        ),
      },
      {
        Header: "Reserve USD",
        accessor: (row) => (
          <td>{formatNumber(parseFloat(row.reserveUSD).toFixed(2))} </td>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data1 });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  // borderBottom: "solid 3px red",
                  // background: "aliceblue",
                  // color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
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
  );
}
