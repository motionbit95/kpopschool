import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Timetable from "../../../Component/TimeTabel";

const CurriculumDetail = () => {
  const location = useLocation();
  let { category } = location.state;
  const [format, setFormat] = useState(location.state.format);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(category, format);
  }, [category, format]);

  const [curriculums, setCurriculums] = useState([]);

  useEffect(() => {
    const host_url =
      window.location.hostname === "localhost" ? "http://localhost:8080" : "";
    console.log(host_url);

    const getCurriculums = async () => {
      // 필터링은 검색을 통해서 진행한다.
      fetch(`${host_url}/curriculums/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conditions: [
            { field: "category", operator: "==", value: category },
            { field: "format", operator: "==", value: format },
          ],
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setCurriculums(res);
        })
        .catch((err) => {
          // console.log(err);
          console.log("데이터가 없습니다");
          setCurriculums([]);
        });
    };
    getCurriculums();
    console.log(curriculums);
  }, [category, format]);

  return (
    <Flex flex={1} direction={"column"}>
      {/* 강사 정보 */}
      <Container minW={"container.xl"}>
        <Stack py={16} spacing={8}>
          <Flex
            fontWeight={"300"}
            fontSize={"xl"}
            color={"#4E4E4E"}
            align={"center"}
            justify={"flex-end"}
          >
            <Text>Curriculum</Text>
            <FiChevronRight />
            <Text>Intro</Text> {/* 댄스인지 보컬인지에 대한 여부 */}
            <FiChevronRight />
            <Text color={"#00C3BA"}>{category}</Text>
          </Flex>
          <Stack spacing={4}>
            <Text fontSize={"3xl"} fontWeight={"600"} color={"#FF3CA2"}>
              {category}
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Tabs defaultIndex={format === "1:1" ? 0 : format === "1:6" ? 1 : 2}>
        <TabList justifyContent={"center"} borderBottomColor={"#00C3BA"}>
          <Tab
            px={20}
            color={format === "1:1" ? "#00C3BA" : "#E1E4E4"}
            borderBottomColor={format === "1:1" ? "#00C3BA" : "#E1E4E4"}
            // _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
            onClick={() => {
              setFormat("1:1");
            }}
          >
            1:1
          </Tab>
          <Tab
            px={20}
            color={format === "1:6" ? "#00C3BA" : "#E1E4E4"}
            borderBottomColor={format === "1:6" ? "#00C3BA" : "#E1E4E4"}
            // _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
            onClick={() => {
              setFormat("1:6");
            }}
          >
            1:6
          </Tab>
          <Tab
            px={20}
            color={format === "VOD" ? "#00C3BA" : "#E1E4E4"}
            borderBottomColor={format === "VOD" ? "#00C3BA" : "#E1E4E4"}
            onClick={() => {
              setFormat("VOD");
            }}
            // _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            VOD
          </Tab>
          <Tab
            px={20}
            color={format === "Time Table" ? "#00C3BA" : "#E1E4E4"}
            borderBottomColor={format === "Time Table" ? "#00C3BA" : "#E1E4E4"}
            onClick={() => {
              setFormat("Time Table");
            }}
            // _selected={{ color: "#00C3BA", borderBottomColor: "#00C3BA" }}
          >
            Time Table
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {format === "1:1" && <Lessons curriculums={curriculums} />}
            {curriculums.length === 0 && <NotFound />}
          </TabPanel>

          <TabPanel>
            {format === "1:6" && <Lessons curriculums={curriculums} />}
            {curriculums.length === 0 && <NotFound />}
          </TabPanel>
          <TabPanel>
            {format === "VOD" && <Lessons curriculums={curriculums} />}
            {curriculums.length === 0 && <NotFound />}
          </TabPanel>
          <TabPanel>
            <Container minW={"container.xl"} py={8}>
              <Timetable curriculums={curriculums} />
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default CurriculumDetail;

const NotFound = () => {
  return (
    <Container minW={"container.xl"}>
      <Box
        w={"full"}
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"2xl"} color={"red"}>
          Not Found
        </Text>
      </Box>
    </Container>
  );
};

const Lessons = ({ curriculums }) => {
  return (
    <Container minW={"container.xl"} py={8}>
      <Stack divider={<StackDivider />} spacing={16}>
        {curriculums.map((item) => (
          <Stack>
            <Text
              fontSize={"2xl"}
              fontWeight={"600"}
              color={
                item.difficulty === "Beginner"
                  ? "#FFCC00"
                  : item.difficulty === "Intermediate"
                  ? "#00C3BA"
                  : item.difficulty === "Advanced"
                  ? "#00B2FF"
                  : "#FF3CA2"
              }
            >
              {`${item.difficulty} course`}
            </Text>
            <HStack spacing={16}>
              <Stack spacing={0}>
                <Text color={"#C0C0C0"}>Month</Text>
                <Text fontWeight={"700"} color={"#00C3BA"}>
                  {item.month}
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text color={"#C0C0C0"}>Sessions</Text>
                <Text fontWeight={"700"} color={"#00C3BA"}>
                  {item.sessions}
                </Text>
              </Stack>
              <Stack spacing={0}>
                <Text color={"#C0C0C0"}>Price</Text>
                <Text fontWeight={"700"} color={"#00C3BA"}>
                  {`$${item.price} per session`}
                </Text>
              </Stack>
            </HStack>
            <Box pt={4}>
              <Text fontSize={"lg"} whiteSpace={"pre-line"}>
                {item.description}
              </Text>
            </Box>
            {/* <Box
          w={"100%"}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          {isOkay ? (
            <Button
              size={"lg"}
              bgColor={"#FF3CA2"}
              color={"white"}
            >
              APPLY
            </Button>
          ) : (
            <Button
              size={"lg"}
              bgColor={"#00B2FF"}
              color={"white"}
            >
              CONTINUE
            </Button>
          )}
        </Box> */}
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

// 임시 데이터
const curriculums = [
  // 1:1 Vocal 임시
  {
    category: "Vocal",
    format: "1:1",
    month: "3",
    totalSessions: "12",
    description: `- Basic Vocal and Breathing Practices: This course provides an introduction to breathing techniques and basic vocal techniques.
    - Understanding Pitch and Rhythm: Basic Music Theory.
    - Simple K-pop song practice: Perfect for beginners to practice their songs.
    - Basic pronunciation practice: develop correct pronunciation and a sense of rhythm.
    - Learn basic stage manners: basic posture and expressions on stage 
    - Beginner Course Reviews and Ratings`,
    difficulty: "Beginner",
  },
  {
    category: "Vocal",
    format: "1:1",
    month: "3",
    totalSessions: "12",
    description: `- Advanced vocal skills: Developing different vocal techniques and tones
      - K-pop song style analysis: Analysis of K-pop songs of various genres
      - Strengthening musical expression: emotional expression and song interpretation skills
      - Improve stage performance: practice movement and expression on stage
      - Intermediate Song Practice and Recording: Practice and Record Songs to Improve Your Skills
      - Intermediate Course Reviews and Ratings`,
    difficulty: "Intermediate",
  },
  {
    category: "Vocal",
    format: "1:1",
    month: "3",
    totalSessions: "12",
    description: `- Professional Voice Development: Developing and refining your individual voice
      - Advanced stage presentation skills: Enhance your expressive power and presence on stage.
      - Individual song interpretation and production: Song interpretation suited to individual style
      - Real Stage Experience: Practice performing on a real stage
      - Understanding the Music Industry: Understanding and Networking in the Music Industry
      - Advanced Course Reviews and Ratings`,
    difficulty: "Advanced",
  },
  {
    category: "Vocal",
    format: "1:1",
    month: "3",
    totalSessions: "12",
    description: `- Perfecting Your Skills as a Professional Artist: Hone the skills you need to be a professional artist
      - Building Your Personal Artist Image: Building Your Personal Brand and Image
      - In-depth stage experience and performance: Professional level stage experience
      - Writing and Directing Your Own Song: Techniques for writing and directing your own song
      - Positioning yourself as a professional within the music industry: Exploring roles and opportunities within the music industry.
      - Pro Course Reviews and Ratings`,
    difficulty: "Professional",
  },
  // 1:1 Dance 임시
  {
    category: "Dance",
    format: "1:1",
    month: "3",
    totalSessions: "12",
    description: `- Basic dance moves and rhythm: learning basic steps and sense of rhythm
    - K-pop Choreography Basics: Learn Simple K-pop Choreography
    - Improve basic strength and flexibility: Exercises for strength and flexibility
    - Building Dance Expression and Confidence: Practice to Improve Expression and Confidence
    - Beginner Choreography Practice and Perfection: Simple Choreography Practice and Perfection
    - Beginner Course Reviews and Ratings`,
    difficulty: "Beginner",
  },
  {
    category: "Dance",
    format: "1:1",
    month: "3",
    totalSessions: "12",
    description: `- Choreography styles from different genres: Learn choreography from different genres
    - Develop individual dance style: dance practice tailored to your personal style
    - Improve Your Dance Technique: Practice Intermediate Dance Skills and Movements
    - Stage Performance Skills: Enhancing Expressive Ability on Stage
    - Intermediate Choreography Practice and Perfection: Practice and Perfection of Challenging Choreography
    - Intermediate Course Reviews and Ratings`,
    difficulty: "Intermediate",
  },
  {
    category: "Dance",
    format: "1:1",
    month: "3",
    totalSessions: "12",
    description: `- Professional Dance Skills: Advanced dance skills and techniques.
    - Create unique choreography: Create choreography that reflects your personal style
    - Teamwork and Collaborative Dance: Group Choreography and Collaborative Dance Practices
    - Stage expression and charisma: Practice expressing charisma on stage
    - Advanced Choreography Practice and Perfection: Practice complex and challenging choreography.
    - Advanced Course Reviews and Ratings`,
    difficulty: "Advanced",
  },
  {
    category: "Dance",
    format: "1:1",
    month: "3",
    totalSessions: "12",
    description: `- Perfecting your skills as a professional dancer: Hone your skills as a professional dancer
    - Create and direct original choreography: Create choreography tailored to your personal brand.
    - Professional stage performance: actual stage experience and performance practice
    - Understanding and Networking the Dance Industry: Understanding the dance industry and building connections
    - Career Planning as a Professional Dancer: Setting Career Goals in Dance
    - Pro Course Reviews and Ratings`,
    difficulty: "Professional",
  },
];
