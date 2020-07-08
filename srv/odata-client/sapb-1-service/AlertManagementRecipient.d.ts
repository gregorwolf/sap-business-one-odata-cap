import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AlertManagementRecipient
 */
export interface AlertManagementRecipient {
    /**
     * User Code.
     * @nullable
     */
    userCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[AlertManagementRecipient.build]] instead.
 */
export declare function createAlertManagementRecipient(json: any): AlertManagementRecipient;
/**
 * AlertManagementRecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AlertManagementRecipientField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AlertManagementRecipient.userCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace AlertManagementRecipient {
    function build(json: {
        [keys: string]: FieldType;
    }): AlertManagementRecipient;
}
//# sourceMappingURL=AlertManagementRecipient.d.ts.map