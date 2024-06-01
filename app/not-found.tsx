import Header from "./components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "50px",
        }}
      >
        Page Not Found
      </div>
    </>
  );
};

export default NotFound;
