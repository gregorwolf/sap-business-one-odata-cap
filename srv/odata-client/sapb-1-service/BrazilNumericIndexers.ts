/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilNumericIndexersRequestBuilder } from './BrazilNumericIndexersRequestBuilder';
import { BrazilNumericIndexerTypes } from './BrazilNumericIndexerTypes';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BrazilNumericIndexers" of service "SAPB1".
 */
export class BrazilNumericIndexers extends EntityV4 implements BrazilNumericIndexersType {
  /**
   * Technical entity name for BrazilNumericIndexers.
   */
  static _entityName = 'BrazilNumericIndexers';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Indexer Type.
   * @nullable
   */
  indexerType?: BrazilNumericIndexerTypes;
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Id.
   * @nullable
   */
  id?: number;
  /**
   * One-to-many navigation property to the [[BrazilBeverageIndexers]] entity.
   */
  brazilBeverageIndexers!: BrazilBeverageIndexers[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlaces!: BusinessPlaces[];

  /**
   * Returns an entity builder to construct instances of `BrazilNumericIndexers`.
   * @returns A builder that constructs instances of entity type `BrazilNumericIndexers`.
   */
  static builder(): EntityBuilderType<BrazilNumericIndexers, BrazilNumericIndexersType> {
    return EntityV4.entityBuilder(BrazilNumericIndexers);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BrazilNumericIndexers` entity type.
   * @returns A `BrazilNumericIndexers` request builder.
   */
  static requestBuilder(): BrazilNumericIndexersRequestBuilder {
    return new BrazilNumericIndexersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilNumericIndexers`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BrazilNumericIndexers`.
   */
  static customField(fieldName: string): CustomFieldV4<BrazilNumericIndexers> {
    return EntityV4.customFieldSelector(fieldName, BrazilNumericIndexers);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BrazilBeverageIndexers, BrazilBeverageIndexersType } from './BrazilBeverageIndexers';
import { Items, ItemsType } from './Items';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

export interface BrazilNumericIndexersType {
  indexerType?: BrazilNumericIndexerTypes | null;
  code?: number | null;
  description?: string | null;
  id?: number | null;
  brazilBeverageIndexers: BrazilBeverageIndexersType[];
  items: ItemsType[];
  businessPlaces: BusinessPlacesType[];
}

export namespace BrazilNumericIndexers {
  /**
   * Static representation of the [[indexerType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDEXER_TYPE: EnumField<BrazilNumericIndexers> = new EnumField('IndexerType', BrazilNumericIndexers);
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<BrazilNumericIndexers> = new NumberField('Code', BrazilNumericIndexers, 'Edm.Int32');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<BrazilNumericIndexers> = new StringField('Description', BrazilNumericIndexers, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: NumberField<BrazilNumericIndexers> = new NumberField('ID', BrazilNumericIndexers, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[brazilBeverageIndexers]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_BEVERAGE_INDEXERS: OneToManyLink<BrazilNumericIndexers, BrazilBeverageIndexers> = new OneToManyLink('BrazilBeverageIndexers', BrazilNumericIndexers, BrazilBeverageIndexers);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<BrazilNumericIndexers, Items> = new OneToManyLink('Items', BrazilNumericIndexers, Items);
  /**
   * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACES: OneToManyLink<BrazilNumericIndexers, BusinessPlaces> = new OneToManyLink('BusinessPlaces', BrazilNumericIndexers, BusinessPlaces);
  /**
   * All fields of the BrazilNumericIndexers entity.
   */
  export const _allFields: Array<EnumField<BrazilNumericIndexers> | NumberField<BrazilNumericIndexers> | StringField<BrazilNumericIndexers> | OneToManyLink<BrazilNumericIndexers, BrazilBeverageIndexers> | OneToManyLink<BrazilNumericIndexers, Items> | OneToManyLink<BrazilNumericIndexers, BusinessPlaces>> = [
    BrazilNumericIndexers.INDEXER_TYPE,
    BrazilNumericIndexers.CODE,
    BrazilNumericIndexers.DESCRIPTION,
    BrazilNumericIndexers.ID,
    BrazilNumericIndexers.BRAZIL_BEVERAGE_INDEXERS,
    BrazilNumericIndexers.ITEMS,
    BrazilNumericIndexers.BUSINESS_PLACES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BrazilNumericIndexers> = new AllFields('*', BrazilNumericIndexers);
  /**
   * All key fields of the BrazilNumericIndexers entity.
   */
  export const _keyFields: Array<Field<BrazilNumericIndexers>> = [BrazilNumericIndexers.ID];
  /**
   * Mapping of all key field names to the respective static field property BrazilNumericIndexers.
   */
  export const _keys: { [keys: string]: Field<BrazilNumericIndexers> } = BrazilNumericIndexers._keyFields.reduce((acc: { [keys: string]: Field<BrazilNumericIndexers> }, field: Field<BrazilNumericIndexers>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
