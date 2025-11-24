"use client";

import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  Table as TanstackTable,
  Column,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { WaitlistUser } from "./types";

// Constants
const PAGE_SIZE = 20;
const ROW_NUMBER_COLUMN_SIZE = 60;

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const calculateRowNumber = (
  pageIndex: number,
  pageSize: number,
  rowIndex: number
): number => {
  return pageIndex * pageSize + rowIndex + 1;
};

// Column Components
const SortableHeader = ({
  column,
  label,
}: {
  column: Column<WaitlistUser, unknown>;
  label: string;
}) => (
  <button
    className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  >
    {label}
    <ArrowUpDown className="w-4 h-4" />
  </button>
);

// Column definitions factory
const createColumns = (): ColumnDef<WaitlistUser>[] => [
  {
    id: "rowNumber",
    header: "No",
    cell: ({ row, table }) => {
      const { pageIndex, pageSize } = table.getState().pagination;
      return (
        <div className="text-gray-600 dark:text-gray-400">
          {calculateRowNumber(pageIndex, pageSize, row.index)}
        </div>
      );
    },
    enableSorting: false,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    size: ROW_NUMBER_COLUMN_SIZE,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortableHeader column={column} label="Name" />,
    cell: ({ getValue }) => (
      <div className="font-medium text-gray-900 dark:text-white">
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortableHeader column={column} label="Email" />,
    cell: ({ getValue }) => (
      <div className="text-gray-600 dark:text-gray-300">
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <SortableHeader column={column} label="Registration Date" />
    ),
    cell: ({ getValue }) => (
      <div className="text-gray-500 dark:text-gray-400">
        {formatDate(getValue() as string)}
      </div>
    ),
  },
];

interface WaitlistTableProps {
  users: WaitlistUser[];
}

export default function WaitlistTable({ users }: WaitlistTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo<ColumnDef<WaitlistUser>[]>(() => createColumns(), []);

  const table = useReactTable({
    data: users,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: PAGE_SIZE,
      },
    },
  });

  return (
    <div className="space-y-4">
      <SearchInput value={globalFilter} onChange={setGlobalFilter} />
      <TableContent table={table} />
      <Pagination table={table} />
    </div>
  );
}

// Sub-components
const SearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="flex items-center gap-2">
    <input
      type="text"
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search all columns..."
      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

const TableContent = ({
  table,
}: {
  table: TanstackTable<WaitlistUser>;
}) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <TableHeader table={table} />
      <TableBody table={table} />
    </table>
  </div>
);

const TableHeader = ({
  table,
}: {
  table: TanstackTable<WaitlistUser>;
}) => (
  <thead className="bg-blue-50 dark:bg-blue-900/20">
    {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <th
            key={header.id}
            className="px-4 py-3 text-left text-xs font-semibold text-blue-900 dark:text-blue-100 uppercase tracking-wider"
            style={{ width: header.getSize() }}
          >
            {header.isPlaceholder
              ? null
              : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
          </th>
        ))}
      </tr>
    ))}
  </thead>
);

const TableBody = ({
  table,
}: {
  table: TanstackTable<WaitlistUser>;
}) => (
  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
    {table.getRowModel().rows.map((row, rowIndex) => (
      <tr
        key={row.id}
        className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        {row.getVisibleCells().map((cell) => (
          <td key={cell.id} className="px-4 py-3 whitespace-nowrap">
            {cell.column.id === "rowNumber"
              ? flexRender(cell.column.columnDef.cell, {
                  ...cell.getContext(),
                  row: { ...row, index: rowIndex },
                })
              : flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

const Pagination = ({
  table,
}: {
  table: TanstackTable<WaitlistUser>;
}) => {
  const { pagination } = table.getState();
  const filteredRowsLength = table.getFilteredRowModel().rows.length;
  const startRow = pagination.pageIndex * pagination.pageSize + 1;
  const endRow = Math.min(
    (pagination.pageIndex + 1) * pagination.pageSize,
    filteredRowsLength
  );

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-700 dark:text-gray-300">
        Showing {startRow} to {endRow} of {filteredRowsLength} results
      </div>
      <div className="flex items-center gap-2">
        <PaginationButton
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          icon={<ChevronLeft className="w-5 h-5" />}
        />
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Page {pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <PaginationButton
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          icon={<ChevronRight className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

const PaginationButton = ({
  onClick,
  disabled,
  icon,
}: {
  onClick: () => void;
  disabled: boolean;
  icon: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
  >
    {icon}
  </button>
);
