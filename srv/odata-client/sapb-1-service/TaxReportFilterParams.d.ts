import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
}
/**
 * @deprecated Since v1.6.0. Use [[TaxReportFilterParams.build]] instead.
 */
export declare function createTaxReportFilterParams(json: any): TaxReportFilterParams;
/**
 * TaxReportFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxReportFilterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace TaxReportFilterParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxReportFilterParams;
}
//# sourceMappingURL=TaxReportFilterParams.d.ts.map