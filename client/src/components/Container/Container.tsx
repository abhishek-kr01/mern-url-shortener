import { useEffect, useState } from "react";
import axios from "axios";
import FormContainer from "../FormContainer/FormContainer";
import DataTable from "../DataTable/DataTable";
import type { UrlData } from "../../interface/UrlData";
import { serverUrl } from "../../helpers/Constants";

function Container() {
  const [data, setData] = useState<UrlData[]>([]);

  const fetchTableData = async (): Promise<void> => {
    try {
      const response = await axios.get(`${serverUrl}/api/shorturl`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching URLs:", error);
    }
  };

  // fetch once on mount
  useEffect(() => {
    (async () => {
      await fetchTableData();
    })();
  }, []);

  return (
    <>
      <FormContainer onSuccess={fetchTableData} />
      <DataTable data={data} updateReloadState={fetchTableData} />
    </>
  );
}

export default Container;
