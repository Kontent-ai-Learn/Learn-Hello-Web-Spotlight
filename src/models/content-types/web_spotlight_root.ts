import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type LandingPage } from './landing_page';
import { type Page } from './page';

/**
 * Generated by '@kontent-ai/model-generator@6.5.0'
 *
 * Web spotlight root
 * Id: bed6824b-55e7-493f-99be-2babc3d21798
 * Codename: web_spotlight_root
 */
export type WebSpotlightRoot = IContentItem<{
    /**
     * Content (modular_content)
     * Required: false
     * Id: 66da13d0-bc60-4615-a4bb-88a7e1b6e9db
     * Codename: content
     */
    content: Elements.LinkedItemsElement<LandingPage>;

    /**
     * Subpages (subpages)
     * Required: false
     * Id: af81d439-6115-42e5-a569-43043fbcf679
     * Codename: subpages
     */
    subpages: Elements.LinkedItemsElement<Page>;

    /**
     * Title (text)
     * Required: false
     * Id: 2b52a8c3-48a6-4ed9-a586-bb2b1524ab72
     * Codename: title
     */
    title: Elements.TextElement;
}>;
