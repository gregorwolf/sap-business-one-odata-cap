import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DefaultElectronicSeriesParams
 */
export interface DefaultElectronicSeriesParams {
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Electronic Series.
     * @nullable
     */
    electronicSeries?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DefaultElectronicSeriesParams.build]] instead.
 */
export declare function createDefaultElectronicSeriesParams(json: any): DefaultElectronicSeriesParams;
/**
 * DefaultElectronicSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DefaultElectronicSeriesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DefaultElectronicSeriesParams> {
    /**
     * Representation of the [[DefaultElectronicSeriesParams.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DefaultElectronicSeriesParams.electronicSeries]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    electronicSeries: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DefaultElectronicSeriesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DefaultElectronicSeriesParams {
    /**
     * Metadata information on all properties of the `DefaultElectronicSeriesParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DefaultElectronicSeriesParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DefaultElectronicSeriesParams;
}
//# sourceMappingURL=DefaultElectronicSeriesParams.d.ts.map