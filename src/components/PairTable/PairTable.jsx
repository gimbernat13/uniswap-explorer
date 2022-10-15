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
          <div>{formatNumber(parseFloat(row.volumeUSD).toFixed(2))} </div>
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data1 });
  return (
    <Card>
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
    </Card>
  );
}
