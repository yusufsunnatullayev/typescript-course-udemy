import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0] as string),
      row[1] as string,
      row[2] as string,
      parseInt(row[3] as string),
      parseInt(row[4] as string),
      row[5] as MatchResult, // type assertion, telling ts that hey we know what is going on
      row[6] as string,
    ];
  }
}
