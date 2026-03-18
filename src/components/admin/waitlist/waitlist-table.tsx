"use client";

import { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type FilterFn,
  type SortingState,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";
import { formatWaitlistDate, isDateWithinPreset } from "@/lib/admin-waitlist";
import type { WaitlistTableProps, WaitlistUser } from "@/types";
import WaitlistActions from "./waitlist-actions";

const PAGE_SIZE_OPTIONS = [20, 50, 100];
type WalletFilterValue = "all" | "connected" | "missing";
type DateFilterValue = "all" | "today" | "7d" | "30d";

const globalSearchFilter: FilterFn<WaitlistUser> = (row, _columnId, value) => {
  const search = String(value || "").trim().toLowerCase();

  if (!search) {
    return true;
  }

  return [row.original.email, row.original.address ?? ""].some((field) =>
    field.toLowerCase().includes(search)
  );
};

const walletStatusFilter: FilterFn<WaitlistUser> = (row, _columnId, value) => {
  if (!value || value === "all") {
    return true;
  }

  return value === "connected"
    ? Boolean(row.original.address)
    : !row.original.address;
};

const datePresetFilter: FilterFn<WaitlistUser> = (row, _columnId, value) => {
  if (!value || value === "all") {
    return true;
  }

  return isDateWithinPreset(
    row.original.createdAt,
    value as DateFilterValue
  );
};

const columns: ColumnDef<WaitlistUser>[] = [
  {
    id: "rowNumber",
    header: "#",
    cell: ({ row, table }) => {
      const { pageIndex, pageSize } = table.getState().pagination;
      return pageIndex * pageSize + table.getRowModel().rows.indexOf(row) + 1;
    },
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <button
        className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="w-4 h-4" />
      </button>
    ),
    cell: ({ row }) => (
      <div className="font-medium text-gray-900 dark:text-white">
        {row.original.email}
      </div>
    ),
  },
  {
    id: "walletStatus",
    accessorFn: (row) => (row.address ? "Connected" : "Missing"),
    filterFn: walletStatusFilter,
    header: ({ column }) => (
      <button
        className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Wallet Status
        <ArrowUpDown className="w-4 h-4" />
      </button>
    ),
    cell: ({ row }) =>
      row.original.address ? (
        <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
          Connected
        </span>
      ) : (
        <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
          Missing
        </span>
      ),
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <button
        className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Wallet Address
        <ArrowUpDown className="w-4 h-4" />
      </button>
    ),
    cell: ({ row }) => (
      <div className="max-w-[220px] truncate font-mono text-xs text-gray-600 dark:text-gray-300">
        {row.original.address || "Not connected"}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    filterFn: datePresetFilter,
    header: ({ column }) => (
      <button
        className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Joined At
        <ArrowUpDown className="w-4 h-4" />
      </button>
    ),
    cell: ({ row }) => (
      <div className="text-sm text-gray-600 dark:text-gray-300">
        {formatWaitlistDate(row.original.createdAt)}
      </div>
    ),
  },
];

export default function WaitlistTable({
  users,
  onRefresh,
  isRefreshing = false,
}: WaitlistTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "createdAt", desc: true },
  ]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [walletFilter, setWalletFilter] =
    useState<WalletFilterValue>("all");
  const [dateFilter, setDateFilter] = useState<DateFilterValue>("all");

  // React Compiler can't safely memoize TanStack Table's returned API.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: users,
    columns,
    state: {
      sorting,
      globalFilter,
      columnFilters,
    },
    filterFns: {
      walletStatus: walletStatusFilter,
      datePreset: datePresetFilter,
    },
    globalFilterFn: globalSearchFilter,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  });

  const filteredRows = table.getFilteredRowModel().rows;
  const filteredCount = filteredRows.length;
  const currentRows = table.getRowModel().rows;

  const handleWalletFilterChange = (value: WalletFilterValue) => {
    setWalletFilter(value);
    table.getColumn("walletStatus")?.setFilterValue(
      value === "all" ? undefined : value
    );
    table.setPageIndex(0);
  };

  const handleDateFilterChange = (value: DateFilterValue) => {
    setDateFilter(value);
    table.getColumn("createdAt")?.setFilterValue(
      value === "all" ? undefined : value
    );
    table.setPageIndex(0);
  };

  const handleExport = () => {
    if (filteredCount === 0) {
      return;
    }

    const rows = filteredRows.map((row, index) => [
      index + 1,
      row.original.email,
      row.original.address || "",
      row.original.address ? "Connected" : "Missing",
      formatWaitlistDate(row.original.createdAt),
    ]);

    const csvContent = [
      ["No", "Email", "Wallet Address", "Wallet Status", "Joined At"].join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `waitlist-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const connectedWallets = useMemo(
    () => users.filter((user) => Boolean(user.address)).length,
    [users]
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={globalFilter}
              onChange={(event) => {
                setGlobalFilter(event.target.value);
                table.setPageIndex(0);
              }}
              placeholder="Search email or wallet address"
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <select
            value={walletFilter}
            onChange={(event) =>
              handleWalletFilterChange(
                event.target.value as WalletFilterValue
              )
            }
            className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          >
            <option value="all">All wallets</option>
            <option value="connected">Connected</option>
            <option value="missing">Missing</option>
          </select>

          <select
            value={dateFilter}
            onChange={(event) =>
              handleDateFilterChange(event.target.value as DateFilterValue)
            }
            className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          >
            <option value="all">All time</option>
            <option value="today">Today</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
          </select>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span>{connectedWallets} connected wallets</span>
          <button
            onClick={() => {
              setGlobalFilter("");
              handleWalletFilterChange("all");
              handleDateFilterChange("all");
              setSorting([{ id: "createdAt", desc: true }]);
            }}
            className="rounded-lg border border-gray-300 px-3 py-2 text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            Clear filters
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900/60">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-300"
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

          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
            {currentRows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-10 text-center text-sm text-gray-500 dark:text-gray-400"
                >
                  No waitlist entries match the current filters.
                </td>
              </tr>
            ) : (
              currentRows.map((row) => (
                <tr
                  key={row.id}
                  className="transition hover:bg-gray-50 dark:hover:bg-gray-900/40"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 align-middle text-sm"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
          <span>
            Showing{" "}
            {filteredCount === 0
              ? 0
              : table.getState().pagination.pageIndex *
                  table.getState().pagination.pageSize +
                1}
            -
            {Math.min(
              (table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize,
              filteredCount
            )}{" "}
            of {filteredCount}
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(event) => table.setPageSize(Number(event.target.value))}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          >
            {PAGE_SIZE_OPTIONS.map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} / page
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="rounded-lg border border-gray-300 p-2 text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="rounded-lg border border-gray-300 p-2 text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="px-2 text-sm text-gray-600 dark:text-gray-300">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount() || 1}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="rounded-lg border border-gray-300 p-2 text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="rounded-lg border border-gray-300 p-2 text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <WaitlistActions
        onRefresh={onRefresh}
        userCount={users.length}
        filteredCount={filteredCount}
        isLoading={isRefreshing}
        onExport={handleExport}
      />
    </div>
  );
}
