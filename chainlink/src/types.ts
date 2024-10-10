export type BoardProps = {
    userId: string;
    words: string[];
    status: string[][];
    entered: number[];
    // 0 - not entered, 1 - correct, 2 - correct, -1 - wrong
}