import MovieDetials from "./Components/MovieDetials";
import MoviesList from "./Components/MoviesList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MoviesProvider } from "./Context/Context";
import { NativeBaseProvider } from "native-base";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <MoviesProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Movies"
              component={MoviesList}
              options={{
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#a78bfa" }
              }}
            />
            <Stack.Screen
              name="More info"
              component={MovieDetials}
              options={{
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#a78bfa" }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </MoviesProvider>
  );
}
