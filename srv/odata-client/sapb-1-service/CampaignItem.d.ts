import { CampaignItemTypeEnum } from './CampaignItemTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Item Type.
     * @nullable
     */
    itemType?: CampaignItemTypeEnum;
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
export declare class CampaignItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CampaignItem> {
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
     * Representation of the [[CampaignItem.itemType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignItem.itemGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemGroup: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CampaignItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CampaignItem {
    /**
     * Metadata information on all properties of the `CampaignItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CampaignItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CampaignItem;
}
//# sourceMappingURL=CampaignItem.d.ts.map