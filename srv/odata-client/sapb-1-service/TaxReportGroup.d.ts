import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxReportGroup
 */
export interface TaxReportGroup {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxReportGroup.build]] instead.
 */
export declare function createTaxReportGroup(json: any): TaxReportGroup;
/**
 * TaxReportGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxReportGroupField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxReportGroup.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TaxReportGroup {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxReportGroup;
}
//# sourceMappingURL=TaxReportGroup.d.ts.map