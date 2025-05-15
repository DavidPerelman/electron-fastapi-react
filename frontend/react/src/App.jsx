import { useState, useEffect } from "react";
import { apiFetch } from "./api";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.ping().then((res) => {
        console.log("✅ קיבלתי מה-main:", res);
      });
    }
  }, []);

  const callApi = async () => {
    setLoading(true);
    try {
      const res = await apiFetch("/health");
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">🔗 FastAPI Test</h1>
      <button
        onClick={callApi}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Loading..." : "Call /health"}
      </button>
      {response && (
        <pre className="mt-4 p-2 bg-gray-100 border rounded">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
