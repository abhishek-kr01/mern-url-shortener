import { useState } from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

interface FormContainerProps {
  onSuccess: () => void;
}

function FormContainer({ onSuccess }: FormContainerProps) {
  const [fullUrl, setFullUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${serverUrl}/api/shorturl`, { fullUrl });
      setFullUrl("");
      onSuccess();
    } catch (error) {
      console.error("Error shortening URL:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
          <h2 className="text-white text-4xl text-center pb-4">
            URL Shortener
          </h2>

          <p className="text-white text-center pb-2 text-xl font-extralight">
            Paste your untidy link to shorten it
          </p>

          <p className="text-white text-center pb-4 text-sm font-thin">
            Free tool to create neat, shareable short links
          </p>

          <form onSubmit={handleSubmit}>
            <div className="relative w-full">
              <input
                type="url"
                placeholder="Paste your URL here"
                required
                className="block w-full p-4 pr-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                value={fullUrl}
                onChange={(e) => setFullUrl(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="absolute top-0 right-0 h-full px-6 text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 disabled:opacity-60"
              >
                {loading ? "Shortening..." : "Shorten"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
