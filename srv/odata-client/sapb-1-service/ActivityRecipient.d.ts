import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ActivityRecipient
 */
export interface ActivityRecipient {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Recipient Code.
     * @nullable
     */
    recipientCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityRecipient.build]] instead.
 */
export declare function createActivityRecipient(json: any): ActivityRecipient;
/**
 * ActivityRecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityRecipientField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ActivityRecipient.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ActivityRecipient.recipientCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    recipientCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ActivityRecipient {
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityRecipient;
}
//# sourceMappingURL=ActivityRecipient.d.ts.map