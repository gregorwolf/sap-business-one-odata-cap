/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ManufacturersRequestBuilder } from './ManufacturersRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Manufacturers" of service "SAPB1".
 */
export class Manufacturers extends Entity implements ManufacturersType {
  /**
   * Technical entity name for Manufacturers.
   */
  static _entityName = 'Manufacturers';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Manufacturers.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Manufacturer Name.
   * @nullable
   */
  manufacturerName?: string;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];

  /**
   * Returns an entity builder to construct instances `Manufacturers`.
   * @returns A builder that constructs instances of entity type `Manufacturers`.
   */
  static builder(): EntityBuilderType<Manufacturers, ManufacturersTypeForceMandatory> {
    return Entity.entityBuilder(Manufacturers);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Manufacturers` entity type.
   * @returns A `Manufacturers` request builder.
   */
  static requestBuilder(): ManufacturersRequestBuilder {
    return new ManufacturersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Manufacturers`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Manufacturers`.
   */
  static customField(fieldName: string): CustomField<Manufacturers> {
    return Entity.customFieldSelector(fieldName, Manufacturers);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Items, ItemsType } from './Items';

export interface ManufacturersType {
  code?: number;
  manufacturerName?: string;
  items: ItemsType[];
}

export interface ManufacturersTypeForceMandatory {
  code: number;
  manufacturerName: string;
  items: ItemsType[];
}

export namespace Manufacturers {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<Manufacturers> = new NumberField('Code', Manufacturers, 'Edm.Int32');
  /**
   * Static representation of the [[manufacturerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUFACTURER_NAME: StringField<Manufacturers> = new StringField('ManufacturerName', Manufacturers, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<Manufacturers, Items> = new OneToManyLink('Items', Manufacturers, Items);
  /**
   * All fields of the Manufacturers entity.
   */
  export const _allFields: Array<NumberField<Manufacturers> | StringField<Manufacturers> | OneToManyLink<Manufacturers, Items>> = [
    Manufacturers.CODE,
    Manufacturers.MANUFACTURER_NAME,
    Manufacturers.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Manufacturers> = new AllFields('*', Manufacturers);
  /**
   * All key fields of the Manufacturers entity.
   */
  export const _keyFields: Array<Field<Manufacturers>> = [Manufacturers.CODE];
  /**
   * Mapping of all key field names to the respective static field property Manufacturers.
   */
  export const _keys: { [keys: string]: Field<Manufacturers> } = Manufacturers._keyFields.reduce((acc: { [keys: string]: Field<Manufacturers> }, field: Field<Manufacturers>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
