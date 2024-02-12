// expedition/page.tsx
'use client'
import React, { useState } from 'react';
import ExpeditionTable from './expeditionTable';
import ExpeditionLayout from './expedition';
import CombinedProvider from 'app/contexts/combinedProvider';

export default function ExpeditionPage() {
  const [step, setStep] = useState('table');
  const [selectedOF, setSelectedOF] = useState(null);
  const [attachedItems, setAttachedItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  return (
    <CombinedProvider>
      <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
        {step === 'table' ? (
          <ExpeditionTable searchParams={{ q: '' }} onNext={() => setStep('layout')} selectedOF={selectedOF} setSelectedOF={setSelectedOF} attachedItems={attachedItems} setAttachedItems={setAttachedItems} savedItems={savedItems} setSavedItems={setSavedItems} /> // Adicione savedItems e setSavedItems aqui
        ) : (
          <ExpeditionLayout onBack={() => setStep('table')} selectedOF={selectedOF} attachedItems={attachedItems} savedItems={savedItems} setSavedItems={setSavedItems} /> // Adicione savedItems e setSavedItems aqui
        )}
      </main>
    </CombinedProvider>
  );
}