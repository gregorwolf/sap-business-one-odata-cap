import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SalesPersonParams
 */
export interface SalesPersonParams {
    /**
     * Sales Employee Code.
     * @nullable
     */
    salesEmployeeCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesPersonParams.build]] instead.
 */
export declare function createSalesPersonParams(json: any): SalesPersonParams;
/**
 * SalesPersonParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesPersonParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesPersonParams> {
    /**
     * Representation of the [[SalesPersonParams.salesEmployeeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesEmployeeCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SalesPersonParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesPersonParams {
    /**
     * Metadata information on all properties of the `SalesPersonParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesPersonParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesPersonParams;
}
//# sourceMappingURL=SalesPersonParams.d.ts.map