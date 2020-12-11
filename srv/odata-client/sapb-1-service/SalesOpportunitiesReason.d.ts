import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SalesOpportunitiesReason
 */
export interface SalesOpportunitiesReason {
    /**
     * Row No.
     * @nullable
     */
    rowNo?: number;
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
    /**
     * Reason.
     * @nullable
     */
    reason?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesReason.build]] instead.
 */
export declare function createSalesOpportunitiesReason(json: any): SalesOpportunitiesReason;
/**
 * SalesOpportunitiesReasonField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunitiesReasonField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesReason> {
    /**
     * Representation of the [[SalesOpportunitiesReason.rowNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesReason.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesReason.reason]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reason: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SalesOpportunitiesReasonField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesOpportunitiesReason {
    /**
     * Metadata information on all properties of the `SalesOpportunitiesReason` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesOpportunitiesReason>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesReason;
}
//# sourceMappingURL=SalesOpportunitiesReason.d.ts.map