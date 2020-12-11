import { ThreatLevelEnum } from './ThreatLevelEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Threat Level.
     * @nullable
     */
    threatLevel?: ThreatLevelEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunityCompetitorSetupParams.build]] instead.
 */
export declare function createSalesOpportunityCompetitorSetupParams(json: any): SalesOpportunityCompetitorSetupParams;
/**
 * SalesOpportunityCompetitorSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesOpportunityCompetitorSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunityCompetitorSetupParams> {
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
    /**
     * Representation of the [[SalesOpportunityCompetitorSetupParams.threatLevel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    threatLevel: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of SalesOpportunityCompetitorSetupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesOpportunityCompetitorSetupParams {
    /**
     * Metadata information on all properties of the `SalesOpportunityCompetitorSetupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesOpportunityCompetitorSetupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesOpportunityCompetitorSetupParams;
}
//# sourceMappingURL=SalesOpportunityCompetitorSetupParams.d.ts.map