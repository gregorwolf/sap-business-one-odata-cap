import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InternalReconciliationParams
 */
export interface InternalReconciliationParams {
    /**
     * Recon Num.
     * @nullable
     */
    reconNum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationParams.build]] instead.
 */
export declare function createInternalReconciliationParams(json: any): InternalReconciliationParams;
/**
 * InternalReconciliationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationParams> {
    /**
     * Representation of the [[InternalReconciliationParams.reconNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of InternalReconciliationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InternalReconciliationParams {
    /**
     * Metadata information on all properties of the `InternalReconciliationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InternalReconciliationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InternalReconciliationParams;
}
//# sourceMappingURL=InternalReconciliationParams.d.ts.map