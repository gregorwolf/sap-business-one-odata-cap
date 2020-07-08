import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesOpportunityCompetitorSetupParams
 */
export interface SalesOpportunityCompetitorSetupParams {
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunityCompetitorSetupParams.build]] instead.
 */
export declare function createSalesOpportunityCompetitorSetupParams(json: any): SalesOpportunityCompetitorSetupParams;
/**
 * SalesOpportunityCompetitorSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunityCompetitorSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesOpportunityCompetitorSetupParams.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunityCompetitorSetupParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace SalesOpportunityCompetitorSetupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunityCompetitorSetupParams;
}
//# sourceMappingURL=SalesOpportunityCompetitorSetupParams.d.ts.map