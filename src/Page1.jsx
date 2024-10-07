import { rsvp } from "./rewards";
import { useScrollWithShadow } from "./useScrollWithShadow";

const Page1 = () => {
  const RewardItem = ({ title, buttonText, imgSrc }) => {
    return (
      <div
        style={{
          height: "7.5rem",
          display: "flex",
          alignItems: "center",
          position: "relative",
          margin: "0.3rem auto",
          maxWidth: "21rem",
          minWidth: "16rem",
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "fit-content",
            zIndex: 0,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src="/webp/box.webp"
            alt="ticket"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <section style={{ flex: 1, width: "auto", zIndex: 1 }}>
        <div
          style={{
            height: "6rem",
            width: "fit-content",
            margin: "auto",
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={imgSrc}
            alt={title}
            style={{ width: "100%", height: "100%", }}
          />
        </div>
        </section>
      </div>
    );
  };

  const { boxShadow, onScrollHandler } = useScrollWithShadow();

  return (
    <div>
      <div
        style={{
          height: "2.5svh",
          alignContent: "left",
          marginRight: "50%",
        }}
      >
        <img
          src="/webp/logo.webp"
          alt="logo"
          style={{
            height: "100%",
            width: "auto",
          }}
        />
      </div>
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "left",
          lineHeight: "1.8rem",
        }}
      >
        Welcome, <br />
        Sarah
      </h1>
      <p
        style={{
          fontSize: "0.8rem",
          textAlign: "left",
          lineHeight: "1.2rem",
        }}
      >
        Find your ticket below and redeem exclusive perks throughtout the space.
        Enjoy!
      </p>
      <div
        onScroll={onScrollHandler}
        style={{
          boxShadow,
          overflowY: "auto",
          height: "40svh",
          zIndex: 2,
        }}
      >
        {rsvp.map((reward, index) => (
          <RewardItem
            title={reward.title}
            buttonText={reward.buttonText}
            imgSrc={reward.imgSrc}
            blurfilter={reward.disableBlur}
            key={reward.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Page1;
