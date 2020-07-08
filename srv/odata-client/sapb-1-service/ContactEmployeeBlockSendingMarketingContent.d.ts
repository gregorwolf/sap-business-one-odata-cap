import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
}
/**
 * @deprecated Since v1.6.0. Use [[ContactEmployeeBlockSendingMarketingContent.build]] instead.
 */
export declare function createContactEmployeeBlockSendingMarketingContent(json: any): ContactEmployeeBlockSendingMarketingContent;
/**
 * ContactEmployeeBlockSendingMarketingContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ContactEmployeeBlockSendingMarketingContentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ContactEmployeeBlockSendingMarketingContent {
    function build(json: {
        [keys: string]: FieldType;
    }): ContactEmployeeBlockSendingMarketingContent;
}
//# sourceMappingURL=ContactEmployeeBlockSendingMarketingContent.d.ts.map