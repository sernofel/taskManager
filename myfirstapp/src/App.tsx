import React from "react";
import "./App.css";
import TaskForm from "./modules/task/components/TaskForm";
import TaskList from "./modules/task/components/TaskList";
import { Copyright } from "./components/Copyright";
import { Box, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import createConfigRootStore from "./core/store";
import yoigoTheme from './modules/ui/theme'

const store = createConfigRootStore();

const App = () => {
    return (
      <ThemeProvider theme={yoigoTheme}>
        <Provider store={store}>
          <div className="app-content">
            <TaskForm />
            <TaskList />
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Provider>
      </ThemeProvider>
    );
}

export default App;
