import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0] as string),
          row[1] as string,
          row[2] as string,
          parseInt(row[3] as string),
          parseInt(row[4] as string),
          row[5] as MatchResult, // type assertion, telling ts that hey we know what is going on
          row[6] as string,
        ];
      });
  }
}
