// expedition/page.tsx
'use client'
import React, { useState } from 'react';
import ExpeditionLayout from './components/expedition';
import CombinedProvider from 'app/contexts/combinedProvider';

export default function ExpeditionPage() {
  const [step, setStep] = useState('table');
  const [selectedOF, setSelectedOF] = useState(null);
  const [attachedItems, setAttachedItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  return (
    <CombinedProvider>
      <main className="p-4 md:p-10 mx-auto max-w-3x1">
        <ExpeditionLayout onBack={() => setStep('table')} selectedOF={selectedOF} attachedItems={attachedItems} savedItems={savedItems} setSavedItems={setSavedItems} />
      </main>
    </CombinedProvider>
  );
}