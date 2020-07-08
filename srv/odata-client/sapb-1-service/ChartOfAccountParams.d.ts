import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ChartOfAccountParams
 */
export interface ChartOfAccountParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ChartOfAccountParams.build]] instead.
 */
export declare function createChartOfAccountParams(json: any): ChartOfAccountParams;
/**
 * ChartOfAccountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChartOfAccountParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ChartOfAccountParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ChartOfAccountParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ChartOfAccountParams;
}
//# sourceMappingURL=ChartOfAccountParams.d.ts.map