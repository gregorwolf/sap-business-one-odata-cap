/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpecialPricesRequestBuilder } from './SpecialPricesRequestBuilder';
import { Moment } from 'moment';
import { SpecialPriceDataArea, SpecialPriceDataAreaField } from './SpecialPriceDataArea';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SpecialPrices" of service "SAPB1".
 */
export class SpecialPrices extends Entity implements SpecialPricesType {
  /**
   * Technical entity name for SpecialPrices.
   */
  static _entityName = 'SpecialPrices';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpecialPrices.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Price.
   * @nullable
   */
  price?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: number;
  /**
   * Price List Num.
   * @nullable
   */
  priceListNum?: number;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: Moment;
  /**
   * Special Price Data Areas.
   * @nullable
   */
  specialPriceDataAreas?: SpecialPriceDataArea[];
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[PriceLists]] entity.
   */
  priceList!: PriceLists;

  /**
   * Returns an entity builder to construct instances `SpecialPrices`.
   * @returns A builder that constructs instances of entity type `SpecialPrices`.
   */
  static builder(): EntityBuilderType<SpecialPrices, SpecialPricesTypeForceMandatory> {
    return Entity.entityBuilder(SpecialPrices);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpecialPrices` entity type.
   * @returns A `SpecialPrices` request builder.
   */
  static requestBuilder(): SpecialPricesRequestBuilder {
    return new SpecialPricesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpecialPrices`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpecialPrices`.
   */
  static customField(fieldName: string): CustomField<SpecialPrices> {
    return Entity.customFieldSelector(fieldName, SpecialPrices);
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
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { PriceLists, PriceListsType } from './PriceLists';

export interface SpecialPricesType {
  itemCode?: string;
  cardCode?: string;
  price?: number;
  currency?: string;
  discountPercent?: number;
  priceListNum?: number;
  validFrom?: Moment;
  validTo?: Moment;
  specialPriceDataAreas?: SpecialPriceDataArea[];
  item: ItemsType;
  businessPartner: BusinessPartnersType;
  priceList: PriceListsType;
}

export interface SpecialPricesTypeForceMandatory {
  itemCode: string;
  cardCode: string;
  price: number;
  currency: string;
  discountPercent: number;
  priceListNum: number;
  validFrom: Moment;
  validTo: Moment;
  specialPriceDataAreas: SpecialPriceDataArea[];
  item: ItemsType;
  businessPartner: BusinessPartnersType;
  priceList: PriceListsType;
}

export namespace SpecialPrices {
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<SpecialPrices> = new StringField('ItemCode', SpecialPrices, 'Edm.String');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<SpecialPrices> = new StringField('CardCode', SpecialPrices, 'Edm.String');
  /**
   * Static representation of the [[price]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE: NumberField<SpecialPrices> = new NumberField('Price', SpecialPrices, 'Edm.Double');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<SpecialPrices> = new StringField('Currency', SpecialPrices, 'Edm.String');
  /**
   * Static representation of the [[discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_PERCENT: NumberField<SpecialPrices> = new NumberField('DiscountPercent', SpecialPrices, 'Edm.Double');
  /**
   * Static representation of the [[priceListNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_NUM: NumberField<SpecialPrices> = new NumberField('PriceListNum', SpecialPrices, 'Edm.Int32');
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<SpecialPrices> = new DateField('ValidFrom', SpecialPrices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<SpecialPrices> = new DateField('ValidTo', SpecialPrices, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[specialPriceDataAreas]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_PRICE_DATA_AREAS: CollectionField<SpecialPrices> = new CollectionField('SpecialPriceDataAreas', SpecialPrices, new SpecialPriceDataAreaField('', SpecialPrices));
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<SpecialPrices, Items> = new OneToOneLink('Item', SpecialPrices, Items);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<SpecialPrices, BusinessPartners> = new OneToOneLink('BusinessPartner', SpecialPrices, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[priceList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: OneToOneLink<SpecialPrices, PriceLists> = new OneToOneLink('PriceList', SpecialPrices, PriceLists);
  /**
   * All fields of the SpecialPrices entity.
   */
  export const _allFields: Array<StringField<SpecialPrices> | NumberField<SpecialPrices> | DateField<SpecialPrices> | CollectionField<SpecialPrices> | OneToOneLink<SpecialPrices, Items> | OneToOneLink<SpecialPrices, BusinessPartners> | OneToOneLink<SpecialPrices, PriceLists>> = [
    SpecialPrices.ITEM_CODE,
    SpecialPrices.CARD_CODE,
    SpecialPrices.PRICE,
    SpecialPrices.CURRENCY,
    SpecialPrices.DISCOUNT_PERCENT,
    SpecialPrices.PRICE_LIST_NUM,
    SpecialPrices.VALID_FROM,
    SpecialPrices.VALID_TO,
    SpecialPrices.SPECIAL_PRICE_DATA_AREAS,
    SpecialPrices.ITEM,
    SpecialPrices.BUSINESS_PARTNER,
    SpecialPrices.PRICE_LIST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpecialPrices> = new AllFields('*', SpecialPrices);
  /**
   * All key fields of the SpecialPrices entity.
   */
  export const _keyFields: Array<Field<SpecialPrices>> = [SpecialPrices.ITEM_CODE, SpecialPrices.CARD_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpecialPrices.
   */
  export const _keys: { [keys: string]: Field<SpecialPrices> } = SpecialPrices._keyFields.reduce((acc: { [keys: string]: Field<SpecialPrices> }, field: Field<SpecialPrices>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
