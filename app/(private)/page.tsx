"use client";
import { salesPeople, performance, kpiData } from './data';
import { HiInformationCircle } from "react-icons/hi2";

import {
  AreaChart,
  BadgeDelta,
  Card,
  Color,
  DeltaType,
  Flex,
  Grid,
  Icon,
  Metric,
  MultiSelect,
  MultiSelectItem,
  ProgressBar,
  Select,
  SelectItem,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

import { useState } from "react";

const usNumberformatter = (number: number, decimals = 0) =>
  Intl.NumberFormat("us", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(Number(number))
    .toString();

const formatters: { [key: string]: any } = {
  Sales: (number: number) => `$ ${usNumberformatter(number)}`,
  Profit: (number: number) => `$ ${usNumberformatter(number)}`,
  Customers: (number: number) => `${usNumberformatter(number)}`,
  Delta: (number: number) => `${usNumberformatter(number, 2)}%`,
};

const Kpis = {
  Sales: "Sales",
  Profit: "Profit",
  Customers: "Customers",
};

const kpiList = [Kpis.Sales, Kpis.Profit, Kpis.Customers];



export type SalesPerson = {
  name: string;
  leads: number;
  sales: string;
  quota: string;
  variance: string;
  region: string;
  status: string;
};

const deltaTypes: { [key: string]: DeltaType } = {
  average: "unchanged",
  overperforming: "moderateIncrease",
  underperforming: "moderateDecrease",
};

export default function FinalDashboard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedKpi = kpiList[selectedIndex];
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  const areaChartArgs = {
    className: "mt-5 h-72",
    data: performance,
    index: "date",
    categories: [selectedKpi],
    colors: ["blue"] as Color[],
    showLegend: false,
    valueFormatter: formatters[selectedKpi],
    yAxisWidth: 60,
  };
  
  return (
    <main className="p-4 md:p-10 mx-auto max-w-screen-2xl" >
      <Title>Dashboard</Title>
      <Text>Tenha uma ampla visão sobre os resultados de Venda e Faturamento.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Visão Geral</Tab>
          <Tab>Detalhes</Tab>
        </TabList>
        <TabPanels>
          
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
              {kpiData.map((item) => (
                <Card key={item.title}>
                  <Flex alignItems="start">
                    <div className="truncate">
                      <Text>{item.title}</Text>
                      <Metric className="truncate">{item.metric}</Metric>
                    </div>
                    <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
                  </Flex>
                  <Flex className="mt-4 space-x-2">
                    <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
                    <Text className="truncate">{item.target}</Text>
                  </Flex>
                  <ProgressBar value={item.progress} className="mt-2" />
                </Card>
              ))}
            </Grid>
            <div className="mt-6">
              <Card>
                <>
                  <div className="md:flex justify-between">
                    <div>
                      <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
                        <Title> Histórico de Performance </Title>
                        <Icon
                          icon={HiInformationCircle}
                          variant="simple"
                          tooltip="Exibe o aumento ou diminuição diária de um dado específico"
                        />
                      </Flex>
                      <Text> Atualizações diárias </Text>
                    </div>
                    <div>
                      <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
                        <TabList color="gray" variant="solid">
                          <Tab>Vendas</Tab>
                          <Tab>Lucro</Tab>
                          <Tab>Clientes</Tab>
                        </TabList>
                      </TabGroup>
                    </div>
                  </div>
                  {/* web */}
                  <div className="mt-8 hidden sm:block">
                    <AreaChart {...areaChartArgs} />
                  </div>
                  {/* mobile */}
                  <div className="mt-8 sm:hidden">
                    <AreaChart
                      {...areaChartArgs}
                      startEndOnly={true}
                      showGradient={false}
                      showYAxis={false}
                    />
                  </div>
                </>
              </Card>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="mt-6">
              <Card>
                <>
                  <div>
                    <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
                      <Title> Histórico de Performance </Title>
                      <Icon
                        icon={HiInformationCircle}
                        variant="simple"
                        tooltip="Exibe o desempenho de vendas por funcionário"
                      />
                    </Flex>
                  </div>
                  <div className="flex space-x-2">
                    <MultiSelect
                      className="max-w-full sm:max-w-xs"
                      onValueChange={setSelectedNames}
                      placeholder="Select Salespeople..."
                    >
                      {salesPeople.map((item) => (
                        <MultiSelectItem key={item.name} value={item.name}>
                          {item.name}
                        </MultiSelectItem>
                      ))}
                    </MultiSelect>
                    <Select
                      className="max-w-full sm:max-w-xs"
                      defaultValue="all"
                      onValueChange={setSelectedStatus}
                    >
                      <SelectItem value="all">Todas Performances</SelectItem>
                      <SelectItem value="overperforming">Desempenho superior</SelectItem>
                      <SelectItem value="average">Desempenho na média</SelectItem>
                      <SelectItem value="underperforming">Desempenho insatisfatório</SelectItem>
                    </Select>
                  </div>
                  <Table className="mt-6">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Nome</TableHeaderCell>
                        <TableHeaderCell className="text-right">Leads</TableHeaderCell>
                        <TableHeaderCell className="text-right">Vendas (R$)</TableHeaderCell>
                        <TableHeaderCell className="text-right">Lucro (R$)</TableHeaderCell>
                        <TableHeaderCell className="text-right">Variação</TableHeaderCell>
                        <TableHeaderCell className="text-right">Região</TableHeaderCell>
                        <TableHeaderCell className="text-right">Status</TableHeaderCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {salesPeople
                        .filter((item) => isSalesPersonSelected(item))
                        .map((item) => (
                          <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="text-right">{item.leads}</TableCell>
                            <TableCell className="text-right">{item.sales}</TableCell>
                            <TableCell className="text-right">{item.quota}</TableCell>
                            <TableCell className="text-right">{item.variance}</TableCell>
                            <TableCell className="text-right">{item.region}</TableCell>
                            <TableCell className="text-right">
                              <BadgeDelta deltaType={deltaTypes[item.status]} size="xs">
                                {item.status}
                              </BadgeDelta>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </>
              </Card>
            </div>
          </TabPanel>

        </TabPanels>
      </TabGroup>
    </main>
  );
}