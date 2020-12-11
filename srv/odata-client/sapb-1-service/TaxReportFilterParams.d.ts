import { TaxReportFilterType } from './TaxReportFilterType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxReportFilterParams
 */
export interface TaxReportFilterParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Filter Type.
     * @nullable
     */
    filterType?: TaxReportFilterType;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxReportFilterParams.build]] instead.
 */
export declare function createTaxReportFilterParams(json: any): TaxReportFilterParams;
/**
 * TaxReportFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxReportFilterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxReportFilterParams> {
    /**
     * Representation of the [[TaxReportFilterParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxReportFilterParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxReportFilterParams.filterType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    filterType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of TaxReportFilterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxReportFilterParams {
    /**
     * Metadata information on all properties of the `TaxReportFilterParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxReportFilterParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxReportFilterParams;
}
//# sourceMappingURL=TaxReportFilterParams.d.ts.map