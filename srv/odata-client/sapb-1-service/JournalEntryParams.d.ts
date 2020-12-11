import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * JournalEntryParams
 */
export interface JournalEntryParams {
    /**
     * Jdt Num.
     * @nullable
     */
    jdtNum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[JournalEntryParams.build]] instead.
 */
export declare function createJournalEntryParams(json: any): JournalEntryParams;
/**
 * JournalEntryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class JournalEntryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, JournalEntryParams> {
    /**
     * Representation of the [[JournalEntryParams.jdtNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    jdtNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of JournalEntryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace JournalEntryParams {
    /**
     * Metadata information on all properties of the `JournalEntryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<JournalEntryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): JournalEntryParams;
}
//# sourceMappingURL=JournalEntryParams.d.ts.map