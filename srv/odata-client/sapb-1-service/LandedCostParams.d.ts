import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * LandedCostParams
 */
export interface LandedCostParams {
    /**
     * Landed Cost Number.
     * @nullable
     */
    landedCostNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[LandedCostParams.build]] instead.
 */
export declare function createLandedCostParams(json: any): LandedCostParams;
/**
 * LandedCostParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LandedCostParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LandedCostParams> {
    /**
     * Representation of the [[LandedCostParams.landedCostNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    landedCostNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of LandedCostParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace LandedCostParams {
    /**
     * Metadata information on all properties of the `LandedCostParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<LandedCostParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): LandedCostParams;
}
//# sourceMappingURL=LandedCostParams.d.ts.map