import axios from "axios";
import { API_URL } from "src/constants";

export type IHoliday = {
  date: string;
  localName: string;
  name: string;
};

const getHoliday = (year: number): Promise<IHoliday[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/PublicHolidays/${year}/KR`)
      .then((res) => {
        const status = res?.status;
        const data: IHoliday[] = res?.data || [];

        if (status === 200) {
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const holidayService = {
  getHoliday,
};

export default holidayService;
