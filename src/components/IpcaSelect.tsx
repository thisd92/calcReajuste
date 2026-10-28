'use client';

import { useEffect, useState } from "react";
import { fetchIpcaOptions } from "@/services/ipcaService";
import { IpcaOption } from "@/types/ipca";

interface IpcaSelectProps {
  label: string;
  id: string;
  value: string;
  onChange: (selected: IpcaOption | null) => void;
}

export function IpcaSelect({ label, id, value, onChange }: IpcaSelectProps) {
  const [options, setOptions] = useState<IpcaOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await fetchIpcaOptions();
      setOptions(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const option = options.find((opt) => opt.value === selectedValue) || null;
    onChange(option);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      {loading ? (
        <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md" />
      ) : (
        <select
          id={id}
          value={value}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          <option value="">Selecione o Mês/Ano</option>
          {options.map((opt) => (
            <option key={`${id}-${opt.value}`} value={opt.value}>
              {opt.label} (Índice: {opt.indice})
            </option>
          ))}
        </select>
      )}
    </div>
  );
}