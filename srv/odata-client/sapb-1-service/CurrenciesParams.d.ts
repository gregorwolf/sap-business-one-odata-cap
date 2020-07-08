import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CurrenciesParams
 */
export interface CurrenciesParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CurrenciesParams.build]] instead.
 */
export declare function createCurrenciesParams(json: any): CurrenciesParams;
/**
 * CurrenciesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CurrenciesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CurrenciesParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CurrenciesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CurrenciesParams;
}
//# sourceMappingURL=CurrenciesParams.d.ts.map