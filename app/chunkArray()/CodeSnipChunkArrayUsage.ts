export const CodeSnipChunkArrayUsage = `
    // Split the array into chunks of 30
const chunkedArrays = chunkArray(valuesArray, 30);

// Fetch results for each chunk and combine them
const allResults = [];
for (const chunk of chunkedArrays) {
  const querySnapshot = await firestore.collection('yourCollection')
    .where('field', 'in', chunk).get();
  querySnapshot.forEach(doc => {
    allResults.push(doc.data());
  });
}

`