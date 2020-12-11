import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DashboardPackageParams
 */
export interface DashboardPackageParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DashboardPackageParams.build]] instead.
 */
export declare function createDashboardPackageParams(json: any): DashboardPackageParams;
/**
 * DashboardPackageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DashboardPackageParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DashboardPackageParams> {
    /**
     * Representation of the [[DashboardPackageParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DashboardPackageParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DashboardPackageParams {
    /**
     * Metadata information on all properties of the `DashboardPackageParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DashboardPackageParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DashboardPackageParams;
}
//# sourceMappingURL=DashboardPackageParams.d.ts.map