import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemDistributionRule
 */
export interface ItemDistributionRule {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Valid From.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * Valid To.
     * @nullable
     */
    validTo?: Moment;
    /**
     * Distribution Rule.
     * @nullable
     */
    distributionRule?: string;
    /**
     * Distribution Rule 2.
     * @nullable
     */
    distributionRule2?: string;
    /**
     * Distribution Rule 3.
     * @nullable
     */
    distributionRule3?: string;
    /**
     * Distribution Rule 4.
     * @nullable
     */
    distributionRule4?: string;
    /**
     * Distribution Rule 5.
     * @nullable
     */
    distributionRule5?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemDistributionRule.build]] instead.
 */
export declare function createItemDistributionRule(json: any): ItemDistributionRule;
/**
 * ItemDistributionRuleField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemDistributionRuleField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemDistributionRule.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    validFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.validTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    validTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ItemDistributionRule {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemDistributionRule;
}
//# sourceMappingURL=ItemDistributionRule.d.ts.map