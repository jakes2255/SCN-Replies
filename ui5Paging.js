fetchLargeData: async function () {
  const oModel = this.getView().getModel(); // or from component
  const sEntitySet = "/YourEntitySet"; // e.g., /SalesOrders
  const iPageSize = 1000; // Fetch 1000 records at a time
  let iSkip = 0;
  let bHasMore = true;
  const aAllData = [];

  while (bHasMore) {
    const sPath = `${sEntitySet}?$skip=${iSkip}&$top=${iPageSize}`;
    try {
      const oResult = await new Promise((resolve, reject) => {
        oModel.read(sPath, {
          success: oData => resolve(oData.results),
          error: err => reject(err)
        });
      });

      aAllData.push(...oResult);
      iSkip += iPageSize;
      bHasMore = oResult.length === iPageSize; // if less than page size, we're done
    } catch (err) {
      console.error("Data fetch failed at offset", iSkip, err);
      break;
    }
  }

  console.log("Total Records Fetched:", aAllData.length);
  // Now you can process or bind this data
}
