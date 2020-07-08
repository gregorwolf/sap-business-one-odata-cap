import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpBlockSendingMarketingContent
 */
export interface BpBlockSendingMarketingContent {
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Communication Media Id.
     * @nullable
     */
    communicationMediaId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BpBlockSendingMarketingContent.build]] instead.
 */
export declare function createBpBlockSendingMarketingContent(json: any): BpBlockSendingMarketingContent;
/**
 * BpBlockSendingMarketingContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpBlockSendingMarketingContentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpBlockSendingMarketingContent.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBlockSendingMarketingContent.communicationMediaId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    communicationMediaId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BpBlockSendingMarketingContent {
    function build(json: {
        [keys: string]: FieldType;
    }): BpBlockSendingMarketingContent;
}
//# sourceMappingURL=BpBlockSendingMarketingContent.d.ts.map