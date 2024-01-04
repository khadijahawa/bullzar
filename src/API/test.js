export default function handler(req, res) {
    try {
      // Your server-side logic here
      // For testing purposes, let's send a simple JSON response
      res.status(200).json({ message: "Hello from the server!" });
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }