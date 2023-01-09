import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    params: {
      query: term,
      client_id: "VlFtr8m0WcDChe5u9E_AO0pMB52x6c9hazWibDOy7PA",
    },
  });

  console.log("searched for ", response.data.results);
  return response.data.results;
};

export default searchImage;
