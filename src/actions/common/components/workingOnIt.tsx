import { Spinner, SpinnerSize } from "@fluentui/react";
import { constants } from "../constants";

export const WorkingOnIt = () => (
    <div className="working-on-it-wrapper">
        <Spinner size={SpinnerSize.large} label={constants.WORKING_ON_IT_TEXT} />
    </div>
);
