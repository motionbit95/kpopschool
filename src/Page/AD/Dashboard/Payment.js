import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { host_url, popblue, popyellow, popmint, popmag } from "../../../App";

// 총 수입과 VAT 계산 함수
function calculateTotalIncomeAndVAT(preTaxAmount, vatRate) {
  const vat = preTaxAmount * (vatRate / 100);
  const totalIncome = preTaxAmount + vat;
  return {
    totalIncome,
    vat,
  };
}

// 함수: 주어진 날짜를 기준으로 일주일 범위의 시작과 끝 날짜를 반환
const getWeekDateRange = (baseDate) => {
  const start = new Date(baseDate);
  const end = new Date(baseDate);
  start.setDate(baseDate.getDate() - 6); // 일주일 전으로 설정
  return formatDateRange(start, end);
};

// 함수: 주어진 날짜를 기준으로 한 달 범위의 시작과 끝 날짜를 반환
const getMonthDateRange = (baseDate) => {
  const start = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1); // 이번 달의 첫째 날
  const end = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0); // 이번 달의 마지막 날
  return formatDateRange(start, end);
};

// 함수: 주어진 날짜를 기준으로 세 달 범위의 시작과 끝 날짜를 반환
const get3MonthDateRange = (baseDate) => {
  const start = new Date(baseDate.getFullYear(), baseDate.getMonth() - 2, 1); // 세 달 전의 첫째 날
  const end = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0); // 이번 달의 마지막 날
  return formatDateRange(start, end);
};

// 함수: 시작과 끝 날짜를 MM/DD/YY - MM/DD/YY 형식의 문자열로 포맷팅
const formatDateRange = (start, end) => {
  const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
  const formattedStart = start.toLocaleDateString("en-US", options);
  const formattedEnd = end.toLocaleDateString("en-US", options);
  return `${formattedStart} - ${formattedEnd}`;
};

const currencyFormatter = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number / 100);
};

const currencyFormatter2 = (number) => {
  return number / 100;
};

const dateFormatter = (sec) => {
  // 주어진 타임스탬프를 밀리초 단위로 변환 (타임스탬프는 초 단위로 주어짐)
  const timestamp = sec * 1000;

  // Date 객체를 생성
  const date = new Date(timestamp);

  // 일, 월, 연도를 가져와 두 자릿수로 포맷팅
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const year = date.getFullYear();

  // DD-MM-YYYY 형식의 문자열 생성
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate; // 예: 10-08-2024
};

const getDivision = (data) => {
  const sums = data.reduce((acc, item) => {
    // item.column 값에 따라 값을 합산
    if (item.curriculum.category === "Dance") {
      acc.Dance = (acc.Dance || 0) + 1;
    } else if (item.curriculum.category === "Vocal") {
      acc.Vocal = (acc.Vocal || 0) + 1;
    }
    return acc;
  }, {});
  return sums;
};

const getGender = (data) => {
  const sums = data.reduce((acc, item) => {
    // item.column 값에 따라 값을 합산
    if (item.user.gender === "male") {
      acc.Man = (acc.Man || 0) + 1;
    } else if (item.user.gender === "female") {
      acc.Woman = (acc.Woman || 0) + 1;
    }
    return acc;
  }, {});
  return sums;
};

const getCount = (data) => {
  const sums = data.reduce((acc, item) => {
    // item.column 값에 따라 값을 합산
    if (item.curriculum.difficulty === "Beginner") {
      acc.Beginner = (acc.Beginner || 0) + 1;
    } else if (item.curriculum.difficulty === "Intermediate") {
      acc.Intermediate = (acc.Intermediate || 0) + 1;
    } else if (item.curriculum.difficulty === "Advanced") {
      acc.Advanced = (acc.Advanced || 0) + 1;
    } else if (item.curriculum.difficulty === "Professional") {
      acc.Professional = (acc.Professional || 0) + 1;
    }
    return acc;
  }, {});

  // 가장 높은 값 찾기
  const maxValue = Math.max(...Object.values(sums));

  // 값들을 가장 높은 값으로 나누어 비율을 구하기
  const normalizedData = Object.keys(sums).reduce((acc, key) => {
    acc[key] = (sums[key] / maxValue).toFixed(2); // 소수점 두 자리로 설정
    return acc;
  }, {});

  return { normalizedData, sums };
};

