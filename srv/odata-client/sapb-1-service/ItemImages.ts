/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemImagesRequestBuilder } from './ItemImagesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ItemImages" of service "SAPB1".
 */
export class ItemImages extends Entity implements ItemImagesType {
  /**
   * Technical entity name for ItemImages.
   */
  static _entityName = 'ItemImages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ItemImages.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Item Code.
   */
  itemCode!: string;
  /**
   * Picture.
   */
  picture!: string;

  /**
   * Returns an entity builder to construct instances `ItemImages`.
   * @returns A builder that constructs instances of entity type `ItemImages`.
   */
  static builder(): EntityBuilderType<ItemImages, ItemImagesTypeForceMandatory> {
    return Entity.entityBuilder(ItemImages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ItemImages` entity type.
   * @returns A `ItemImages` request builder.
   */
  static requestBuilder(): ItemImagesRequestBuilder {
    return new ItemImagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ItemImages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ItemImages`.
   */
  static customField(fieldName: string): CustomField<ItemImages> {
    return Entity.customFieldSelector(fieldName, ItemImages);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ItemImagesType {
  itemCode: string;
  picture: string;
}

export interface ItemImagesTypeForceMandatory {
  itemCode: string;
  picture: string;
}

export namespace ItemImages {
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<ItemImages> = new StringField('ItemCode', ItemImages, 'Edm.String');
  /**
   * Static representation of the [[picture]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICTURE: StringField<ItemImages> = new StringField('Picture', ItemImages, 'Edm.String');
  /**
   * All fields of the ItemImages entity.
   */
  export const _allFields: Array<StringField<ItemImages>> = [
    ItemImages.ITEM_CODE,
    ItemImages.PICTURE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ItemImages> = new AllFields('*', ItemImages);
  /**
   * All key fields of the ItemImages entity.
   */
  export const _keyFields: Array<Field<ItemImages>> = [ItemImages.ITEM_CODE];
  /**
   * Mapping of all key field names to the respective static field property ItemImages.
   */
  export const _keys: { [keys: string]: Field<ItemImages> } = ItemImages._keyFields.reduce((acc: { [keys: string]: Field<ItemImages> }, field: Field<ItemImages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
