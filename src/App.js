import logo from "./logo.svg";
import "./App.css";
import MyApp from "./components/MyApp";
import ErrorBoundary from "./components/ErrorHandler/ErrorBoundary";
import ErrorPage from "./components/ErrorHandler/ErrorPage";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<ErrorPage />}>        
          <MyApp />
      </ErrorBoundary>
    </div>
  );
}

export default App;
