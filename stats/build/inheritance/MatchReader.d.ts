import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
type MatchData = [Date, string, string, number, number, MatchResult, string];
export declare class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData;
}
export {};
//# sourceMappingURL=MatchReader.d.ts.map