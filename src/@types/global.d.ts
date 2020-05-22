/*
Copyright 2020 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import "matrix-react-sdk/src/@types/global"; // load matrix-react-sdk's type extensions first
import type {Renderer} from "react-dom";

declare global {
    interface Window {
        mxSendRageshake: (text: string, withLogs?: boolean) => void;
        matrixChat: ReturnType<Renderer>;
        Object: any;
        // electron-only
        ipcRenderer: any;

        // opera-only
        opera: any;

        // https://developer.mozilla.org/en-US/docs/Web/API/InstallTrigger
        InstallTrigger: any;
    }
}

// add method which is missing from the node typing
declare module "url" {
    interface Url {
        format(): string;
    }
}
