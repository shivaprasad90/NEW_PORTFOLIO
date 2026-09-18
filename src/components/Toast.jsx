import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <CheckCircle className="toast-icon" size={20} />
        <span>{message}</span>
      </div>
    </div>
  );
}
