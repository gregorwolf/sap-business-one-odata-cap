import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CampaignPartner
 */
export interface CampaignPartner {
    /**
     * Campaign Number.
     * @nullable
     */
    campaignNumber?: number;
    /**
     * Campaign Line Number.
     * @nullable
     */
    campaignLineNumber?: number;
    /**
     * Partner Id.
     * @nullable
     */
    partnerId?: number;
    /**
     * Relationship Code.
     * @nullable
     */
    relationshipCode?: number;
    /**
     * Related Bp.
     * @nullable
     */
    relatedBp?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CampaignPartner.build]] instead.
 */
export declare function createCampaignPartner(json: any): CampaignPartner;
/**
 * CampaignPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CampaignPartnerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CampaignPartner.campaignNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    campaignNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignPartner.campaignLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    campaignLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignPartner.partnerId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    partnerId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignPartner.relationshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    relationshipCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignPartner.relatedBp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    relatedBp: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignPartner.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CampaignPartner {
    function build(json: {
        [keys: string]: FieldType;
    }): CampaignPartner;
}
//# sourceMappingURL=CampaignPartner.d.ts.map