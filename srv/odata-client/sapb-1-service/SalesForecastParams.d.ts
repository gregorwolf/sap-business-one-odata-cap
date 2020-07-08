import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesForecastParams
 */
export interface SalesForecastParams {
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesForecastParams.build]] instead.
 */
export declare function createSalesForecastParams(json: any): SalesForecastParams;
/**
 * SalesForecastParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesForecastParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesForecastParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesForecastParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesForecastParams;
}
//# sourceMappingURL=SalesForecastParams.d.ts.map