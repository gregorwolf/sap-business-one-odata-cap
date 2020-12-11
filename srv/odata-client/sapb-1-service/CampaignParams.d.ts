import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CampaignParams
 */
export interface CampaignParams {
    /**
     * Campaign Number.
     * @nullable
     */
    campaignNumber?: number;
    /**
     * Campaign Name.
     * @nullable
     */
    campaignName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CampaignParams.build]] instead.
 */
export declare function createCampaignParams(json: any): CampaignParams;
/**
 * CampaignParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CampaignParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CampaignParams> {
    /**
     * Representation of the [[CampaignParams.campaignNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    campaignNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignParams.campaignName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    campaignName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CampaignParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CampaignParams {
    /**
     * Metadata information on all properties of the `CampaignParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CampaignParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CampaignParams;
}
//# sourceMappingURL=CampaignParams.d.ts.map