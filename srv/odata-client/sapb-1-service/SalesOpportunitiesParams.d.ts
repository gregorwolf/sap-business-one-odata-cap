import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesOpportunitiesParams
 */
export interface SalesOpportunitiesParams {
    /**
     * Sequential No.
     * @nullable
     */
    sequentialNo?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesParams.build]] instead.
 */
export declare function createSalesOpportunitiesParams(json: any): SalesOpportunitiesParams;
/**
 * SalesOpportunitiesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunitiesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesOpportunitiesParams.sequentialNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequentialNo: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesOpportunitiesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitiesParams;
}
//# sourceMappingURL=SalesOpportunitiesParams.d.ts.map