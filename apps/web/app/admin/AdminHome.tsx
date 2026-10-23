"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Plus, Search } from "lucide-react";


type User = {
  id: number;
  name: string;
  email: string;
  role: "Administrator" | "Moderator" | "Viewer";
  accountType: "PRO" | "Basic";
  rating: number;
  country: string;
  status: "Active" | "Inactive";
};

const initialUsers: User[] = [
  {
    id: 1,
    name: "Jese Leos",
    email: "jese@example.com",
    role: "Administrator",
    accountType: "PRO",
    rating: 4.7,
    country: "United States",
    status: "Active",
  },
  {
    id: 2,
    name: "Bonnie Green",
    email: "bonnie@example.com",
    role: "Viewer",
    accountType: "PRO",
    rating: 3.9,
    country: "United States",
    status: "Active",
  },
  {
    id: 3,
    name: "Leslie Livingston",
    email: "leslie@example.com",
    role: "Moderator",
    accountType: "PRO",
    rating: 4.8,
    country: "United States",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Micheal Gough",
    email: "micheal@example.com",
    role: "Moderator",
    accountType: "Basic",
    rating: 5.0,
    country: "France",
    status: "Active",
  },
  {
    id: 5,
    name: "Joseph McFall",
    email: "joseph@example.com",
    role: "Viewer",
    accountType: "Basic",
    rating: 4.2,
    country: "England",
    status: "Active",
  },
  {
    id: 6,
    name: "Robert Brown",
    email: "robert@example.com",
    role: "Viewer",
    accountType: "Basic",
    rating: 4.5,
    country: "Canada",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Karen Nelson",
    email: "karen@example.com",
    role: "Viewer",
    accountType: "PRO",
    rating: 4.1,
    country: "Canada",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Roberta Casas",
    email: "roberta@example.com",
    role: "Moderator",
    accountType: "PRO",
    rating: 2.0,
    country: "Australia",
    status: "Inactive",
  },
];

const selectClass =
  "w-full min-w-0 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-blue-500";

