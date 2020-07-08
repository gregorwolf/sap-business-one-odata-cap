import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CampaignResponseTypeParams
 */
export interface CampaignResponseTypeParams {
    /**
     * Response Type.
     * @nullable
     */
    responseType?: string;
    /**
     * Response Type Description.
     * @nullable
     */
    responseTypeDescription?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CampaignResponseTypeParams.build]] instead.
 */
export declare function createCampaignResponseTypeParams(json: any): CampaignResponseTypeParams;
/**
 * CampaignResponseTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CampaignResponseTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CampaignResponseTypeParams.responseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    responseType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignResponseTypeParams.responseTypeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    responseTypeDescription: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CampaignResponseTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CampaignResponseTypeParams;
}
//# sourceMappingURL=CampaignResponseTypeParams.d.ts.map