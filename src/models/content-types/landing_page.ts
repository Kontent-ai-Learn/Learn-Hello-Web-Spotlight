import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@6.5.0'
 *
 * Landing page
 * Id: aca5f188-3d45-48fb-92c4-3c967739017c
 * Codename: landing_page
 */
export type LandingPage = IContentItem<{
    /**
     * Body (rich_text)
     * Required: true
     * Id: 8a470b69-63b7-4fd5-9418-f00cfd2189a2
     * Codename: body
     */
    body: Elements.RichTextElement;

    /**
     * Image (asset)
     * Required: false
     * Id: 87e4d8ee-9a0c-431c-8ea5-51e3a461102a
     * Codename: image
     */
    image: Elements.AssetsElement;

    /**
     * Title (text)
     * Required: true
     * Id: 23d8efc5-9ff5-48e8-a388-8656086a0edd
     * Codename: title
     */
    title: Elements.TextElement;
}>;
