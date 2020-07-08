import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesOpportunityInterestSetupParams
 */
export interface SalesOpportunityInterestSetupParams {
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunityInterestSetupParams.build]] instead.
 */
export declare function createSalesOpportunityInterestSetupParams(json: any): SalesOpportunityInterestSetupParams;
/**
 * SalesOpportunityInterestSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunityInterestSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesOpportunityInterestSetupParams.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunityInterestSetupParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace SalesOpportunityInterestSetupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunityInterestSetupParams;
}
//# sourceMappingURL=SalesOpportunityInterestSetupParams.d.ts.map