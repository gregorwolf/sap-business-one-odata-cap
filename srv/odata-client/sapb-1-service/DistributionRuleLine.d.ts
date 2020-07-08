import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DistributionRuleLine
 */
export interface DistributionRuleLine {
    /**
     * Center Code.
     * @nullable
     */
    centerCode?: string;
    /**
     * Total In Center.
     * @nullable
     */
    totalInCenter?: number;
    /**
     * Effective From.
     * @nullable
     */
    effectiveFrom?: Moment;
    /**
     * Effective To.
     * @nullable
     */
    effectiveTo?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[DistributionRuleLine.build]] instead.
 */
export declare function createDistributionRuleLine(json: any): DistributionRuleLine;
/**
 * DistributionRuleLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DistributionRuleLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DistributionRuleLine.centerCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    centerCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DistributionRuleLine.totalInCenter]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalInCenter: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DistributionRuleLine.effectiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DistributionRuleLine.effectiveTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveTo: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace DistributionRuleLine {
    function build(json: {
        [keys: string]: FieldType;
    }): DistributionRuleLine;
}
//# sourceMappingURL=DistributionRuleLine.d.ts.map