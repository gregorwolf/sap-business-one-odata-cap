/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemPropertiesRequestBuilder } from './ItemPropertiesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ItemProperties" of service "SAPB1".
 */
export class ItemProperties extends Entity implements ItemPropertiesType {
  /**
   * Technical entity name for ItemProperties.
   */
  static _entityName = 'ItemProperties';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ItemProperties.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Number.
   * @nullable
   */
  number?: number;
  /**
   * Property Name.
   * @nullable
   */
  propertyName?: string;

  /**
   * Returns an entity builder to construct instances `ItemProperties`.
   * @returns A builder that constructs instances of entity type `ItemProperties`.
   */
  static builder(): EntityBuilderType<ItemProperties, ItemPropertiesTypeForceMandatory> {
    return Entity.entityBuilder(ItemProperties);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ItemProperties` entity type.
   * @returns A `ItemProperties` request builder.
   */
  static requestBuilder(): ItemPropertiesRequestBuilder {
    return new ItemPropertiesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ItemProperties`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ItemProperties`.
   */
  static customField(fieldName: string): CustomField<ItemProperties> {
    return Entity.customFieldSelector(fieldName, ItemProperties);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ItemPropertiesType {
  number?: number;
  propertyName?: string;
}

export interface ItemPropertiesTypeForceMandatory {
  number: number;
  propertyName: string;
}

export namespace ItemProperties {
  /**
   * Static representation of the [[number]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER: NumberField<ItemProperties> = new NumberField('Number', ItemProperties, 'Edm.Int32');
  /**
   * Static representation of the [[propertyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTY_NAME: StringField<ItemProperties> = new StringField('PropertyName', ItemProperties, 'Edm.String');
  /**
   * All fields of the ItemProperties entity.
   */
  export const _allFields: Array<NumberField<ItemProperties> | StringField<ItemProperties>> = [
    ItemProperties.NUMBER,
    ItemProperties.PROPERTY_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ItemProperties> = new AllFields('*', ItemProperties);
  /**
   * All key fields of the ItemProperties entity.
   */
  export const _keyFields: Array<Field<ItemProperties>> = [ItemProperties.NUMBER];
  /**
   * Mapping of all key field names to the respective static field property ItemProperties.
   */
  export const _keys: { [keys: string]: Field<ItemProperties> } = ItemProperties._keyFields.reduce((acc: { [keys: string]: Field<ItemProperties> }, field: Field<ItemProperties>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
