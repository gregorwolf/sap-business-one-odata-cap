import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class SalesOpportunitiesCompetitionItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesCompetitionItem> {
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
    /**
     * Creates an instance of SalesOpportunitiesCompetitionItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesOpportunitiesCompetitionItem {
    /**
     * Metadata information on all properties of the `SalesOpportunitiesCompetitionItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesOpportunitiesCompetitionItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesCompetitionItem;
}
//# sourceMappingURL=SalesOpportunitiesCompetitionItem.d.ts.map