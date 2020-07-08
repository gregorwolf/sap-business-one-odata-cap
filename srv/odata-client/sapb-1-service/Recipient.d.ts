import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
     * Name To.
     * @nullable
     */
    nameTo?: string;
    /**
     * Email Address.
     * @nullable
     */
    emailAddress?: string;
    /**
     * Cellular Number.
     * @nullable
     */
    cellularNumber?: string;
    /**
     * Fax Number.
     * @nullable
     */
    faxNumber?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[Recipient.build]] instead.
 */
export declare function createRecipient(json: any): Recipient;
/**
 * RecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RecipientField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Recipient.userCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.nameTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nameTo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    emailAddress: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.cellularNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cellularNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Recipient.faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    faxNumber: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace Recipient {
    function build(json: {
        [keys: string]: FieldType;
    }): Recipient;
}
//# sourceMappingURL=Recipient.d.ts.map