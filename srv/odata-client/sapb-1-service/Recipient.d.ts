import { BoMsgRcpTypes } from './BoMsgRcpTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * Recipient
 */
export interface Recipient {
    /**
     * User Code.
     * @nullable
     */
    userCode?: string;
    /**
     * User Type.
     * @nullable
     */
    userType?: BoMsgRcpTypes;
    /**
     * Name To.
     * @nullable
     */
    nameTo?: string;
    /**
     * Send Email.
     * @nullable
     */
    sendEmail?: BoYesNoEnum;
    /**
     * Email Address.
     * @nullable
     */
    emailAddress?: string;
    /**
     * Send Sms.
     * @nullable
     */
    sendSms?: BoYesNoEnum;
    /**
     * Cellular Number.
     * @nullable
     */
    cellularNumber?: string;
    /**
     * Send Fax.
     * @nullable
     */
    sendFax?: BoYesNoEnum;
    /**
     * Fax Number.
     * @nullable
     */
    faxNumber?: string;
    /**
     * Send Internal.
     * @nullable
     */
    sendInternal?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[Recipient.build]] instead.
 */
export declare function createRecipient(json: any): Recipient;
/**
 * RecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RecipientField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Recipient> {
    /**
     * Representation of the [[Recipient.userCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.userType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.nameTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nameTo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.sendEmail]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sendEmail: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    emailAddress: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.sendSms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sendSms: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.cellularNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cellularNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.sendFax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sendFax: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    faxNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.sendInternal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sendInternal: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of RecipientField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace Recipient {
    /**
     * Metadata information on all properties of the `Recipient` complex type.
     */
    const _propertyMetadata: PropertyMetadata<Recipient>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): Recipient;
}
//# sourceMappingURL=Recipient.d.ts.map