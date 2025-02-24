// 🌐 Base API URL
export const baseUrl = "http://localhost:3500/api";

/**
 * 📡 POST Request Helper Function
 * @param {string} url - The API endpoint URL
 * @param {object} body - The request payload (will be stringified)
 * @returns {Promise<object>} - The API response or an error object
 */
export const postRequest = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    // Handle non-OK responses
    if (!response.ok) {
      const message = data?.message || "An error occurred";
      return { error: true, message };
    }

    // Successful response
    return data;
  } catch (error) {
    console.error("POST Request Error:", error);
    return { error: true, message: "Network error. Please try again." };
  }
};


