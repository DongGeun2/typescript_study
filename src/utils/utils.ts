export function setWeek(day: number): { ko: string } {
  const days: { [key: number]: { ko: string } } = {
    0: { ko: "일" },
    1: { ko: "월" },
    2: { ko: "화" },
    3: { ko: "수" },
    4: { ko: "목" },
    5: { ko: "금" },
    6: { ko: "토" },
  };

  return days[day];
}

export function addZeroto0(number: number): string {
  return number < 10 ? `0${number}` : `${number}`;
}

export function addMonth(date: Date): Date {
  date.setMonth(date.getMonth() + 1);

  return new Date(date);
}

export function subMonth(date: Date): Date {
  date.setMonth(date.getMonth() - 1);

  return new Date(date);
}

export function formatDate(date: Date): string {
  if (!date) return "";

  const getYear = date.getFullYear();
  const getMonth = date.getMonth() + 1;
  const getDay = date.getDate();

  return `${getYear}-${addZeroto0(getMonth)}-${addZeroto0(getDay)}`;
}
