import { MatchData } from "./MatchData";
export interface Analyzer {
    run(macthes: MatchData[]): string;
}
export interface OutputTarget {
    print(report: string): void;
}
export declare class Summary {
    analyzer: Analyzer;
    outputTarget: OutputTarget;
    static winsAnalysisWithHtmlReport(team: string): Summary;
    constructor(analyzer: Analyzer, outputTarget: OutputTarget);
    buildAndPrintReport(matches: MatchData[]): void;
}
//# sourceMappingURL=Summary.d.ts.map