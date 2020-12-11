/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilStringIndexersRequestBuilder } from './BrazilStringIndexersRequestBuilder';
import { BrazilStringIndexerTypes } from './BrazilStringIndexerTypes';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BrazilStringIndexers" of service "SAPB1".
 */
export class BrazilStringIndexers extends EntityV4 implements BrazilStringIndexersType {
  /**
   * Technical entity name for BrazilStringIndexers.
   */
  static _entityName = 'BrazilStringIndexers';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Indexer Type.
   * @nullable
   */
  indexerType?: BrazilStringIndexerTypes;
  /**
   * Code.
   * @nullable
   */
  code?: string;
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
   * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes[];

  /**
   * Returns an entity builder to construct instances of `BrazilStringIndexers`.
   * @returns A builder that constructs instances of entity type `BrazilStringIndexers`.
   */
  static builder(): EntityBuilderType<BrazilStringIndexers, BrazilStringIndexersType> {
    return EntityV4.entityBuilder(BrazilStringIndexers);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BrazilStringIndexers` entity type.
   * @returns A `BrazilStringIndexers` request builder.
   */
  static requestBuilder(): BrazilStringIndexersRequestBuilder {
    return new BrazilStringIndexersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilStringIndexers`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BrazilStringIndexers`.
   */
  static customField(fieldName: string): CustomFieldV4<BrazilStringIndexers> {
    return EntityV4.customFieldSelector(fieldName, BrazilStringIndexers);
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
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';

export interface BrazilStringIndexersType {
  indexerType?: BrazilStringIndexerTypes | null;
  code?: string | null;
  description?: string | null;
  id?: number | null;
  brazilBeverageIndexers: BrazilBeverageIndexersType[];
  items: ItemsType[];
  businessPlaces: BusinessPlacesType[];
  withholdingTaxCodes: WithholdingTaxCodesType[];
}

export namespace BrazilStringIndexers {
  /**
   * Static representation of the [[indexerType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDEXER_TYPE: EnumField<BrazilStringIndexers> = new EnumField('IndexerType', BrazilStringIndexers);
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<BrazilStringIndexers> = new StringField('Code', BrazilStringIndexers, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<BrazilStringIndexers> = new StringField('Description', BrazilStringIndexers, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: NumberField<BrazilStringIndexers> = new NumberField('ID', BrazilStringIndexers, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[brazilBeverageIndexers]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_BEVERAGE_INDEXERS: OneToManyLink<BrazilStringIndexers, BrazilBeverageIndexers> = new OneToManyLink('BrazilBeverageIndexers', BrazilStringIndexers, BrazilBeverageIndexers);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<BrazilStringIndexers, Items> = new OneToManyLink('Items', BrazilStringIndexers, Items);
  /**
   * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACES: OneToManyLink<BrazilStringIndexers, BusinessPlaces> = new OneToManyLink('BusinessPlaces', BrazilStringIndexers, BusinessPlaces);
  /**
   * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODES: OneToManyLink<BrazilStringIndexers, WithholdingTaxCodes> = new OneToManyLink('WithholdingTaxCodes', BrazilStringIndexers, WithholdingTaxCodes);
  /**
   * All fields of the BrazilStringIndexers entity.
   */
  export const _allFields: Array<EnumField<BrazilStringIndexers> | StringField<BrazilStringIndexers> | NumberField<BrazilStringIndexers> | OneToManyLink<BrazilStringIndexers, BrazilBeverageIndexers> | OneToManyLink<BrazilStringIndexers, Items> | OneToManyLink<BrazilStringIndexers, BusinessPlaces> | OneToManyLink<BrazilStringIndexers, WithholdingTaxCodes>> = [
    BrazilStringIndexers.INDEXER_TYPE,
    BrazilStringIndexers.CODE,
    BrazilStringIndexers.DESCRIPTION,
    BrazilStringIndexers.ID,
    BrazilStringIndexers.BRAZIL_BEVERAGE_INDEXERS,
    BrazilStringIndexers.ITEMS,
    BrazilStringIndexers.BUSINESS_PLACES,
    BrazilStringIndexers.WITHHOLDING_TAX_CODES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BrazilStringIndexers> = new AllFields('*', BrazilStringIndexers);
  /**
   * All key fields of the BrazilStringIndexers entity.
   */
  export const _keyFields: Array<Field<BrazilStringIndexers>> = [BrazilStringIndexers.ID];
  /**
   * Mapping of all key field names to the respective static field property BrazilStringIndexers.
   */
  export const _keys: { [keys: string]: Field<BrazilStringIndexers> } = BrazilStringIndexers._keyFields.reduce((acc: { [keys: string]: Field<BrazilStringIndexers> }, field: Field<BrazilStringIndexers>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
