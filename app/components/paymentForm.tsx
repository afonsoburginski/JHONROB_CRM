// PaymentInfoForm.tsx
import { useState } from "react";
import { HiMagnifyingGlass, HiOutlineCurrencyDollar } from "react-icons/hi2";
import { CgMathPercent } from "react-icons/cg";
import { Grid, Flex, SearchSelect, SearchSelectItem, NumberInput, Title, TextInput, Text } from "@tremor/react";

export type SalesPerson = {
  name: string;
};

export const salesPeople: SalesPerson[] = [
  { name: "Peter Doe" },
  { name: "Lena Whitehouse" },
  { name: "Phil Less" },
  { name: "John Camper" },
  { name: "Max Balmoore" },
];

export const company = ["Jhonrob Matriz", "Jhonrob Filial"];
export const paymentMethods = ["Boleto Bancário", "Transferência Bancária", "Commodities"];
export const banks = ["Banco A", "Banco B", "Banco C"];

export default function PaymentInfoForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [discount, setDiscount] = useState(0);
  const [bank, setBank] = useState("");
  const [bankAgency, setBankAgency] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  return (
    <>
      <Title>Informações de Pagamento</Title>
      <Grid className="space-y-4 h-60 mb-20 w-full">

        <Flex className="space-x-10 w-full mt-4">
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/2">
            <Text>Empresa</Text>
            <SearchSelect
              onValueChange={setPaymentMethod}
              placeholder="Selecione o Método de Pagamento..."
            >
              {company.map((method, index) => (
                <SearchSelectItem key={index} value={method}>
                  {method}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </Flex>
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/2">
            <Text>Método de Pagamento</Text>
            <SearchSelect
              onValueChange={setPaymentMethod}
              placeholder="Selecione o Método de Pagamento..."
            >
              {paymentMethods.map((method, index) => (
                <SearchSelectItem key={index} value={method}>
                  {method}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </Flex>
        </Flex>

        <Flex className="space-x-10 w-full">
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/2">
            <Text>Parcelamento</Text>
            <NumberInput
              icon={HiOutlineCurrencyDollar}
              onValueChange={setDiscount}
              placeholder="Adicione um desconto..."
            />
          </Flex>
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/2">
            <Text>Vendedor</Text>
            <SearchSelect
              onValueChange={setSalesPerson}
              placeholder="Selecione o Vendedor..."
            >
              {salesPeople.map((person) => (
                <SearchSelectItem key={person.name} value={person.name}>
                  {person.name}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </Flex>
        </Flex>

        <Flex className="space-x-10 w-full">
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/3">
            <Text>Banco</Text>
            <SearchSelect
              onValueChange={setBank}
              placeholder="Selecione o Banco..."
            >
              {banks.map((bank, index) => (
                <SearchSelectItem key={index} value={bank}>
                  {bank}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </Flex>
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/3">
            <Text>Agência</Text>
            <TextInput
              onValueChange={setBankAgency}
              placeholder="Insira a agência do banco..."
            />
          </Flex>
          <Flex flexDirection="col" alignItems="start" className="space-y-2 w-full md:w-1/3">
            <Text>Número da Conta</Text>
            <TextInput
              onValueChange={setAccountNumber}
              placeholder="Insira o número da conta..."
            />
          </Flex>
        </Flex>

      </Grid>
    </>
  );
};