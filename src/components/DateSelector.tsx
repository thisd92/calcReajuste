"use client";

import { IpcaOption } from "@/types/ipca";

interface DateSelectorProps {
  id: string;
  label: string;
  value: string;
  onChange: (dateValue: string) => void;
  indiceEncontrado?: IpcaOption | null;
  helpText?: string;
}

export function DateSelector({
  id,
  label,
  value,
  onChange,
  indiceEncontrado,
  helpText,
}: DateSelectorProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Rótulo com altura mínima fixa para alinhar os inputs no mesmo nível */}
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 dark:text-gray-300 min-h-[42px] flex items-end mb-1"
      >
        {label}
      </label>

      {/* Input de Data */}
      <input
        type="date"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      />

      {/* Área de Ajuda e Feedback de Índice */}
      <div className="mt-1 flex flex-col gap-0.5 min-h-[38px]">
        {helpText && <span className="text-xs text-gray-500">{helpText}</span>}

        {value && (
          <div className="text-xs">
            {indiceEncontrado ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                ✓ IPCA de {indiceEncontrado.label}:{" "}
                <strong>{indiceEncontrado.indice}</strong>
              </span>
            ) : (
              <span className="text-amber-600 dark:text-amber-400 font-medium">
                ⚠ Índice ainda não divulgado para este mês.
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
