import { RecipientTypeEnum } from './RecipientTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Recipient Type.
     * @nullable
     */
    recipientType?: RecipientTypeEnum;
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
export declare class ActivityRecipientField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityRecipient> {
    /**
     * Representation of the [[ActivityRecipient.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ActivityRecipient.recipientType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    recipientType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ActivityRecipient.recipientCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    recipientCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ActivityRecipientField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ActivityRecipient {
    /**
     * Metadata information on all properties of the `ActivityRecipient` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ActivityRecipient>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityRecipient;
}
//# sourceMappingURL=ActivityRecipient.d.ts.map