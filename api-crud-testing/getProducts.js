export const getProducts = async (req, res) => {
  try {
    res.status(200).json({ success: true, data: {apple: 5, bananas: 4} });
  } catch (error) {
    console.log("Error in fetching products", error.message);
  }
};