import { Card } from "components/atomic/atoms/Card/Card";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import { setSelectedPair } from "../../../../context/actionNames";
import { PairsContext } from "../../../../context/PairsContext";
import formatNumber from "../../../../utils/formatNumber";
import { UilAngleUp, UilAngleDown } from "@iconscout/react-unicons";
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
                    <div>{column.render("Header")}</div>
                    <div>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <UilAngleDown />
                        ) : (
                          <UilAngleUp />
                        )
                      ) : (
                        <UilAngleUp color="transparent" />
                      )}
                    </div>
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
              <tr
                {...row.getRowProps()}
                className={row.id === pairState.selectedPair ? "active" : ""}
                onClick={() =>
                  pairDispatch({ type: setSelectedPair, payload: row.id })
                }
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      <Link to={`/pairs/${row.original.id}`}>
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
