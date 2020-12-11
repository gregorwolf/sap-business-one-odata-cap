import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SalesOpportunityReasonSetupParams
 */
export interface SalesOpportunityReasonSetupParams {
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
 * @deprecated Since v1.6.0. Use [[SalesOpportunityReasonSetupParams.build]] instead.
 */
export declare function createSalesOpportunityReasonSetupParams(json: any): SalesOpportunityReasonSetupParams;
/**
 * SalesOpportunityReasonSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunityReasonSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunityReasonSetupParams> {
    /**
     * Representation of the [[SalesOpportunityReasonSetupParams.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesOpportunityReasonSetupParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of SalesOpportunityReasonSetupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesOpportunityReasonSetupParams {
    /**
     * Metadata information on all properties of the `SalesOpportunityReasonSetupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesOpportunityReasonSetupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunityReasonSetupParams;
}
//# sourceMappingURL=SalesOpportunityReasonSetupParams.d.ts.map