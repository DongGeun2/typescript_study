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
  return number < 9 ? `0${number}` : `${number}`;
}
