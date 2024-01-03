import React from "react";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { STATUS_CONTRACT_ADDRESS } from "../../constants/contractAddresses";
import { EventCard } from "..";
import styles from "../../styles/Status.module.css";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/loadingLottie.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function StatusEvents() {
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
    <div>
      <div className="token-card2">
        
        {!isStatusEventsLoading &&
          statusEvents &&
          statusEvents
            .slice(0, 3)
            .map((event, index) => (
              <EventCard
                key={index}
                walletAddress={event.data.user}
                newStatus={event.data.newStatus}
                timeStamp={event.data.timestamp}
              />
            ))}
             <Link to="/AllStatus" className="block px-2 py-2 text-center text-white bg-yellow-49 rounded-md">
        {" "} All Feed
        </Link>
      </div>
     
    </div>
  );
}
