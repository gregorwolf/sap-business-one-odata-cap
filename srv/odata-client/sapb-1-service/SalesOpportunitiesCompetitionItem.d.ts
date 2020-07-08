import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesOpportunitiesCompetitionItem
 */
export interface SalesOpportunitiesCompetitionItem {
    /**
     * Row No.
     * @nullable
     */
    rowNo?: number;
    /**
     * Competition.
     * @nullable
     */
    competition?: number;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
    /**
     * Won Or Lost.
     * @nullable
     */
    wonOrLost?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesCompetitionItem.build]] instead.
 */
export declare function createSalesOpportunitiesCompetitionItem(json: any): SalesOpportunitiesCompetitionItem;
/**
 * SalesOpportunitiesCompetitionItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunitiesCompetitionItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesOpportunitiesCompetitionItem.rowNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesCompetitionItem.competition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    competition: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesCompetitionItem.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesCompetitionItem.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesCompetitionItem.wonOrLost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wonOrLost: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace SalesOpportunitiesCompetitionItem {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesCompetitionItem;
}
//# sourceMappingURL=SalesOpportunitiesCompetitionItem.d.ts.map