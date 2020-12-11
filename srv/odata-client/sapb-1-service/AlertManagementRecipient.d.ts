import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AlertManagementRecipient
 */
export interface AlertManagementRecipient {
    /**
     * User Code.
     * @nullable
     */
    userCode?: number;
    /**
     * Send E Mail.
     * @nullable
     */
    sendEMail?: BoYesNoEnum;
    /**
     * Send Sms.
     * @nullable
     */
    sendSms?: BoYesNoEnum;
    /**
     * Send Fax.
     * @nullable
     */
    sendFax?: BoYesNoEnum;
    /**
     * Send Internal.
     * @nullable
     */
    sendInternal?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[AlertManagementRecipient.build]] instead.
 */
export declare function createAlertManagementRecipient(json: any): AlertManagementRecipient;
/**
 * AlertManagementRecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AlertManagementRecipientField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlertManagementRecipient> {
    /**
     * Representation of the [[AlertManagementRecipient.userCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AlertManagementRecipient.sendEMail]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sendEMail: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AlertManagementRecipient.sendSms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sendSms: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AlertManagementRecipient.sendFax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sendFax: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AlertManagementRecipient.sendInternal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sendInternal: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of AlertManagementRecipientField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AlertManagementRecipient {
    /**
     * Metadata information on all properties of the `AlertManagementRecipient` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AlertManagementRecipient>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AlertManagementRecipient;
}
//# sourceMappingURL=AlertManagementRecipient.d.ts.map