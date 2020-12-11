import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SalesOpportunitiesPartner
 */
export interface SalesOpportunitiesPartner {
    /**
     * Row No.
     * @nullable
     */
    rowNo?: number;
    /**
     * Partners.
     * @nullable
     */
    partners?: number;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Relationship Code.
     * @nullable
     */
    relationshipCode?: number;
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesPartner.build]] instead.
 */
export declare function createSalesOpportunitiesPartner(json: any): SalesOpportunitiesPartner;
/**
 * SalesOpportunitiesPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunitiesPartnerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesPartner> {
    /**
     * Representation of the [[SalesOpportunitiesPartner.rowNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesPartner.partners]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    partners: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesPartner.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesPartner.relationshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    relationshipCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesPartner.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SalesOpportunitiesPartnerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesOpportunitiesPartner {
    /**
     * Metadata information on all properties of the `SalesOpportunitiesPartner` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesOpportunitiesPartner>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesPartner;
}
//# sourceMappingURL=SalesOpportunitiesPartner.d.ts.map