import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  ChevronLeftIcon,
  Button,
  NativeBaseProvider
} from "native-base";

import { useContext, useEffect } from "react";
import { MoviesContext } from "../Context/Context";
import { ClearDetails, GetMovieDetails } from "../Actions/GetMovies";

export default function MovieDetials({ props, route }) {
  const { state, dispatch } = useContext(MoviesContext);
  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await GetMovieDetails(route.params.id));
    };
    resolveAction();
    return () => {
      dispatch(ClearDetails());
    };
  }, []);
  console.log(route.params.props);
  if (state.details.id)
    return (
      <NativeBaseProvider>
        <Center flex={1} px="3" mt="1">
          <Box alignItems="center">
            <Box
              maxW="80"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }}
              _web={{
                shadow: 2,
                borderWidth: 0
              }}
              _light={{
                backgroundColor: "gray.50"
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${state.details.poster_path}`
                    }}
                    alt="image"
                  />
                </AspectRatio>
                <Center
                  bg="violet.500"
                  _dark={{
                    bg: "violet.400"
                  }}
                  _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                  }}
                  position="absolute"
                  bottom="0"
                  px="3"
                  py="1.5"
                >
                  Rate {state.details.vote_average}
                </Center>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    {state.details.title}
                  </Heading>
                  <Text
                    fontSize="xs"
                    _light={{
                      color: "violet.500"
                    }}
                    _dark={{
                      color: "violet.400"
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    Release Date : {state.details.release_date}
                  </Text>
                </Stack>
                <Text fontWeight="400">{state.details.overview}</Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <Button
                    size="md"
                    variant="link"
                    _text={{
                      color: "#a78bfa"
                    }}
                    onPress={() => {
                      route.params.props.navigation.goBack();
                    }}
                    leftIcon={
                      <ChevronLeftIcon size="6" style={{ color: "#a78bfa" }} />
                    }
                  >
                    Back
                  </Button>
                </HStack>
              </Stack>
            </Box>
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  return (
    <Button
      isLoading
      variant="link"
      isDisabled
      _text={{
        color: "#a78bfa"
      }}
      mt='70'
    >
      Loading ....
    </Button>
  );
}
