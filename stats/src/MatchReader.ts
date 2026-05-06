import { CsvFileReader } from "./CsvFileReader";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
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
