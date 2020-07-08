import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesOpportunitySourceSetupParams
 */
export interface SalesOpportunitySourceSetupParams {
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
 * @deprecated Since v1.6.0. Use [[SalesOpportunitySourceSetupParams.build]] instead.
 */
export declare function createSalesOpportunitySourceSetupParams(json: any): SalesOpportunitySourceSetupParams;
/**
 * SalesOpportunitySourceSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunitySourceSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesOpportunitySourceSetupParams.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunitySourceSetupParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace SalesOpportunitySourceSetupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunitySourceSetupParams;
}
//# sourceMappingURL=SalesOpportunitySourceSetupParams.d.ts.map