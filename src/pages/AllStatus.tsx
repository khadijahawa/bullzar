import React from "react";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { STATUS_CONTRACT_ADDRESS } from "../constants/contractAddresses";
import { EventCard } from "../components";
import styles from "../styles/Status.module.css";
import Lottie from "lottie-react";
import loadingLottie from "../assets/loadingLottie.json";
import { useEffect, useState } from "react";
import { Extras } from "../components";

export default function AllStatus() {
  const [isLoading, setIsLoading] = useState(true);

  const { contract } = useContract(STATUS_CONTRACT_ADDRESS);

  const { data: statusEvents, isLoading: isStatusEventsLoading } =
    useContractEvents(contract, "StatusUpdated", {
      subscribe: true,
    });

  useEffect(() => {
    // Set a timeout for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className={styles.sectionLoading}>
        <Lottie animationData={loadingLottie} loop={true} />
      </div>
    );
  }
  return (
    <div style={{ padding: "50px" }}>
      <Extras />
      <div className="token-card2" style={{ padding: "50px" }}>
      <h2 className="text-2xl font-bold text-blue-400 ">BULL MEMBERS STATUS</h2>
        {!isStatusEventsLoading &&
          statusEvents &&
          statusEvents.map((event, index) => (
            <EventCard
              key={index}
              walletAddress={event.data.user}
              newStatus={event.data.newStatus}
              timeStamp={event.data.timestamp}
            />
          ))}
      </div>
    </div>
  );
}
