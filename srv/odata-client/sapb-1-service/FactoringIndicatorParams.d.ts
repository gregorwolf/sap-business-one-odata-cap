import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * FactoringIndicatorParams
 */
export interface FactoringIndicatorParams {
    /**
     * Indicator Code.
     * @nullable
     */
    indicatorCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FactoringIndicatorParams.build]] instead.
 */
export declare function createFactoringIndicatorParams(json: any): FactoringIndicatorParams;
/**
 * FactoringIndicatorParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FactoringIndicatorParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[FactoringIndicatorParams.indicatorCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    indicatorCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace FactoringIndicatorParams {
    function build(json: {
        [keys: string]: FieldType;
    }): FactoringIndicatorParams;
}
//# sourceMappingURL=FactoringIndicatorParams.d.ts.map