export default function AdminHomePage() {

  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");
  const [accountType, setAccountType] = useState("All");
  const [country, setCountry] = useState("All");
  const [selected, setSelected] = useState<number[]>([]);
  const [show, setShow] = useState("All");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        `${user.name} ${user.email}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        matchesSearch &&
        (role === "All" || user.role === role) &&
        (status === "All" || user.status === status) &&
        (accountType === "All" ||
          user.accountType === accountType) &&
        (country === "All" || user.country === country)
      );
    });
  }, [users, search, role, status, accountType, country]);

  function toggleUser(id: number) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id]
    );
  }

  function addUser() {
    const id = Math.max(0, ...users.map((user) => user.id)) + 1;

    setUsers((current) => [
      ...current,
      {
        id,
        name: `New User ${id}`,
        email: `user${id}@example.com`,
        role: "Viewer",
        accountType: "Basic",
        rating: 0,
        country: "United States",
        status: "Active",
      },
    ]);
  }

  return (
    <div className="space-y-5">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
        <a href="/admin" className="hover:text-white">
          Home
        </a>
        <span>/</span>
        <span>Platform</span>
        <span>/</span>
        <span className="text-blue-400">Users</span>
      </div>

      {/* Page title */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-bold text-white">
          All Users
        </h1>

        <button
          onClick={addUser}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium hover:bg-blue-700"
        >
          <Plus size={17} />
          Add new user
        </button>
      </div>

      {/* Filters */}
      <section className="space-y-4 border-b border-gray-800 pb-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-6">
          <label className="relative">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for users"
              aria-label="Search users"
              className={`${selectClass} pl-9`}
            />
          </label>

          <select
            aria-label="Filter by role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={selectClass}
          >
            <option value="All">Role</option>
            <option>Administrator</option>
            <option>Moderator</option>
            <option>Viewer</option>
          </select>

          <select
            aria-label="Filter by status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={selectClass}
          >
            <option value="All">Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <select
            aria-label="Filter by account type"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className={selectClass}
          >
            <option value="All">Account Type</option>
            <option>PRO</option>
            <option>Basic</option>
          </select>

          <select
            aria-label="Filter by country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={selectClass}
          >
            <option value="All">Country</option>
            {Array.from(
              new Set(users.map((user) => user.country))
            ).map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>

          <button
            onClick={() => {
              setSearch("");
              setRole("All");
              setStatus("All");
              setAccountType("All");
              setCountry("All");
            }}
            className="rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800"
          >
            Reset filters
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-300">
          <span className="font-medium text-white">Show:</span>

          {["All", "User Role", "Account Type", "Status", "Rating"].map(
            (value) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="show-columns"
                  value={value}
                  checked={show === value}
                  onChange={() => setShow(value)}
                  className="accent-blue-600"
                />
                {value}
              </label>
            )
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-gray-400">
            {filteredUsers.length} users found
          </span>

          <button
            onClick={() => {
              if (selected.length === 0) return;
              setUsers((current) =>
                current.filter((user) => !selected.includes(user.id))
              );
              setSelected([]);
            }}
            disabled={selected.length === 0}
            className="rounded-lg border border-gray-700 px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            Delete selected ({selected.length})
          </button>
        </div>
      </section>

      {/* Users table */}
      <section className="overflow-hidden rounded-lg border border-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm text-gray-300">
            <thead className="bg-gray-800 text-xs uppercase text-gray-400">
              <tr>
                <th className="px-4 py-4">
                  <input
                    type="checkbox"
                    aria-label="Select all filtered users"
                    checked={
                      filteredUsers.length > 0 &&
                      filteredUsers.every((user) =>
                        selected.includes(user.id)
                      )
                    }
                    onChange={(e) =>
                      setSelected((current) =>
                        e.target.checked
                          ? Array.from(
                              new Set([
                                ...current,
                                ...filteredUsers.map((user) => user.id),
                              ])
                            )
                          : current.filter(
                              (id) =>
                                !filteredUsers.some(
                                  (user) => user.id === id
                                )
                            )
                      )
                    }
                  />
                </th>
                <th className="px-4 py-4">User</th>
                {(show === "All" || show === "User Role") && (
                  <th className="px-4 py-4">User role</th>
                )}
                <th className="px-4 py-4">Email</th>
                {(show === "All" || show === "Account Type") && (
                  <th className="px-4 py-4">Account type</th>
                )}
                {(show === "All" || show === "Rating") && (
                  <th className="px-4 py-4">Rating</th>
                )}
                <th className="px-4 py-4">Country</th>
                {(show === "All" || show === "Status") && (
                  <th className="px-4 py-4">Status</th>
                )}
                <th className="px-4 py-4">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-800/70">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      aria-label={`Select ${user.name}`}
                      checked={selected.includes(user.id)}
                      onChange={() => toggleUser(user.id)}
                    />
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 font-medium text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-xs font-bold text-blue-200">
                        {user.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      {user.name}
                    </div>
                  </td>

                  {(show === "All" || show === "User Role") && (
                    <td className="px-4 py-4">
                      <span
                        className={`rounded px-2 py-1 text-xs font-medium ${
                          user.role === "Administrator"
                            ? "bg-blue-900 text-blue-200"
                            : user.role === "Moderator"
                              ? "bg-purple-900 text-purple-200"
                              : "bg-gray-700 text-gray-200"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                  )}

                  <td className="px-4 py-4">{user.email}</td>

                  {(show === "All" || show === "Account Type") && (
                    <td className="px-4 py-4">{user.accountType}</td>
                  )}

                  {(show === "All" || show === "Rating") && (
                    <td className="px-4 py-4">{user.rating.toFixed(1)}</td>
                  )}

                  <td className="px-4 py-4">{user.country}</td>

                  {(show === "All" || show === "Status") && (
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            user.status === "Active"
                              ? "bg-emerald-500"
                              : "bg-red-500"
                          }`}
                        />
                        {user.status}
                      </span>
                    </td>
                  )}

                  <td className="px-4 py-4">
                    <button
                      onClick={() => toggleUser(user.id)}
                      aria-label={`Select actions for ${user.name}`}
                      className="rounded px-2 py-1 hover:bg-gray-700"
                    >
                      <ChevronDown size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-12 text-center text-gray-400"
                  >
                    No users match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
