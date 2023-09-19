import { createDeliveryClient } from "@kontent-ai/delivery-sdk";

export const deliveryClient = createDeliveryClient({
    // DISCLAIMER:
    //  These variables are included in the build. See https://create-react-app.dev/docs/adding-custom-environment-variables/
    //  Regenerate your API key after you're done with the demo.
    environmentId: process.env.REACT_APP_KONTENT_AI_ENVIRONMENT_ID || '',
    previewApiKey: process.env.REACT_APP_KONTENT_AI_PREVIEW_API_KEY,
    defaultQueryConfig: {
        usePreviewMode: true
    }
})