import { pipe, pathOr, trim } from "ramda";

export default pipe(
    pathOr('', ['target', 'value']),
    trim
)