import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Choose.
     * @nullable
     */
    choose?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[BpBlockSendingMarketingContent.build]] instead.
 */
export declare function createBpBlockSendingMarketingContent(json: any): BpBlockSendingMarketingContent;
/**
 * BpBlockSendingMarketingContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpBlockSendingMarketingContentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpBlockSendingMarketingContent> {
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
    /**
     * Representation of the [[BpBlockSendingMarketingContent.choose]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    choose: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of BpBlockSendingMarketingContentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BpBlockSendingMarketingContent {
    /**
     * Metadata information on all properties of the `BpBlockSendingMarketingContent` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BpBlockSendingMarketingContent>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BpBlockSendingMarketingContent;
}
//# sourceMappingURL=BpBlockSendingMarketingContent.d.ts.map