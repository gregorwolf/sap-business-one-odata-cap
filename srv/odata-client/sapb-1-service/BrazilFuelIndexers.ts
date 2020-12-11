/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilFuelIndexersRequestBuilder } from './BrazilFuelIndexersRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BrazilFuelIndexers" of service "SAPB1".
 */
export class BrazilFuelIndexers extends EntityV4 implements BrazilFuelIndexersType {
  /**
   * Technical entity name for BrazilFuelIndexers.
   */
  static _entityName = 'BrazilFuelIndexers';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Fuel Id.
   * @nullable
   */
  fuelId?: number;
  /**
   * Fuel Group Code.
   * @nullable
   */
  fuelGroupCode?: number;
  /**
   * Fuel Code.
   * @nullable
   */
  fuelCode?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];

  /**
   * Returns an entity builder to construct instances of `BrazilFuelIndexers`.
   * @returns A builder that constructs instances of entity type `BrazilFuelIndexers`.
   */
  static builder(): EntityBuilderType<BrazilFuelIndexers, BrazilFuelIndexersType> {
    return EntityV4.entityBuilder(BrazilFuelIndexers);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BrazilFuelIndexers` entity type.
   * @returns A `BrazilFuelIndexers` request builder.
   */
  static requestBuilder(): BrazilFuelIndexersRequestBuilder {
    return new BrazilFuelIndexersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilFuelIndexers`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BrazilFuelIndexers`.
   */
  static customField(fieldName: string): CustomFieldV4<BrazilFuelIndexers> {
    return EntityV4.customFieldSelector(fieldName, BrazilFuelIndexers);
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

export interface BrazilFuelIndexersType {
  fuelId?: number | null;
  fuelGroupCode?: number | null;
  fuelCode?: string | null;
  description?: string | null;
  items: ItemsType[];
}

export namespace BrazilFuelIndexers {
  /**
   * Static representation of the [[fuelId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUEL_ID: NumberField<BrazilFuelIndexers> = new NumberField('FuelID', BrazilFuelIndexers, 'Edm.Int32');
  /**
   * Static representation of the [[fuelGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUEL_GROUP_CODE: NumberField<BrazilFuelIndexers> = new NumberField('FuelGroupCode', BrazilFuelIndexers, 'Edm.Int32');
  /**
   * Static representation of the [[fuelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUEL_CODE: StringField<BrazilFuelIndexers> = new StringField('FuelCode', BrazilFuelIndexers, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<BrazilFuelIndexers> = new StringField('Description', BrazilFuelIndexers, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<BrazilFuelIndexers, Items> = new OneToManyLink('Items', BrazilFuelIndexers, Items);
  /**
   * All fields of the BrazilFuelIndexers entity.
   */
  export const _allFields: Array<NumberField<BrazilFuelIndexers> | StringField<BrazilFuelIndexers> | OneToManyLink<BrazilFuelIndexers, Items>> = [
    BrazilFuelIndexers.FUEL_ID,
    BrazilFuelIndexers.FUEL_GROUP_CODE,
    BrazilFuelIndexers.FUEL_CODE,
    BrazilFuelIndexers.DESCRIPTION,
    BrazilFuelIndexers.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BrazilFuelIndexers> = new AllFields('*', BrazilFuelIndexers);
  /**
   * All key fields of the BrazilFuelIndexers entity.
   */
  export const _keyFields: Array<Field<BrazilFuelIndexers>> = [BrazilFuelIndexers.FUEL_ID];
  /**
   * Mapping of all key field names to the respective static field property BrazilFuelIndexers.
   */
  export const _keys: { [keys: string]: Field<BrazilFuelIndexers> } = BrazilFuelIndexers._keyFields.reduce((acc: { [keys: string]: Field<BrazilFuelIndexers> }, field: Field<BrazilFuelIndexers>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
