import { Checkbox } from "@fluentui/react";

interface ISpSearchSettingsCheckBoxProps {
    label: string;
    checked: boolean;
    action: any;
    onKeyPress: (ev: any) => void;
}

const SpSearchSettingsCheckBox: React.StatelessComponent<ISpSearchSettingsCheckBoxProps>
    = (props: ISpSearchSettingsCheckBoxProps) => {
        const onTrimDuplicateChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
            props.action(checked);
        };

        return (
            <Checkbox
                label={props.label}
                checked={props.checked}
                onChange={onTrimDuplicateChange}
                onKeyPress={props.onKeyPress} />
        );
    };

export default SpSearchSettingsCheckBox;
