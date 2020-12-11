import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ContactEmployeeBlockSendingMarketingContent
 */
export interface ContactEmployeeBlockSendingMarketingContent {
    /**
     * Contact Employee Abs Entry.
     * @nullable
     */
    contactEmployeeAbsEntry?: number;
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
 * @deprecated Since v1.6.0. Use [[ContactEmployeeBlockSendingMarketingContent.build]] instead.
 */
export declare function createContactEmployeeBlockSendingMarketingContent(json: any): ContactEmployeeBlockSendingMarketingContent;
/**
 * ContactEmployeeBlockSendingMarketingContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ContactEmployeeBlockSendingMarketingContentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ContactEmployeeBlockSendingMarketingContent> {
    /**
     * Representation of the [[ContactEmployeeBlockSendingMarketingContent.contactEmployeeAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactEmployeeAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployeeBlockSendingMarketingContent.communicationMediaId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    communicationMediaId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployeeBlockSendingMarketingContent.choose]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    choose: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ContactEmployeeBlockSendingMarketingContentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ContactEmployeeBlockSendingMarketingContent {
    /**
     * Metadata information on all properties of the `ContactEmployeeBlockSendingMarketingContent` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ContactEmployeeBlockSendingMarketingContent>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ContactEmployeeBlockSendingMarketingContent;
}
//# sourceMappingURL=ContactEmployeeBlockSendingMarketingContent.d.ts.map