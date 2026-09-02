import { Atom } from "react-loading-indicators";

function Loading({isLoading}) {
  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(255, 255, 255,0.5)",
            zIndex: 10000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(3px)",
          }}
        >
          <Atom color="#0000007b" size="medium" text="" textColor="" />
        </div>
      )}
    </>
  );
}

export default Loading;
