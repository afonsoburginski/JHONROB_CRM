/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useTable } from 'react-table';
import jsPDF from 'jspdf';

const ContractsTable = ({ contracts }) => {
  const columns = [
    {
      Header: 'Contrato ID',
      accessor: 'id',
    },
    {
      Header: 'Nome do Produto',
      accessor: 'productName',
    },
    {
      Header: 'Modelo',
      accessor: 'model',
    },
    {
      Header: 'Capacidade',
      accessor: 'capacity',
    },
    {
      Header: 'Ações',
      accessor: 'actions',
      Cell: ({ row }) => (
        <button onClick={() => generatePDF(row.original)}>Imprimir</button>
      ),
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: contracts });

  const generatePDF = (contract) => {
    const pdfDoc = new jsPDF();
    // Adicione os detalhes do contrato ao PDF
    pdfDoc.text(`Contrato ID: ${contract.id}`, 20, 20);
    pdfDoc.text(`Nome do Produto: ${contract.productName}`, 20, 30);
    pdfDoc.text(`Modelo: ${contract.model}`, 20, 40);
    pdfDoc.text(`Capacidade: ${contract.capacity}`, 20, 50);

    // Salve ou exiba o PDF conforme necessário
    pdfDoc.save(`contract_${contract.id}.pdf`);
  };

  return (
    <div>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', padding: '10px' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip' }}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContractsTable;
