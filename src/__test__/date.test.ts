import useDate from "src/hook/useDate";
import { renderHook } from "@testing-library/react";

describe("Date Hook 테스트", () => {
  it("호출이 되나?", () => {
    const { result } = renderHook(() => useDate(new Date()));

    expect(1 + 1).toBe(2);
  });
});
