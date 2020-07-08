import { ItemImagesRequestBuilder } from './ItemImagesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ItemImages" of service "SAPB1".
 */
export declare class ItemImages extends Entity implements ItemImagesType {
    /**
     * Technical entity name for ItemImages.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ItemImages.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Item Code.
     */
    itemCode: string;
    /**
     * Picture.
     */
    picture: string;
    /**
     * Returns an entity builder to construct instances `ItemImages`.
     * @returns A builder that constructs instances of entity type `ItemImages`.
     */
    static builder(): EntityBuilderType<ItemImages, ItemImagesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ItemImages` entity type.
     * @returns A `ItemImages` request builder.
     */
    static requestBuilder(): ItemImagesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ItemImages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ItemImages`.
     */
    static customField(fieldName: string): CustomField<ItemImages>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ItemImagesType {
    itemCode: string;
    picture: string;
}
export interface ItemImagesTypeForceMandatory {
    itemCode: string;
    picture: string;
}
export declare namespace ItemImages {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<ItemImages>;
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICTURE: StringField<ItemImages>;
    /**
     * All fields of the ItemImages entity.
     */
    const _allFields: Array<StringField<ItemImages>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ItemImages>;
    /**
     * All key fields of the ItemImages entity.
     */
    const _keyFields: Array<Field<ItemImages>>;
    /**
     * Mapping of all key field names to the respective static field property ItemImages.
     */
    const _keys: {
        [keys: string]: Field<ItemImages>;
    };
}
//# sourceMappingURL=ItemImages.d.ts.map