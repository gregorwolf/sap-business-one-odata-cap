import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class SalesOpportunitiesReasonField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace SalesOpportunitiesReason {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesReason;
}
//# sourceMappingURL=SalesOpportunitiesReason.d.ts.map