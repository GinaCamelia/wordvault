export const filteredWords = (data, filteredData) => {
    filteredData = filteredData || [];
    return data
      .filter((word) => word.word.length > 2)
      .sort(() => Math.random() - 0.5)
      .reduce((filteredData, word) => {
        if (filteredData.length >= 10) {
          return filteredData;
        }
        if (!filteredData.includes(word.word)) {
          filteredData.push(word.word);
        }
        return filteredData;
      }, []);
  };
  