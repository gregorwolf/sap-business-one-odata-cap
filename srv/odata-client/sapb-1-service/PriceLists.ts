/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceListsRequestBuilder } from './PriceListsRequestBuilder';
import { Moment } from 'moment';
import { BoRoundingMethod } from './BoRoundingMethod';
import { BoPriceListGroupNum } from './BoPriceListGroupNum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRoundingRule } from './BoRoundingRule';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PriceLists" of service "SAPB1".
 */
export class PriceLists extends EntityV4 implements PriceListsType {
  /**
   * Technical entity name for PriceLists.
   */
  static _entityName = 'PriceLists';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Rounding Method.
   * @nullable
   */
  roundingMethod?: BoRoundingMethod;
  /**
   * Group Num.
   * @nullable
   */
  groupNum?: BoPriceListGroupNum;
  /**
   * Base Price List.
   * @nullable
   */
  basePriceList?: number;
  /**
   * Factor.
   * @nullable
   */
  factor?: number;
  /**
   * Price List No.
   * @nullable
   */
  priceListNo?: number;
  /**
   * Price List Name.
   * @nullable
   */
  priceListName?: string;
  /**
   * Is Gross Price.
   * @nullable
   */
  isGrossPrice?: BoYesNoEnum;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum;
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
   * Default Prime Currency.
   * @nullable
   */
  defaultPrimeCurrency?: string;
  /**
   * Default Additional Currency 1.
   * @nullable
   */
  defaultAdditionalCurrency1?: string;
  /**
   * Default Additional Currency 2.
   * @nullable
   */
  defaultAdditionalCurrency2?: string;
  /**
   * Rounding Rule.
   * @nullable
   */
  roundingRule?: BoRoundingRule;
  /**
   * Fixed Amount.
   * @nullable
   */
  fixedAmount?: number;
  /**
   * One-to-many navigation property to the [[SpecialPrices]] entity.
   */
  specialPrices!: SpecialPrices[];
  /**
   * One-to-many navigation property to the [[WorkOrders]] entity.
   */
  workOrders!: WorkOrders[];
  /**
   * One-to-many navigation property to the [[PaymentTermsTypes]] entity.
   */
  paymentTermsTypes!: PaymentTermsTypes[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-many navigation property to the [[ProductTrees]] entity.
   */
  productTrees!: ProductTrees[];
  /**
   * One-to-many navigation property to the [[BlanketAgreements]] entity.
   */
  blanketAgreements!: BlanketAgreements[];
  /**
   * One-to-many navigation property to the [[StockTransfers]] entity.
   */
  stockTransfers!: StockTransfers[];

  /**
   * Returns an entity builder to construct instances of `PriceLists`.
   * @returns A builder that constructs instances of entity type `PriceLists`.
   */
  static builder(): EntityBuilderType<PriceLists, PriceListsType> {
    return EntityV4.entityBuilder(PriceLists);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PriceLists` entity type.
   * @returns A `PriceLists` request builder.
   */
  static requestBuilder(): PriceListsRequestBuilder {
    return new PriceListsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PriceLists`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PriceLists`.
   */
  static customField(fieldName: string): CustomFieldV4<PriceLists> {
    return EntityV4.customFieldSelector(fieldName, PriceLists);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SpecialPrices, SpecialPricesType } from './SpecialPrices';
import { WorkOrders, WorkOrdersType } from './WorkOrders';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { StockTransfers, StockTransfersType } from './StockTransfers';

export interface PriceListsType {
  roundingMethod?: BoRoundingMethod | null;
  groupNum?: BoPriceListGroupNum | null;
  basePriceList?: number | null;
  factor?: number | null;
  priceListNo?: number | null;
  priceListName?: string | null;
  isGrossPrice?: BoYesNoEnum | null;
  active?: BoYesNoEnum | null;
  validFrom?: Moment | null;
  validTo?: Moment | null;
  defaultPrimeCurrency?: string | null;
  defaultAdditionalCurrency1?: string | null;
  defaultAdditionalCurrency2?: string | null;
  roundingRule?: BoRoundingRule | null;
  fixedAmount?: number | null;
  specialPrices: SpecialPricesType[];
  workOrders: WorkOrdersType[];
  paymentTermsTypes: PaymentTermsTypesType[];
  businessPartners: BusinessPartnersType[];
  productTrees: ProductTreesType[];
  blanketAgreements: BlanketAgreementsType[];
  stockTransfers: StockTransfersType[];
}

export namespace PriceLists {
  /**
   * Static representation of the [[roundingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_METHOD: EnumField<PriceLists> = new EnumField('RoundingMethod', PriceLists);
  /**
   * Static representation of the [[groupNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NUM: EnumField<PriceLists> = new EnumField('GroupNum', PriceLists);
  /**
   * Static representation of the [[basePriceList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_PRICE_LIST: NumberField<PriceLists> = new NumberField('BasePriceList', PriceLists, 'Edm.Int32');
  /**
   * Static representation of the [[factor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTOR: NumberField<PriceLists> = new NumberField('Factor', PriceLists, 'Edm.Double');
  /**
   * Static representation of the [[priceListNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_NO: NumberField<PriceLists> = new NumberField('PriceListNo', PriceLists, 'Edm.Int32');
  /**
   * Static representation of the [[priceListName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_NAME: StringField<PriceLists> = new StringField('PriceListName', PriceLists, 'Edm.String');
  /**
   * Static representation of the [[isGrossPrice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_GROSS_PRICE: EnumField<PriceLists> = new EnumField('IsGrossPrice', PriceLists);
  /**
   * Static representation of the [[active]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE: EnumField<PriceLists> = new EnumField('Active', PriceLists);
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<PriceLists> = new DateField('ValidFrom', PriceLists, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<PriceLists> = new DateField('ValidTo', PriceLists, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[defaultPrimeCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_PRIME_CURRENCY: StringField<PriceLists> = new StringField('DefaultPrimeCurrency', PriceLists, 'Edm.String');
  /**
   * Static representation of the [[defaultAdditionalCurrency1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_ADDITIONAL_CURRENCY_1: StringField<PriceLists> = new StringField('DefaultAdditionalCurrency1', PriceLists, 'Edm.String');
  /**
   * Static representation of the [[defaultAdditionalCurrency2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_ADDITIONAL_CURRENCY_2: StringField<PriceLists> = new StringField('DefaultAdditionalCurrency2', PriceLists, 'Edm.String');
  /**
   * Static representation of the [[roundingRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_RULE: EnumField<PriceLists> = new EnumField('RoundingRule', PriceLists);
  /**
   * Static representation of the [[fixedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIXED_AMOUNT: NumberField<PriceLists> = new NumberField('FixedAmount', PriceLists, 'Edm.Double');
  /**
   * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_PRICES: OneToManyLink<PriceLists, SpecialPrices> = new OneToManyLink('SpecialPrices', PriceLists, SpecialPrices);
  /**
   * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_ORDERS: OneToManyLink<PriceLists, WorkOrders> = new OneToManyLink('WorkOrders', PriceLists, WorkOrders);
  /**
   * Static representation of the one-to-many navigation property [[paymentTermsTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS_TYPES: OneToManyLink<PriceLists, PaymentTermsTypes> = new OneToManyLink('PaymentTermsTypes', PriceLists, PaymentTermsTypes);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<PriceLists, BusinessPartners> = new OneToManyLink('BusinessPartners', PriceLists, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TREES: OneToManyLink<PriceLists, ProductTrees> = new OneToManyLink('ProductTrees', PriceLists, ProductTrees);
  /**
   * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLANKET_AGREEMENTS: OneToManyLink<PriceLists, BlanketAgreements> = new OneToManyLink('BlanketAgreements', PriceLists, BlanketAgreements);
  /**
   * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TRANSFERS: OneToManyLink<PriceLists, StockTransfers> = new OneToManyLink('StockTransfers', PriceLists, StockTransfers);
  /**
   * All fields of the PriceLists entity.
   */
  export const _allFields: Array<EnumField<PriceLists> | NumberField<PriceLists> | StringField<PriceLists> | DateField<PriceLists> | OneToManyLink<PriceLists, SpecialPrices> | OneToManyLink<PriceLists, WorkOrders> | OneToManyLink<PriceLists, PaymentTermsTypes> | OneToManyLink<PriceLists, BusinessPartners> | OneToManyLink<PriceLists, ProductTrees> | OneToManyLink<PriceLists, BlanketAgreements> | OneToManyLink<PriceLists, StockTransfers>> = [
    PriceLists.ROUNDING_METHOD,
    PriceLists.GROUP_NUM,
    PriceLists.BASE_PRICE_LIST,
    PriceLists.FACTOR,
    PriceLists.PRICE_LIST_NO,
    PriceLists.PRICE_LIST_NAME,
    PriceLists.IS_GROSS_PRICE,
    PriceLists.ACTIVE,
    PriceLists.VALID_FROM,
    PriceLists.VALID_TO,
    PriceLists.DEFAULT_PRIME_CURRENCY,
    PriceLists.DEFAULT_ADDITIONAL_CURRENCY_1,
    PriceLists.DEFAULT_ADDITIONAL_CURRENCY_2,
    PriceLists.ROUNDING_RULE,
    PriceLists.FIXED_AMOUNT,
    PriceLists.SPECIAL_PRICES,
    PriceLists.WORK_ORDERS,
    PriceLists.PAYMENT_TERMS_TYPES,
    PriceLists.BUSINESS_PARTNERS,
    PriceLists.PRODUCT_TREES,
    PriceLists.BLANKET_AGREEMENTS,
    PriceLists.STOCK_TRANSFERS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PriceLists> = new AllFields('*', PriceLists);
  /**
   * All key fields of the PriceLists entity.
   */
  export const _keyFields: Array<Field<PriceLists>> = [PriceLists.PRICE_LIST_NO];
  /**
   * Mapping of all key field names to the respective static field property PriceLists.
   */
  export const _keys: { [keys: string]: Field<PriceLists> } = PriceLists._keyFields.reduce((acc: { [keys: string]: Field<PriceLists> }, field: Field<PriceLists>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
