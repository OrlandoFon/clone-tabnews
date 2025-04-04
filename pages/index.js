import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { css, keyframes } from "@emotion/react";
import "bootstrap/dist/css/bootstrap.min.css";

/** @jsxImportSource @emotion/react */
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

function Home() {
  return (
    <div
      css={css`
        background: linear-gradient(
          37deg,
          rgba(13, 0, 36, 1) 0%,
          rgba(95, 9, 121, 1) 42%,
          rgba(0, 161, 255, 1) 100%
        );
        background-size: 400% 400%;
        animation: ${gradientAnimation} 8s ease infinite;
        min-height: 100vh;
        width: 100%;
      `}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
        className={"border rounded d-flex w-10 h-25"}
      >
        <p className="h3 d-flex justify-content-center align-items-center fw-bold p-5 text-white">
          Te amo, mãe.
          <FavoriteIcon style={{ color: "red", fontSize: "40px" }} />
        </p>
      </div>
    </div>
  );
}

export default Home;
