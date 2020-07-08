import { DocsInWtGroups, DocsInWtGroupsField } from './DocsInWtGroups';
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WtGroups
 */
export interface WtGroups {
    /**
     * Wt Abs Entry.
     * @nullable
     */
    wtAbsEntry?: number;
    /**
     * Percent.
     * @nullable
     */
    percent?: number;
    /**
     * Sum Vat Amount.
     * @nullable
     */
    sumVatAmount?: number;
    /**
     * Sum Doc Total.
     * @nullable
     */
    sumDocTotal?: number;
    /**
     * Sum Base Amount.
     * @nullable
     */
    sumBaseAmount?: number;
    /**
     * Sum Accum Amount.
     * @nullable
     */
    sumAccumAmount?: number;
    /**
     * Sum Percept Amount.
     * @nullable
     */
    sumPerceptAmount?: number;
    /**
     * Docs In Wt Groups Collection.
     * @nullable
     */
    docsInWtGroupsCollection?: DocsInWtGroups;
}
/**
 * @deprecated Since v1.6.0. Use [[WtGroups.build]] instead.
 */
export declare function createWtGroups(json: any): WtGroups;
/**
 * WtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtGroupsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WtGroups.wtAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtGroups.percent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtGroups.sumVatAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumVatAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtGroups.sumDocTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumDocTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtGroups.sumBaseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumBaseAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtGroups.sumAccumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumAccumAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtGroups.sumPerceptAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumPerceptAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtGroups.docsInWtGroupsCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docsInWtGroupsCollection: DocsInWtGroupsField<EntityT>;
}
export declare namespace WtGroups {
    function build(json: {
        [keys: string]: FieldType | DocsInWtGroups;
    }): WtGroups;
}
//# sourceMappingURL=WtGroups.d.ts.map