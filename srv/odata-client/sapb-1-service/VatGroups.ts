/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VatGroupsRequestBuilder } from './VatGroupsRequestBuilder';
import { VatGroupsLine, VatGroupsLineField } from './VatGroupsLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "VatGroups" of service "SAPB1".
 */
export class VatGroups extends Entity implements VatGroupsType {
  /**
   * Technical entity name for VatGroups.
   */
  static _entityName = 'VatGroups';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for VatGroups.
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
  code?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Tax Account.
   * @nullable
   */
  taxAccount?: string;
  /**
   * Triangular Deal.
   * @nullable
   */
  triangularDeal?: string;
  /**
   * Non Deduct.
   * @nullable
   */
  nonDeduct?: number;
  /**
   * Acquisition Tax.
   * @nullable
   */
  acquisitionTax?: string;
  /**
   * Goods Shipment.
   * @nullable
   */
  goodsShipment?: string;
  /**
   * Non Deduct Acc.
   * @nullable
   */
  nonDeductAcc?: string;
  /**
   * Deferred Tax Acc.
   * @nullable
   */
  deferredTaxAcc?: string;
  /**
   * Vat Correction.
   * @nullable
   */
  vatCorrection?: string;
  /**
   * Equalization Tax Account.
   * @nullable
   */
  equalizationTaxAccount?: string;
  /**
   * Service Supply.
   * @nullable
   */
  serviceSupply?: string;
  /**
   * Vat In Revenue Account.
   * @nullable
   */
  vatInRevenueAccount?: string;
  /**
   * Down Payment Tax Offset Account.
   * @nullable
   */
  downPaymentTaxOffsetAccount?: string;
  /**
   * Cash Discount Account.
   * @nullable
   */
  cashDiscountAccount?: string;
  /**
   * Vat Deductible Account.
   * @nullable
   */
  vatDeductibleAccount?: string;
  /**
   * Vat Groups Lines.
   * @nullable
   */
  vatGroupsLines?: VatGroupsLine[];
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules[];
  /**
   * One-to-many navigation property to the [[AdditionalExpenses]] entity.
   */
  additionalExpenses!: AdditionalExpenses[];
  /**
   * One-to-many navigation property to the [[PaymentDrafts]] entity.
   */
  paymentDrafts!: PaymentDrafts[];
  /**
   * One-to-many navigation property to the [[Deposits]] entity.
   */
  deposits!: Deposits[];
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];

  /**
   * Returns an entity builder to construct instances `VatGroups`.
   * @returns A builder that constructs instances of entity type `VatGroups`.
   */
  static builder(): EntityBuilderType<VatGroups, VatGroupsTypeForceMandatory> {
    return Entity.entityBuilder(VatGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `VatGroups` entity type.
   * @returns A `VatGroups` request builder.
   */
  static requestBuilder(): VatGroupsRequestBuilder {
    return new VatGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `VatGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `VatGroups`.
   */
  static customField(fieldName: string): CustomField<VatGroups> {
    return Entity.customFieldSelector(fieldName, VatGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { AdditionalExpenses, AdditionalExpensesType } from './AdditionalExpenses';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { Deposits, DepositsType } from './Deposits';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';

export interface VatGroupsType {
  code?: string;
  name?: string;
  taxAccount?: string;
  triangularDeal?: string;
  nonDeduct?: number;
  acquisitionTax?: string;
  goodsShipment?: string;
  nonDeductAcc?: string;
  deferredTaxAcc?: string;
  vatCorrection?: string;
  equalizationTaxAccount?: string;
  serviceSupply?: string;
  vatInRevenueAccount?: string;
  downPaymentTaxOffsetAccount?: string;
  cashDiscountAccount?: string;
  vatDeductibleAccount?: string;
  vatGroupsLines?: VatGroupsLine[];
  chartOfAccount: ChartOfAccountsType;
  vendorPayments: VendorPaymentsType[];
  items: ItemsType[];
  businessPartners: BusinessPartnersType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
  additionalExpenses: AdditionalExpensesType[];
  paymentDrafts: PaymentDraftsType[];
  deposits: DepositsType[];
  incomingPayments: IncomingPaymentsType[];
}

export interface VatGroupsTypeForceMandatory {
  code: string;
  name: string;
  taxAccount: string;
  triangularDeal: string;
  nonDeduct: number;
  acquisitionTax: string;
  goodsShipment: string;
  nonDeductAcc: string;
  deferredTaxAcc: string;
  vatCorrection: string;
  equalizationTaxAccount: string;
  serviceSupply: string;
  vatInRevenueAccount: string;
  downPaymentTaxOffsetAccount: string;
  cashDiscountAccount: string;
  vatDeductibleAccount: string;
  vatGroupsLines: VatGroupsLine[];
  chartOfAccount: ChartOfAccountsType;
  vendorPayments: VendorPaymentsType[];
  items: ItemsType[];
  businessPartners: BusinessPartnersType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
  additionalExpenses: AdditionalExpensesType[];
  paymentDrafts: PaymentDraftsType[];
  deposits: DepositsType[];
  incomingPayments: IncomingPaymentsType[];
}

export namespace VatGroups {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<VatGroups> = new StringField('Code', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<VatGroups> = new StringField('Name', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[taxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_ACCOUNT: StringField<VatGroups> = new StringField('TaxAccount', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[triangularDeal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRIANGULAR_DEAL: StringField<VatGroups> = new StringField('TriangularDeal', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[nonDeduct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_DEDUCT: NumberField<VatGroups> = new NumberField('NonDeduct', VatGroups, 'Edm.Double');
  /**
   * Static representation of the [[acquisitionTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACQUISITION_TAX: StringField<VatGroups> = new StringField('AcquisitionTax', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[goodsShipment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_SHIPMENT: StringField<VatGroups> = new StringField('GoodsShipment', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[nonDeductAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_DEDUCT_ACC: StringField<VatGroups> = new StringField('NonDeductAcc', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[deferredTaxAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFERRED_TAX_ACC: StringField<VatGroups> = new StringField('DeferredTaxAcc', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[vatCorrection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_CORRECTION: StringField<VatGroups> = new StringField('VatCorrection', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[equalizationTaxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUALIZATION_TAX_ACCOUNT: StringField<VatGroups> = new StringField('EqualizationTaxAccount', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[serviceSupply]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_SUPPLY: StringField<VatGroups> = new StringField('ServiceSupply', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[vatInRevenueAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_IN_REVENUE_ACCOUNT: StringField<VatGroups> = new StringField('VATInRevenueAccount', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[downPaymentTaxOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOWN_PAYMENT_TAX_OFFSET_ACCOUNT: StringField<VatGroups> = new StringField('DownPaymentTaxOffsetAccount', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[cashDiscountAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_ACCOUNT: StringField<VatGroups> = new StringField('CashDiscountAccount', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[vatDeductibleAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_DEDUCTIBLE_ACCOUNT: StringField<VatGroups> = new StringField('VATDeductibleAccount', VatGroups, 'Edm.String');
  /**
   * Static representation of the [[vatGroupsLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUPS_LINES: CollectionField<VatGroups> = new CollectionField('VatGroups_Lines', VatGroups, new VatGroupsLineField('', VatGroups));
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<VatGroups, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', VatGroups, ChartOfAccounts);
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<VatGroups, VendorPayments> = new OneToManyLink('VendorPayments', VatGroups, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<VatGroups, Items> = new OneToManyLink('Items', VatGroups, Items);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<VatGroups, BusinessPartners> = new OneToManyLink('BusinessPartners', VatGroups, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<VatGroups, GlAccountAdvancedRules> = new OneToManyLink('GLAccountAdvancedRules', VatGroups, GlAccountAdvancedRules);
  /**
   * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_EXPENSES: OneToManyLink<VatGroups, AdditionalExpenses> = new OneToManyLink('AdditionalExpenses', VatGroups, AdditionalExpenses);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<VatGroups, PaymentDrafts> = new OneToManyLink('PaymentDrafts', VatGroups, PaymentDrafts);
  /**
   * Static representation of the one-to-many navigation property [[deposits]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPOSITS: OneToManyLink<VatGroups, Deposits> = new OneToManyLink('Deposits', VatGroups, Deposits);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<VatGroups, IncomingPayments> = new OneToManyLink('IncomingPayments', VatGroups, IncomingPayments);
  /**
   * All fields of the VatGroups entity.
   */
  export const _allFields: Array<StringField<VatGroups> | NumberField<VatGroups> | CollectionField<VatGroups> | OneToOneLink<VatGroups, ChartOfAccounts> | OneToManyLink<VatGroups, VendorPayments> | OneToManyLink<VatGroups, Items> | OneToManyLink<VatGroups, BusinessPartners> | OneToManyLink<VatGroups, GlAccountAdvancedRules> | OneToManyLink<VatGroups, AdditionalExpenses> | OneToManyLink<VatGroups, PaymentDrafts> | OneToManyLink<VatGroups, Deposits> | OneToManyLink<VatGroups, IncomingPayments>> = [
    VatGroups.CODE,
    VatGroups.NAME,
    VatGroups.TAX_ACCOUNT,
    VatGroups.TRIANGULAR_DEAL,
    VatGroups.NON_DEDUCT,
    VatGroups.ACQUISITION_TAX,
    VatGroups.GOODS_SHIPMENT,
    VatGroups.NON_DEDUCT_ACC,
    VatGroups.DEFERRED_TAX_ACC,
    VatGroups.VAT_CORRECTION,
    VatGroups.EQUALIZATION_TAX_ACCOUNT,
    VatGroups.SERVICE_SUPPLY,
    VatGroups.VAT_IN_REVENUE_ACCOUNT,
    VatGroups.DOWN_PAYMENT_TAX_OFFSET_ACCOUNT,
    VatGroups.CASH_DISCOUNT_ACCOUNT,
    VatGroups.VAT_DEDUCTIBLE_ACCOUNT,
    VatGroups.VAT_GROUPS_LINES,
    VatGroups.CHART_OF_ACCOUNT,
    VatGroups.VENDOR_PAYMENTS,
    VatGroups.ITEMS,
    VatGroups.BUSINESS_PARTNERS,
    VatGroups.GL_ACCOUNT_ADVANCED_RULES,
    VatGroups.ADDITIONAL_EXPENSES,
    VatGroups.PAYMENT_DRAFTS,
    VatGroups.DEPOSITS,
    VatGroups.INCOMING_PAYMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<VatGroups> = new AllFields('*', VatGroups);
  /**
   * All key fields of the VatGroups entity.
   */
  export const _keyFields: Array<Field<VatGroups>> = [VatGroups.CODE];
  /**
   * Mapping of all key field names to the respective static field property VatGroups.
   */
  export const _keys: { [keys: string]: Field<VatGroups> } = VatGroups._keyFields.reduce((acc: { [keys: string]: Field<VatGroups> }, field: Field<VatGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
