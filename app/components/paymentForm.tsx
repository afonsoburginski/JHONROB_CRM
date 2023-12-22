// paymentForm.tsx
'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiMagnifyingGlass, HiOutlineCurrencyDollar } from "react-icons/hi2";
import { CgMathPercent } from "react-icons/cg";
import { Grid, Flex, SearchSelect, SearchSelectItem, NumberInput, Title, TextInput, Text } from "@tremor/react";
import { PaymentInfoType, usePaymentInfo } from '../contexts/paymentInfoContext';

export type SalesPerson = {
  name: string;
};

export default function PaymentInfoForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [installment, setInstallment] = useState("");
  const [bank, setBank] = useState("");
  const [bankAgency, setBankAgency] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [company, setCompany] = useState("");
  
  const paymentInfoContext = usePaymentInfo();
  const setPaymentInfo = paymentInfoContext?.setPaymentInfo;

  const [data, setData] = useState<{
    salesPeople: { name: string }[];
    companies: { name: string }[];
    paymentMethods: { title: string }[];
    banks: { title: string }[];
    installments: { numberOfInstallments: number, interestRate: number }[];
  }>({
    salesPeople: [],
    companies: [],
    paymentMethods: [],
    banks: [],
    installments: [],
  });

  const updatePaymentInfo = (field: keyof PaymentInfoType, value: string) => {
    if (setPaymentInfo) {
      setPaymentInfo(prevState => prevState);
    }
  };

  return (
    <>
      <Title>Informações de Pagamento</Title>
      <Grid className="space-y-4 h-60 mb-20 w-full">
  
        <Flex className="space-x-10 w-full mt-4">
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/2">
            <Text>Empresa</Text>
            <SearchSelect
              onValueChange={(value) => {
                setCompany(value);
                updatePaymentInfo('company', value);
              }}
              placeholder="Selecione a Empresa..."
            >
              {data.companies && data.companies.map((company, index) => (
                company && company.name ? (
                  <SearchSelectItem key={index} value={company.name}>
                    {company.name}
                  </SearchSelectItem>
                ) : null
              ))}
            </SearchSelect>
          </Flex>
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/2">
            <Text>Método de Pagamento</Text>
              <SearchSelect
                onValueChange={(value) => {
                  setPaymentMethod(value);
                  updatePaymentInfo('paymentMethod', value);
                }}
                placeholder="Selecione o método de pagamento..."
              >
              {data.paymentMethods && data.paymentMethods.map((method, index) => (
                method && method.title ? (
                  <SearchSelectItem key={index} value={method.title}>
                    {method.title}
                  </SearchSelectItem>
                ) : null
              ))}
            </SearchSelect>
          </Flex>
        </Flex>
  
        <Flex className="space-x-10 w-full">
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/2">
            <Text>Parcelamento</Text>
            <SearchSelect
              onValueChange={(value) => {
                setInstallment(value);
                updatePaymentInfo('installment', value);
              }}
              placeholder="Selecione o Parcelamento..."
            >
              {data.installments && data.installments.map((installment, index) => (
                installment ? (
                  <SearchSelectItem key={index} value={installment.numberOfInstallments.toString()}>
                    {`Parcelas: ${installment.numberOfInstallments}, Taxa de juros: ${installment.interestRate}`}
                  </SearchSelectItem>
                ) : null
              ))}
            </SearchSelect>
          </Flex>
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/2">
            <Text>Vendedor</Text>
            <SearchSelect
              onValueChange={(value) => {
                setSalesPerson(value);
                updatePaymentInfo('salesPerson', value);
              }}
              placeholder="Selecione o Vendedor..."
            >
              {data.salesPeople?.map((person, index) => (
                person ? (
                  <SearchSelectItem key={index} value={person.name}>
                    {person.name}
                  </SearchSelectItem>
                ) : null
              ))}
            </SearchSelect>
          </Flex>
        </Flex>
  
        <Flex className="space-x-10 w-full">
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/3">
            <Text>Banco</Text>
            <SearchSelect
              onValueChange={(value) => {
                setBank(value);
                updatePaymentInfo('bank', value);
              }}
              placeholder="Selecione o Banco..."
            >
              {data.banks?.map((bank, index) => (
                bank ? (
                  <SearchSelectItem key={index} value={bank.title}>
                    {bank.title}
                  </SearchSelectItem>
                ) : null
              ))}
            </SearchSelect>
          </Flex>
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/3">
            <Text>Agência</Text>
            <TextInput
              value={bankAgency}
              onValueChange={(value) => {
                setBankAgency(value);
                updatePaymentInfo('bankAgency', value);
              }}
              placeholder="Insira a agência do banco..."
            />
          </Flex>
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/3">
            <Text>Número da Conta</Text>
            <TextInput
              value={accountNumber}
              onValueChange={(value) => {
                setAccountNumber(value);
                updatePaymentInfo('accountNumber', value);
              }}
              placeholder="Insira o número da conta..."
            />
          </Flex>
        </Flex>
  
      </Grid>
    </>
  );
};