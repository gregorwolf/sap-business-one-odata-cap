import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProductionOrderParams
 */
export interface ProductionOrderParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ProductionOrderParams.build]] instead.
 */
export declare function createProductionOrderParams(json: any): ProductionOrderParams;
/**
 * ProductionOrderParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProductionOrderParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductionOrderParams> {
    /**
     * Representation of the [[ProductionOrderParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ProductionOrderParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProductionOrderParams {
    /**
     * Metadata information on all properties of the `ProductionOrderParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProductionOrderParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ProductionOrderParams;
}
//# sourceMappingURL=ProductionOrderParams.d.ts.map