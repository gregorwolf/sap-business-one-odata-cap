import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InternalReconciliationBp
 */
export interface InternalReconciliationBp {
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationBp.build]] instead.
 */
export declare function createInternalReconciliationBp(json: any): InternalReconciliationBp;
/**
 * InternalReconciliationBpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationBpField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationBp> {
    /**
     * Representation of the [[InternalReconciliationBp.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of InternalReconciliationBpField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InternalReconciliationBp {
    /**
     * Metadata information on all properties of the `InternalReconciliationBp` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InternalReconciliationBp>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InternalReconciliationBp;
}
//# sourceMappingURL=InternalReconciliationBp.d.ts.map