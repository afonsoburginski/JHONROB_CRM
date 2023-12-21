// paymentForm.tsx
'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiMagnifyingGlass, HiOutlineCurrencyDollar } from "react-icons/hi2";
import { CgMathPercent } from "react-icons/cg";
import { Grid, Flex, SearchSelect, SearchSelectItem, NumberInput, Title, TextInput, Text } from "@tremor/react";
import { usePaymentInfo } from '../contexts/paymentInfoContext'; // Importe o usePaymentInfo

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
  const { setPaymentInfo } = usePaymentInfo();

  const [data, setData] = useState({
    salesPeople: [],
    companies: [],
    paymentMethods: [],
    banks: [],
    installments: [],
  });

  useEffect(() => {
    axios.get('http://localhost:3000/api/payment')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (bank) {
      const selectedBank = data.banks.find(b => b.title === bank);
      if (selectedBank) {
        setBankAgency(selectedBank.agency);
        setAccountNumber(selectedBank.account);
      }
    }
  }, [bank]);

  useEffect(() => {
    setPaymentInfo({
      paymentMethod,
      salesPerson,
      installment,
      bank,
      bankAgency,
      accountNumber,
      company
    });
  }, [paymentMethod, salesPerson, installment, bank, bankAgency, accountNumber, company]);

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
                  setPaymentInfo(prevState => ({ ...prevState, company: value }));
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
                setPaymentInfo(prevState => ({ ...prevState, paymentMethod: value }));
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
                setPaymentInfo(prevState => ({ ...prevState, installment: value }));
              }}
              placeholder="Selecione o Parcelamento..."
            >
              {data.installments && data.installments.map((installment, index) => (
                installment ? (
                  <SearchSelectItem key={index} value={installment.numberOfInstallments}>
                    {`${installment.numberOfInstallments} parcelas - taxa de juros: ${installment.interestRate}%`}
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
                setPaymentInfo(prevState => ({ ...prevState, salesPerson: value }));
              }}
              placeholder="Selecione o Vendedor..."
            >
              {data.salesPeople?.map((person) => (
                person && person.name ? (
                  <SearchSelectItem key={person.name} value={person.name}>
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
                setPaymentInfo(prevState => ({ ...prevState, bank: value }));
              }}
              placeholder="Selecione o Banco..."
            >
              {data.banks?.map((bank, index) => (
                bank && bank.title ? (
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
                setPaymentInfo(prevState => ({ ...prevState, bankAgency: value }));
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
                setPaymentInfo(prevState => ({ ...prevState, accountNumber: value }));
              }}
              placeholder="Insira o número da conta..."
            />
          </Flex>
        </Flex>
  
      </Grid>
    </>
  );
};