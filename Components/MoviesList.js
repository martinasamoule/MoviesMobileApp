import React, { useEffect } from "react";

import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  ChevronRightIcon,
  Button,
  NativeBaseProvider,
  CheckIcon,
  CloseIcon
} from "native-base";
import { useContext } from "react";
import { MoviesContext } from "../Context/Context";
import { GetAllMovies } from "../Actions/GetMovies";
export default function MoviesList(props) {
  const { state, dispatch } = useContext(MoviesContext);
  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await GetAllMovies());
    };
    resolveAction();
  }, []);
  console.log(state);
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box mt="25">
          <FlatList
            data={state.list}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "gray.600"
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={3} justifyContent="space-between">
                  <Avatar
                    size="100px"
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50"
                      }}
                      color="coolGray.800"
                      bold
                      size={"100px"}
                    >
                      {item.title}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200"
                      }}
                      bold
                    >
                      Adult : {"   "}
                      {item.adult ? (
                        <CheckIcon
                          size="2.5"
                          style={{ color: "green" }}
                        />
                      ) : (
                        <CloseIcon
                          size="2.5"
                          style={{ color: "red" }}
                        />
                      )}
                    </Text>
                  </VStack>
                  <Spacer />
                  <HStack alignItems="center">
                    <Button
                      size="md"
                      variant="link"
                      _text={{
                        color: "#a78bfa"
                      }}
                      onPress={() => {
                        props.navigation.navigate({ name: "More info" , params :
                      {
                        id : item.id ,
                        props : props 
                      } });
                      }}
                      leftIcon={
                        <ChevronRightIcon
                          size="6"
                          style={{ color: "#a78bfa" }}
                        />
                      }
                    >
                      More info 
                    </Button>
                  </HStack>
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
