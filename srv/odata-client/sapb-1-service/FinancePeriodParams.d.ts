import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * FinancePeriodParams
 */
export interface FinancePeriodParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FinancePeriodParams.build]] instead.
 */
export declare function createFinancePeriodParams(json: any): FinancePeriodParams;
/**
 * FinancePeriodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FinancePeriodParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[FinancePeriodParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriodParams.periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodIndicator: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace FinancePeriodParams {
    function build(json: {
        [keys: string]: FieldType;
    }): FinancePeriodParams;
}
//# sourceMappingURL=FinancePeriodParams.d.ts.map