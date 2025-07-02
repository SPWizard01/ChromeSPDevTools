import { Image, StackItem, Stack, ImageFit, Text } from "@fluentui/react";
import { constants } from "../actions/common/constants";
import type { ISharePointSiteInfo } from "../actions/common/interfaces";
import { spoRuntime } from "./runtimeStore";

interface IActionItemProps {
    item: any;
    stylesUrl: string;
}

export function ActionItem(props: IActionItemProps) {
    const onItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const codeStr: string = `
            (function(cdnUrl, stylesUrl) {
                var head = document.head || document.getElementsByTagName("${
                    constants.HTML_TAG_HEAD
                }")[0];
                var style = document.getElementById("${
                    constants.STYLE_TAG_ID
                }");
                
                if(!style){
                    style = document.createElement("${
                        constants.HTML_TAG_LINK
                    }");
                    style.type = "${constants.STYLE_TAG_ATTR_TYPE}";
                    style.rel = "${constants.STYLE_TAG_ATTR_REL}";
                    style.id = "${constants.STYLE_TAG_ID}";
                    style.href = stylesUrl;
                    head.appendChild(style);
                }

                var spInfo = document.getElementById("${
                    constants.SP_INFO_TAG_ID
                }");
                
                if(!spInfo){
                    spInfo = document.createElement("${
                        constants.HTML_TAG_SCRIPT
                    }");
                    spInfo.text = 'var spInfo = ${JSON.stringify(
                        spoRuntime.value
                    )};';
                    spInfo.id = "${constants.SP_INFO_TAG_ID}";
                    head.appendChild(spInfo);
                }

                var script = document.createElement("${
                    constants.HTML_TAG_SCRIPT
                }");
                script.src = cdnUrl;

                (document.head || document.documentElement).appendChild(script);
                script.parentNode.removeChild
            })("${props.item.scriptUrl}", "${props.stylesUrl}");`;
        chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
            // chrome.tabs.executeScript(
            //     tab[0].id,
            //     {
            //         code: codeStr,
            //     },
            //     () => {
            //         window.close();
            //     }
            // );
        });

        return false;
    };
    return (
        <Stack horizontal verticalAlign="center" styles={{
            root: {
                ":hover": {
                    backgroundColor: "#f3f2f1",
                    cursor: "pointer",
                }
            }
        }} onClick={()=> {alert("Clicked!");}}>
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
                <Stack tokens={{padding: 10}}>
                    <Text>{props.item.title}</Text>
                    <Text>{props.item.description}</Text>
                </Stack>
            </StackItem>
        </Stack>
    );
}
