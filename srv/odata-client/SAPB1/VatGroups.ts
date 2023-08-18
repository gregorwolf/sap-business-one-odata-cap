/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { VatGroupsLine } from './VatGroupsLine';
import type { VatGroupsApi } from './VatGroupsApi';
import { BoVatCategoryEnum } from './BoVatCategoryEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { TaxTypeBlackListEnum } from './TaxTypeBlackListEnum';
import { Report349CodeListEnum } from './Report349CodeListEnum';
import { VatGroupsTaxRegionEnum } from './VatGroupsTaxRegionEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { TaxExemptReasons, TaxExemptReasonsType } from './TaxExemptReasons';
import { Items, ItemsType } from './Items';
import {
  GlAccountAdvancedRules,
  GlAccountAdvancedRulesType
} from './GlAccountAdvancedRules';
import {
  AdditionalExpenses,
  AdditionalExpensesType
} from './AdditionalExpenses';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { Deposits, DepositsType } from './Deposits';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "VatGroups" of service "SAPB1".
 */
export class VatGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VatGroupsType<T>
{
  /**
   * Technical entity name for VatGroups.
   */
  static _entityName = 'VatGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the VatGroups entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  category?: BoVatCategoryEnum | null;
  /**
   * Tax Account.
   * @nullable
   */
  taxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu.
   * @nullable
   */
  eu?: BoYesNoEnum | null;
  /**
   * Triangular Deal.
   * @nullable
   */
  triangularDeal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acquisition Reverse.
   * @nullable
   */
  acquisitionReverse?: BoYesNoEnum | null;
  /**
   * Non Deduct.
   * @nullable
   */
  nonDeduct?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Acquisition Tax.
   * @nullable
   */
  acquisitionTax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods Shipment.
   * @nullable
   */
  goodsShipment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Non Deduct Acc.
   * @nullable
   */
  nonDeductAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred Tax Acc.
   * @nullable
   */
  deferredTaxAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction.
   * @nullable
   */
  correction?: BoYesNoEnum | null;
  /**
   * Vat Correction.
   * @nullable
   */
  vatCorrection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Equalization Tax Account.
   * @nullable
   */
  equalizationTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Supply.
   * @nullable
   */
  serviceSupply?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Tax Type Black List.
   * @nullable
   */
  taxTypeBlackList?: TaxTypeBlackListEnum | null;
  /**
   * Report 349 Code.
   * @nullable
   */
  report349Code?: Report349CodeListEnum | null;
  /**
   * Vat In Revenue Account.
   * @nullable
   */
  vatInRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Down Payment Tax Offset Account.
   * @nullable
   */
  downPaymentTaxOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Account.
   * @nullable
   */
  cashDiscountAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Deductible Account.
   * @nullable
   */
  vatDeductibleAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Region.
   * @nullable
   */
  taxRegion?: VatGroupsTaxRegionEnum | null;
  /**
   * Acquisition Reverse Corresponding Tax Code.
   * @nullable
   */
  acquisitionReverseCorrespondingTaxCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * E Books Vat Category.
   * @nullable
   */
  eBooksVatCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tax Exemption Reason.
   * @nullable
   */
  taxExemptionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Groups Lines.
   * @nullable
   */
  vatGroupsLines?: VatGroupsLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxExemptReasons} entity.
   */
  taxExemptReason?: TaxExemptReasons<T> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link GlAccountAdvancedRules} entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link AdditionalExpenses} entity.
   */
  additionalExpenses!: AdditionalExpenses<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentDrafts} entity.
   */
  paymentDrafts!: PaymentDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-many navigation property to the {@link IncomingPayments} entity.
   */
  incomingPayments!: IncomingPayments<T>[];
  /**
   * One-to-many navigation property to the {@link Deposits} entity.
   */
  deposits!: Deposits<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: VatGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface VatGroupsType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  category?: BoVatCategoryEnum | null;
  taxAccount?: DeserializedType<T, 'Edm.String'> | null;
  eu?: BoYesNoEnum | null;
  triangularDeal?: DeserializedType<T, 'Edm.String'> | null;
  acquisitionReverse?: BoYesNoEnum | null;
  nonDeduct?: DeserializedType<T, 'Edm.Double'> | null;
  acquisitionTax?: DeserializedType<T, 'Edm.String'> | null;
  goodsShipment?: DeserializedType<T, 'Edm.String'> | null;
  nonDeductAcc?: DeserializedType<T, 'Edm.String'> | null;
  deferredTaxAcc?: DeserializedType<T, 'Edm.String'> | null;
  correction?: BoYesNoEnum | null;
  vatCorrection?: DeserializedType<T, 'Edm.String'> | null;
  equalizationTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  serviceSupply?: DeserializedType<T, 'Edm.String'> | null;
  inactive?: BoYesNoEnum | null;
  taxTypeBlackList?: TaxTypeBlackListEnum | null;
  report349Code?: Report349CodeListEnum | null;
  vatInRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  downPaymentTaxOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountAccount?: DeserializedType<T, 'Edm.String'> | null;
  vatDeductibleAccount?: DeserializedType<T, 'Edm.String'> | null;
  taxRegion?: VatGroupsTaxRegionEnum | null;
  acquisitionReverseCorrespondingTaxCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  eBooksVatCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  taxExemptionReason?: DeserializedType<T, 'Edm.String'> | null;
  vatGroupsLines?: VatGroupsLine<T>[] | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  taxExemptReason?: TaxExemptReasonsType<T> | null;
  items: ItemsType<T>[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType<T>[];
  additionalExpenses: AdditionalExpensesType<T>[];
  paymentDrafts: PaymentDraftsType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  incomingPayments: IncomingPaymentsType<T>[];
  deposits: DepositsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
