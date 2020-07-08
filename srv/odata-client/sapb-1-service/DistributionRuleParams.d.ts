import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DistributionRuleParams
 */
export interface DistributionRuleParams {
    /**
     * Factor Code.
     * @nullable
     */
    factorCode?: string;
    /**
     * Factor Description.
     * @nullable
     */
    factorDescription?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DistributionRuleParams.build]] instead.
 */
export declare function createDistributionRuleParams(json: any): DistributionRuleParams;
/**
 * DistributionRuleParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DistributionRuleParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DistributionRuleParams.factorCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factorCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DistributionRuleParams.factorDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factorDescription: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DistributionRuleParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DistributionRuleParams;
}
//# sourceMappingURL=DistributionRuleParams.d.ts.map