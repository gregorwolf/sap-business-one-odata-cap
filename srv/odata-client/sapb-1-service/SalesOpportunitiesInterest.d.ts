import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesOpportunitiesInterest
 */
export interface SalesOpportunitiesInterest {
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
     * Interest Id.
     * @nullable
     */
    interestId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesInterest.build]] instead.
 */
export declare function createSalesOpportunitiesInterest(json: any): SalesOpportunitiesInterest;
/**
 * SalesOpportunitiesInterestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunitiesInterestField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesOpportunitiesInterest.rowNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesInterest.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitiesInterest.interestId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    interestId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesOpportunitiesInterest {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesInterest;
}
//# sourceMappingURL=SalesOpportunitiesInterest.d.ts.map