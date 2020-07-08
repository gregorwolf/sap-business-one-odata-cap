import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CampaignItem
 */
export interface CampaignItem {
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
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Name.
     * @nullable
     */
    itemName?: string;
    /**
     * Item Group.
     * @nullable
     */
    itemGroup?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CampaignItem.build]] instead.
 */
export declare function createCampaignItem(json: any): CampaignItem;
/**
 * CampaignItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CampaignItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CampaignItem.campaignNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    campaignNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignItem.campaignLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    campaignLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignItem.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignItem.itemName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignItem.itemGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemGroup: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CampaignItem {
    function build(json: {
        [keys: string]: FieldType;
    }): CampaignItem;
}
//# sourceMappingURL=CampaignItem.d.ts.map