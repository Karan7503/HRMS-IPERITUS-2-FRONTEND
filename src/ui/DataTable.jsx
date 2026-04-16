

import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table";

function DataTable({
  data = [],
  columns = [],
  emptyMessage = "No data available"
}) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (

    <div
      className="
        bg-bgCard
        border
        border-strong

        rounded-xl
        overflow-visible
        shadow-sm
        card-soft
      "
    >

      <table className="w-full">

        {/* HEADER */}

        <thead
          className="
            bg-tableHeader
            border-b
            border-strong
          "
        >

          {table.getHeaderGroups().map(headerGroup => (

            <tr key={headerGroup.id}>

              {headerGroup.headers.map(header => (

                <th
                  key={header.id}

                  className="
                    text-left

                    px-5
                    py-4

                    text-xs
                    font-semibold

                    tracking-wide
                    uppercase

                    text-muted
                  "
                >

                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                </th>

              ))}

            </tr>

          ))}

        </thead>


        {/* BODY */}

        <tbody>

          {table.getRowModel().rows.length > 0 ? (

            table.getRowModel().rows.map(row => (

              <tr
                key={row.id}

                className="
                  border-t
                  border-strong

                  even:bg-rowAlt

                  hover:bg-primarySoft

                  transition-colors
                "
              >

                {row.getVisibleCells().map(cell => (

                  <td
                    key={cell.id}

                    className="
                      px-5
                      py-3.5

                      text-sm
                      text-textMain
                    "
                  >

                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}

                  </td>

                ))}

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan={columns.length}

                className="
                  text-center
                  py-10

                  text-muted
                "
              >

                {emptyMessage}

              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default DataTable;