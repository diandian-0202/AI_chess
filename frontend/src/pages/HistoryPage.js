import React, { useState } from "react";
import HistoryFirstPage from "../components/HistoryFirstPage";
import HistorySecondPage from "../components/HistorySecondPage";

function HistoryPage({ handleBackHistory }) {
  const [secondPage, setSecondPage] = useState(false);
  const [totalBattles, setTotalBattles] = useState(0);
  const [totalWins, setTotalWins] = useState(0);

  const handleSecondPage = () => {
    setSecondPage(true);
  };

  const handleBack = () => {
    setSecondPage(false);
  };

  const firstPageContentInfo = {
    handleBackHistory: handleBackHistory,
    totalBattles: totalBattles,
    totalWins: totalWins,
    handleSecondPage: handleSecondPage,
  };

  const secondPageContentInfo = {
    handleBack: handleBack,
    handleBackHistory: handleBackHistory,
  };

  if (!secondPage) {
    return <HistoryFirstPage {...firstPageContentInfo} />;
  } else {
    return <HistorySecondPage {...secondPageContentInfo} />;
  }
}

export default HistoryPage;
