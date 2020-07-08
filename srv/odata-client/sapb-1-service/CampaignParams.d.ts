import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class CampaignParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace CampaignParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CampaignParams;
}
//# sourceMappingURL=CampaignParams.d.ts.map