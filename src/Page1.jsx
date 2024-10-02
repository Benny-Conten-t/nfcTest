import { rsvp } from "./rewards";
import { useScrollWithShadow } from "./useScrollWithShadow";

const Page1 = () => {
  const RewardItem = ({ title, buttonText, imgSrc }) => {
    return (
      <div
      style={{
        position: "relative",
        zIndex: -1,
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
        <img
          src={imgSrc}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
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
