import { Image, StackItem, Stack, ImageFit, Text } from "@fluentui/react";
import { useLocation } from "preact-iso";

interface IActionItemProps {
    item: any;
    stylesUrl: string;
}

export function ActionItem(props: IActionItemProps) {
    const loc = useLocation();
    return (
        <Stack
            horizontal
            verticalAlign="center"
            styles={{
                root: {
                    ":hover": {
                        backgroundColor: "#f3f2f1",
                        cursor: "pointer",
                    },
                },
            }}
            onClick={() => {
                loc.route(props.item.location);
            }}
        >
            <StackItem>
                <Image
                    width={50}
                    height={50}
                    imageFit={ImageFit.centerContain}
                    alt={"Nothing"}
                    src={props.item.image}
                />
            </StackItem>
            <StackItem>
                <Stack tokens={{ padding: 10 }}>
                    <Text>{props.item.title}</Text>
                    <Text>{props.item.description}</Text>
                </Stack>
            </StackItem>
        </Stack>
    );
}
