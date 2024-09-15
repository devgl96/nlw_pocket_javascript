import dayjs from "dayjs";

type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export async function getSummary(): Promise<SummaryResponse> {
  const timezoneOffset = dayjs().utcOffset();
  const response = await fetch(
    `http://localhost:3333/summary?timezoneOffset=${timezoneOffset}`
  );
  const data = (await response.json()) as { summary: SummaryResponse };

  return data.summary;
}
