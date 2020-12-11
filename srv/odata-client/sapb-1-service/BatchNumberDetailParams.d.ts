import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BatchNumberDetailParams
 */
export interface BatchNumberDetailParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BatchNumberDetailParams.build]] instead.
 */
export declare function createBatchNumberDetailParams(json: any): BatchNumberDetailParams;
/**
 * BatchNumberDetailParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BatchNumberDetailParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BatchNumberDetailParams> {
    /**
     * Representation of the [[BatchNumberDetailParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BatchNumberDetailParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BatchNumberDetailParams {
    /**
     * Metadata information on all properties of the `BatchNumberDetailParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BatchNumberDetailParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BatchNumberDetailParams;
}
//# sourceMappingURL=BatchNumberDetailParams.d.ts.map