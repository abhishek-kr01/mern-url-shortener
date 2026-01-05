import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import type { UrlData } from "../../interface/UrlData";

interface IDataTableProps {
  data: UrlData[];
  updateReloadState: () => void;
}

function DataTable({ data, updateReloadState }: IDataTableProps) {

  const openUrl = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyToClipboard = async (shortCode: string) => {
    const shortUrl = `${serverUrl}/${shortCode}`;
    try {
      await navigator.clipboard.writeText(shortUrl);
      alert(`Copied: ${shortUrl}`);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUrl = async (id: string) => {
    try {
      await axios.delete(`${serverUrl}/api/shorturl/${id}`);
      updateReloadState();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto pt-4 pb-10">
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          
          {/* TABLE HEADER */}
          <thead className="text-sm uppercase bg-gray-800 text-gray-100">
            <tr>
              <th className="px-6 py-4 w-5/12">Full URL</th>
              <th className="px-6 py-4 w-3/12">Short URL</th>
              <th className="px-6 py-4 w-1/12 text-center">Clicks</th>
              <th className="px-6 py-4 w-1/12 text-center">Copy</th>
              <th className="px-6 py-4 w-1/12 text-center">Delete</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className="border-b bg-gray-700 text-white hover:bg-gray-100 hover:text-gray-900 transition"
              >
                {/* FULL URL */}
                <td
                  className="px-6 py-4 break-all cursor-pointer underline"
                  onClick={() => openUrl(item.fullUrl)}
                  title={item.fullUrl}
                >
                  {item.fullUrl}
                </td>

                {/* SHORT URL */}
                <td
                  className="px-6 py-4 break-all cursor-pointer underline text-blue-400 hover:text-blue-600"
                  onClick={() => openUrl(`${serverUrl}/${item.shortUrl}`)}
                  title={`${serverUrl}/${item.shortUrl}`}
                >
                  {item.shortUrl}
                </td>

                {/* CLICKS */}
                <td className="px-6 py-4 text-center font-medium">
                  {item.clicks}
                </td>

                {/* COPY ICON */}
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => copyToClipboard(item.shortUrl)}
                    className="hover:text-blue-500 transition"
                    title="Copy short URL"
                  >
                    📋
                  </button>
                </td>

                {/* DELETE ICON */}
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => deleteUrl(item._id)}
                    className="hover:text-red-500 transition"
                    title="Delete URL"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default DataTable;
