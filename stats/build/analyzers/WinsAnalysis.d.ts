import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
export declare class WinsAnalysis implements Analyzer {
    team: string;
    constructor(team: string);
    run(matches: MatchData[]): string;
}
//# sourceMappingURL=WinsAnalysis.d.ts.map