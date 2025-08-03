'use client';

import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <input
      className="border p-2 rounded w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
