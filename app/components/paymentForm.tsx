// PaymentInfoForm.tsx
import { useState } from "react";
import { SearchSelect, SearchSelectItem, NumberInput, Title, TextInput, Text } from "@tremor/react";
import { HiMagnifyingGlass, HiOutlineCurrencyDollar } from "react-icons/hi2";
import { CgMathPercent } from "react-icons/cg";

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

export const paymentMethods = ["Credit Card", "Bank Transfer", "Cash"];
export const banks = ["Bank A", "Bank B", "Bank C"];

export default function PaymentInfoForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bank, setBank] = useState("");
  const [discount, setDiscount] = useState(0);
  const [salesPerson, setSalesPerson] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  return (
    <>
      <Title>Informações de Pagamento</Title>
      <div className="flex flex-col space-y-4 max-h-80">
        <div className="flex flex-col space-y-2">
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
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-2 w-full md:w-1/2">
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
          </div>
          <div className="flex flex-col space-y-2 w-full md:w-1/2">
            <Text>Desconto</Text>
            <NumberInput
              icon={HiOutlineCurrencyDollar}
              onValueChange={setDiscount}
              placeholder="Adicione um desconto..."
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-2 w-full md:w-1/2">
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
          </div>
          <div className="flex flex-col space-y-2 w-full md:w-1/2">
            <Text>Número da Conta</Text>
            <TextInput
              onValueChange={setAccountNumber}
              placeholder="Insira o número da conta..."
            />
          </div>
        </div>
      </div>
    </>
  );
}