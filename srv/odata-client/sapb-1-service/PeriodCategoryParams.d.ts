import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PeriodCategoryParams
 */
export interface PeriodCategoryParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PeriodCategoryParams.build]] instead.
 */
export declare function createPeriodCategoryParams(json: any): PeriodCategoryParams;
/**
 * PeriodCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PeriodCategoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PeriodCategoryParams> {
    /**
     * Representation of the [[PeriodCategoryParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PeriodCategoryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PeriodCategoryParams {
    /**
     * Metadata information on all properties of the `PeriodCategoryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PeriodCategoryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PeriodCategoryParams;
}
//# sourceMappingURL=PeriodCategoryParams.d.ts.map