const getRatio = (data) => {
  // 값 A, B, C의 합을 저장할 객체
  const sums = data.reduce((acc, item) => {
    // item.column 값에 따라 값을 합산
    if (item.curriculum.difficulty === "Beginner") {
      acc.Beginner = (acc.Beginner || 0) + item.amount / 100;
    } else if (item.curriculum.difficulty === "Intermediate") {
      acc.Intermediate = (acc.Intermediate || 0) + item.amount / 100;
    } else if (item.curriculum.difficulty === "Advanced") {
      acc.Advanced = (acc.Advanced || 0) + item.amount / 100;
    } else if (item.curriculum.difficulty === "Professional") {
      acc.Professional = (acc.Professional || 0) + item.amount / 100;
    }
    return acc;
  }, {});

  // 가장 높은 값 찾기
  const maxValue = Math.max(...Object.values(sums));

  // 값들을 가장 높은 값으로 나누어 비율을 구하기
  const normalizedData = Object.keys(sums).reduce((acc, key) => {
    acc[key] = (sums[key] / maxValue).toFixed(2); // 소수점 두 자리로 설정
    return acc;
  }, {});

  return { normalizedData, sums };
};

const Payment = () => {
  // 데이터 관련
  const [paymentList, setPaymentList] = useState([]);

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(paymentList.length / ITEMS_PER_PAGE);
  const [buttonTab, setButtonTab] = useState(0);
  const [income, setIncome] = useState({});
  const [incomeSums, setIncomeSums] = useState({});
  const [counts, setCounts] = useState({});
  const [countSums, setCountSums] = useState({});
  const [division, setDivision] = useState({});
  const [gender, setGender] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const handleButtonDate = (index) => {
    setButtonTab(index);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // 버튼 클릭 핸들러: 각 버튼에 따라 날짜 범위를 설정
  const handleDateRangeButtonClick = (rangeType) => {
    const today = new Date();
    let rangeString = "";

    switch (rangeType) {
      case "week":
        rangeString = getWeekDateRange(today);
        break;
      case "month":
        rangeString = getMonthDateRange(today);
        break;
      case "3month":
        rangeString = get3MonthDateRange(today);
        break;
      default:
        break;
    }

    // startDate와 endDate 상태 업데이트
    const [start, end] = rangeString.split(" - ");
    setStartDate(start);
    setEndDate(end);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = paymentList.slice(startIndex, endIndex);

  const [vat, setVat] = useState(0);
  const [preAmount, setPreAmount] = useState(0);

  useEffect(() => {
    // 모든 결제 데이터를 가지고 온다
    const getPayment = async () => {
      fetch(`${host_url}/payment/list`)
        .then((res) => res.json())
        .then((data) => {
          let paymentList = [];
          data.forEach((element) => {
            let pid = element?.items[0]?.price?.product;
            let uid = element?.uid;
            let user = {};

            // 유저 정보를 가지고 온다
            fetch(`${host_url}/users/get`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: uid,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                user = res;
              })
              .catch((err) => {
                console.log(err);
              });
            // 상품 정보를 가지고 온다
            fetch(`${host_url}/payment/get/product/${pid}`)
              .then((res) => res.json())
              .then((res) => {
                paymentList.push({ ...element, user: user, curriculum: res });

                // console.log(paymentList.length, data.length);
                if (paymentList.length === data.length) {
                  setPaymentList(paymentList);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getPayment();
  }, []);

  useEffect(() => {
    let data = getRatio(paymentList);
    setIncome(data.normalizedData);
    setIncomeSums(data.sums);

    let count = getCount(paymentList);
    setCounts(count.normalizedData);
    setCountSums(count.sums);

    let division = getDivision(paymentList);
    setDivision(division);

    let gender = getGender(paymentList);
    console.log(gender);
    setGender(gender);

    let totalAmount = paymentList.reduce((acc, item) => acc + item.amount, 0);
    setTotalAmount(totalAmount);

    // 예제: 세전 금액이 1000이고 VAT 비율이 10%인 경우
    const preTaxAmount = totalAmount; // 세전 금액
    const vatRate = 10; // VAT 비율 (%)
    const result = calculateTotalIncomeAndVAT(preTaxAmount, vatRate);

    setPreAmount(parseInt(result.totalIncome / 100)); // 총 수입 출력
    setVat(parseInt(result.vat / 100)); // VAT 출력
  }, [paymentList]);

  return (
    <Flex w={"100%"} h={"100%"} color={"#4E4E4E"}>
      <Stack
        w={"full"}
        spacing={0}
        divider={<StackDivider borderColor={"#E1E4E4"} />}
      >
        <Stack>
          <Stack p={16}>
            <Stack align={"end"}>
              {/* <Input w={"25%"} /> */}
              <HStack justify={"end"}>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      handleDateRangeButtonClick("week");
                      setButtonTab(0);
                    }}
                    variant={buttonTab === 0 ? "solid" : "outline"}
                    bgColor={buttonTab === 0 ? popyellow : "white"}
                    color={buttonTab === 0 ? "white" : "#C0C0C0"}
                    _hover={"none"}
                    _active={"none"}
                  >
                    a week
                  </Button>
                  <Button
                    onClick={() => {
                      handleDateRangeButtonClick("month");
                      setButtonTab(1);
                    }}
                    variant={buttonTab === 1 ? "solid" : "outline"}
                    bgColor={buttonTab === 1 ? popyellow : "white"}
                    color={buttonTab === 1 ? "white" : "#C0C0C0"}
                    _hover={"none"}
                    _active={"none"}
                  >
                    a month
                  </Button>
                  <Button
                    onClick={() => {
                      handleDateRangeButtonClick("3month");
                      setButtonTab(2);
                    }}
                    variant={buttonTab === 2 ? "solid" : "outline"}
                    bgColor={buttonTab === 2 ? popyellow : "white"}
                    color={buttonTab === 2 ? "white" : "#C0C0C0"}
                    _hover={"none"}
                    _active={"none"}
                  >
                    3 months
                  </Button>
                </ButtonGroup>
                <HStack maxW={"280px"}>
                  <InputGroup
                    alignItems={"center"}
                    border={"1px solid #e4e4e4"}
                    borderRadius={"md"}
                  >
                    <Input
                      border={"none"}
                      placeholder="DD/MM/YY"
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                    <Text>-</Text>
                    <Input
                      border={"none"}
                      placeholder="DD/MM/YY"
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </InputGroup>
                  <IconButton
                    aria-label="search"
                    icon={<SearchIcon />}
                    // onClick={() => {
                    //   searchData();
                    // }}
                  />
                </HStack>
              </HStack>
            </Stack>
            <HStack
              p={8}
              justify={"space-between"}
              divider={<StackDivider />}
              border={"1px solid #E1E4E4"}
              borderRadius={"md"}
            >
              <Stack
                h={"full"}
                justify={"space-between"}
                align={"center"}
                textAlign={"center"}
              >
                <Text fontSize={"24px"} fontWeight={"500"}>
                  Total
                </Text>
                <Text fontSize={"35px"} color={popmag} fontWeight={"600"}>
                  {totalAmount / 100}$
                </Text>
                <Stack fontSize={"sm"} fontWeight={"500"} spacing={0}>
                  <Text>
                    {startDate ? startDate : "DD/MM/YY"} -{" "}
                    {endDate ? endDate : "DD/MM/YY"}
                  </Text>
                  <Text>
                    VAT {vat}$ / Pre-tax amount {preAmount}$
                  </Text>
                </Stack>
              </Stack>
              <Stack
                h={"full"}
                justify={"space-between"}
                align={"center"}
                textAlign={"center"}
                spacing={4}
              >
                <Text fontSize={"lg"} fontWeight={"500"}>
                  Income by Course
                </Text>
                <HStack alignItems={"flex-end"} spacing={6}>
                  <VStack>
                    <Text>{incomeSums?.Beginner}</Text>
                    <Box
                      bgColor={popyellow}
                      w="20px"
                      height={`${income["Beginner"] * 120}px`}
                    ></Box>
                    <Text>B</Text>
                  </VStack>
                  <VStack>
                    <Text>{incomeSums?.Advanced}</Text>
                    <Box
                      bgColor={popblue}
                      w="20px"
                      height={`${income["Advanced"] * 120}px`}
                    ></Box>
                    <Text>A</Text>
                  </VStack>
                  <VStack>
                    <Text>{incomeSums?.Intermediate}</Text>
                    <Box
                      bgColor={popmint}
                      w="20px"
                      height={`${income["Intermediate"] * 120}px`}
                    ></Box>
                    <Text>I</Text>
                  </VStack>
                  <VStack>
                    <Text>{incomeSums?.Professional}</Text>
                    <Box
                      bgColor={popmag}
                      w="20px"
                      height={`${income["Professional"] * 120}px`}
                    ></Box>
                    <Text>P</Text>
                  </VStack>
                </HStack>
              </Stack>
              <Stack
                h={"full"}
                justify={"space-between"}
                align={"center"}
                textAlign={"center"}
                spacing={4}
              >
                <Text fontSize={"lg"} fontWeight={"500"}>
                  Number of Students by Course
                </Text>
                <HStack alignItems={"flex-end"} spacing={6}>
                  <VStack>
                    <Text>{countSums?.Beginner}</Text>
                    <Box
                      bgColor={popyellow}
                      w="20px"
                      height={`${counts["Beginner"] * 120}px`}
                    ></Box>
                    <Text>B</Text>
                  </VStack>
                  <VStack>
                    <Text>{countSums?.Advanced}</Text>
                    <Box
                      bgColor={popblue}
                      w="20px"
                      height={`${counts["Advanced"] * 120}px`}
                    ></Box>
                    <Text>A</Text>
                  </VStack>
                  <VStack>
                    <Text>{countSums?.Intermediate}</Text>
                    <Box
                      bgColor={popmint}
                      w="20px"
                      height={`${counts["Intermediate"] * 120}px`}
                    ></Box>
                    <Text>I</Text>
                  </VStack>
                  <VStack>
                    <Text>{countSums?.Professional}</Text>
                    <Box
                      bgColor={popmag}
                      w="20px"
                      height={`${counts["Professional"] * 120}px`}
                    ></Box>
                    <Text>P</Text>
                  </VStack>
                </HStack>
              </Stack>
              <Stack
                h={"full"}
                // justify={"space-between"}
                align={"center"}
                textAlign={"center"}
                spacing={4}
              >
                <Text fontSize={"lg"} fontWeight={"500"}>
                  Division
                </Text>
                <HStack>
                  <Stack>
                    <DonutChart
                      color1={popmag}
                      color2={popblue}
                      value={
                        parseFloat(
                          division["Vocal"] /
                            (division["Vocal"] + division["Dance"])
                        ) * 100
                      }
                    />
                    <HStack>
                      <Box w={"10px"} h={"10px"} bgColor={popmag} />
                      <Text color={popmag}>Vocal</Text>
                    </HStack>
                    <HStack>
                      <Box w={"10px"} h={"10px"} bgColor={popblue} />
                      <Text color={popblue}>Dance</Text>
                    </HStack>
                  </Stack>
                  <Stack>
                    <DonutChart
                      color1={popmint}
                      color2={popyellow}
                      value={
                        parseFloat(
                          gender["Man"]
                            ? gender["Man"]
                            : 0 /
                                (gender["Man"]
                                  ? gender["Man"]
                                  : 0 + gender["Woman"]
                                  ? gender["Woman"]
                                  : 0)
                        ) * 100
                      }
                    />
                    <HStack>
                      <Box w={"10px"} h={"10px"} bgColor={popmint} />
                      <Text color={popmint}>Man</Text>
                    </HStack>
                    <HStack>
                      <Box w={"10px"} h={"10px"} bgColor={popyellow} />
                      <Text color={popyellow}>Woman</Text>
                    </HStack>
                  </Stack>
                </HStack>
              </Stack>
            </HStack>
          </Stack>
          <Stack px={16} w={"full"} justify={"space-between"}>
            <Stack pb={16}>
              <HStack justify={"space-between"}>
                <Text fontSize={"20px"} fontWeight={"600"}>
                  Payment List
                </Text>
              </HStack>
              <TableContainer>
                <Table>
                  <Tbody>
                    <Tr fontWeight={"500"} color={popmint}>
                      <Td textAlign={"center"}>No.</Td>
                      <Td textAlign={"center"}>Name</Td>
                      {/* <Td textAlign={"center"}>ID</Td> */}
                      <Td textAlign={"center"}>Division</Td>
                      <Td textAlign={"center"}>Course</Td>
                      <Td textAlign={"center"}>Class</Td>
                      <Td textAlign={"center"}>Trainer</Td>
                      <Td textAlign={"center"}>Amount</Td>
                      <Td textAlign={"center"}>Method</Td>
                      <Td textAlign={"center"}>Date</Td>
                    </Tr>
                    {currentData.map((data, index) => (
                      <Tr>
                        <Td textAlign={"center"}>{`${index + 1}.`}</Td>
                        <Td textAlign={"center"}>
                          {data.user.firstName} {data.user.name || "-"}
                        </Td>
                        {/* <Td textAlign={"center"}>{data.id}</Td> */}
                        <Td textAlign={"center"}>{data.curriculum.category}</Td>
                        <Td textAlign={"center"}>
                          {data.curriculum.difficulty}
                        </Td>
                        <Td textAlign={"center"}>{data.curriculum.title}</Td>
                        <Td textAlign={"center"}>
                          {data.curriculum.teacher.name}
                        </Td>
                        <Td textAlign={"center"}>
                          {currencyFormatter2(data.amount)}
                        </Td>
                        <Td textAlign={"center"}>
                          Stripe
                          {/* {data.payment_method_types.join(" ")} */}
                        </Td>
                        <Td textAlign={"center"}>
                          {dateFormatter(data.created)}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Stack>
            <Flex
              mt={4}
              px={16}
              pb={16}
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                icon={<ChevronLeftIcon fontSize={"30px"} />}
                onClick={handlePrevPage}
                isDisabled={currentPage === 1}
                variant={"outline"}
                color={popmint}
                borderColor={popmint}
              />
              <ButtonGroup ml={4} mr={4}>
                {Array.from({ length: totalPages }, (_, index) => (
                  <Button
                    key={index + 1}
                    onClick={() => handlePageClick(index + 1)}
                    color={"white"}
                    bg={currentPage === index + 1 ? popmint : "#E1E4E4"}
                  >
                    {index + 1}
                  </Button>
                ))}
              </ButtonGroup>
              <IconButton
                icon={<ChevronRightIcon fontSize={"30px"} />}
                isDisabled={currentPage === totalPages}
                onClick={handleNextPage}
                color={popmint}
                variant={"outline"}
                borderColor={popmint}
              />
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

const DonutChart = ({ value, label, color1, color2 }) => {
  return (
    <CircularProgress
      value={value}
      size="120px"
      thickness="8px"
      color={color1}
      trackColor={color2}
      rounded="full"
    >
      <CircularProgressLabel>{label}</CircularProgressLabel>
    </CircularProgress>
  );
};

export default Payment;
