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
import { WithholdingTaxCodesLine } from './WithholdingTaxCodesLine';
import type { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { WithholdingTaxCodeCategoryEnum } from './WithholdingTaxCodeCategoryEnum';
import { WithholdingTaxCodeBaseTypeEnum } from './WithholdingTaxCodeBaseTypeEnum';
import { WithholdingTypeEnum } from './WithholdingTypeEnum';
import { RoundingTypeEnum } from './RoundingTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ReturnTypeEnum } from './ReturnTypeEnum';
import { TdsTypeEnum } from './TdsTypeEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Sections, SectionsType } from './Sections';
import { NatureOfAssessees, NatureOfAssesseesType } from './NatureOfAssessees';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { NotaFiscalCst, NotaFiscalCstType } from './NotaFiscalCst';
import {
  BrazilStringIndexers,
  BrazilStringIndexersType
} from './BrazilStringIndexers';
import { Currencies, CurrenciesType } from './Currencies';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "WithholdingTaxCodes" of service "SAPB1".
 */
export class WithholdingTaxCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdingTaxCodesType<T>
{
  /**
   * Technical entity name for WithholdingTaxCodes.
   */
  static _entityName = 'WithholdingTaxCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingTaxCodes entity
   */
  static _keys = ['WTCode'];
  /**
   * Wt Code.
   */
  wtCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Wt Name.
   * @nullable
   */
  wtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  category?: WithholdingTaxCodeCategoryEnum | null;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: WithholdingTaxCodeBaseTypeEnum | null;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Official Code.
   * @nullable
   */
  officialCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account.
   * @nullable
   */
  account?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Type.
   * @nullable
   */
  withholdingType?: WithholdingTypeEnum | null;
  /**
   * Rounding Type.
   * @nullable
   */
  roundingType?: RoundingTypeEnum | null;
  /**
   * Section.
   * @nullable
   */
  section?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Threshold.
   * @nullable
   */
  threshold?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Surcharge.
   * @nullable
   */
  surcharge?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Concessional.
   * @nullable
   */
  concessional?: BoYesNoEnum | null;
  /**
   * Assessee.
   * @nullable
   */
  assessee?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Aptds Account.
   * @nullable
   */
  aptdsAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ap Surcharge Account.
   * @nullable
   */
  apSurchargeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ap Cess Account.
   * @nullable
   */
  apCessAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aphsc Account.
   * @nullable
   */
  aphscAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apigst Account.
   * @nullable
   */
  apigstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apcgst Account.
   * @nullable
   */
  apcgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apsgst Account.
   * @nullable
   */
  apsgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aputgst Account.
   * @nullable
   */
  aputgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ap Cess Gst Account.
   * @nullable
   */
  apCessGstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Artds Account.
   * @nullable
   */
  artdsAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Surcharge Account.
   * @nullable
   */
  arSurchargeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Cess Account.
   * @nullable
   */
  arCessAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Arhsc Account.
   * @nullable
   */
  arhscAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Arigst Account.
   * @nullable
   */
  arigstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Arcgst Account.
   * @nullable
   */
  arcgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Arsgst Account.
   * @nullable
   */
  arsgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Arutgst Account.
   * @nullable
   */
  arutgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Cess Gst Account.
   * @nullable
   */
  arCessGstAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Artcs Interim Account.
   * @nullable
   */
  artcsInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Surcharge Interim Account.
   * @nullable
   */
  arSurchargeInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Cess Interim Account.
   * @nullable
   */
  arCessInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Arhsc Interim Account.
   * @nullable
   */
  arhscInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aptcs Interim Account.
   * @nullable
   */
  aptcsInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ap Surcharge Interim Account.
   * @nullable
   */
  apSurchargeInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ap Cess Interim Account.
   * @nullable
   */
  apCessInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aphsc Interim Account.
   * @nullable
   */
  aphscInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Return Type.
   * @nullable
   */
  returnType?: ReturnTypeEnum | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Cst Code Incoming Id.
   * @nullable
   */
  cstCodeIncomingId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cst Code Outgoing Id.
   * @nullable
   */
  cstCodeOutgoingId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Nature Of Calculation Base Code.
   * @nullable
   */
  natureOfCalculationBaseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Id.
   * @nullable
   */
  typeId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Minimum Taxable Amount.
   * @nullable
   */
  minimumTaxableAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Is Progressive Tax.
   * @nullable
   */
  isProgressiveTax?: BoYesNoEnum | null;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tds Type.
   * @nullable
   */
  tdsType?: TdsTypeEnum | null;
  /**
   * Transacton Threshold.
   * @nullable
   */
  transactonThreshold?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * E Books W Tax Category.
   * @nullable
   */
  eBooksWTaxCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Non Deduct Threshold.
   * @nullable
   */
  nonDeductThreshold?: BoYesNoEnum | null;
  /**
   * Use In Apdpr.
   * @nullable
   */
  useInApdpr?: BoYesNoEnum | null;
  /**
   * Withholding Tax Codes Lines.
   * @nullable
   */
  withholdingTaxCodesLines?: WithholdingTaxCodesLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Sections} entity.
   */
  section2?: Sections<T> | null;
  /**
   * One-to-one navigation property to the {@link NatureOfAssessees} entity.
   */
  natureOfAssessee?: NatureOfAssessees<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link NotaFiscalCst} entity.
   */
  notaFiscalCst?: NotaFiscalCst<T> | null;
  /**
   * One-to-one navigation property to the {@link BrazilStringIndexers} entity.
   */
  brazilStringIndexer?: BrazilStringIndexers<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  currency2?: Currencies<T> | null;
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
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: WithholdingTaxCodesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdingTaxCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  wtCode: DeserializedType<T, 'Edm.String'>;
  wtName?: DeserializedType<T, 'Edm.String'> | null;
  category?: WithholdingTaxCodeCategoryEnum | null;
  baseType?: WithholdingTaxCodeBaseTypeEnum | null;
  baseAmount?: DeserializedType<T, 'Edm.Double'> | null;
  officialCode?: DeserializedType<T, 'Edm.String'> | null;
  account?: DeserializedType<T, 'Edm.String'> | null;
  withholdingType?: WithholdingTypeEnum | null;
  roundingType?: RoundingTypeEnum | null;
  section?: DeserializedType<T, 'Edm.Int32'> | null;
  threshold?: DeserializedType<T, 'Edm.Double'> | null;
  surcharge?: DeserializedType<T, 'Edm.Double'> | null;
  concessional?: BoYesNoEnum | null;
  assessee?: DeserializedType<T, 'Edm.Int32'> | null;
  aptdsAccount?: DeserializedType<T, 'Edm.String'> | null;
  apSurchargeAccount?: DeserializedType<T, 'Edm.String'> | null;
  apCessAccount?: DeserializedType<T, 'Edm.String'> | null;
  aphscAccount?: DeserializedType<T, 'Edm.String'> | null;
  apigstAccount?: DeserializedType<T, 'Edm.String'> | null;
  apcgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  apsgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  aputgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  apCessGstAccount?: DeserializedType<T, 'Edm.String'> | null;
  artdsAccount?: DeserializedType<T, 'Edm.String'> | null;
  arSurchargeAccount?: DeserializedType<T, 'Edm.String'> | null;
  arCessAccount?: DeserializedType<T, 'Edm.String'> | null;
  arhscAccount?: DeserializedType<T, 'Edm.String'> | null;
  arigstAccount?: DeserializedType<T, 'Edm.String'> | null;
  arcgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  arsgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  arutgstAccount?: DeserializedType<T, 'Edm.String'> | null;
  arCessGstAccount?: DeserializedType<T, 'Edm.String'> | null;
  artcsInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  arSurchargeInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  arCessInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  arhscInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  aptcsInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  apSurchargeInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  apCessInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  aphscInterimAccount?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  returnType?: ReturnTypeEnum | null;
  inactive?: BoYesNoEnum | null;
  cstCodeIncomingId?: DeserializedType<T, 'Edm.Int32'> | null;
  cstCodeOutgoingId?: DeserializedType<T, 'Edm.Int32'> | null;
  natureOfCalculationBaseCode?: DeserializedType<T, 'Edm.String'> | null;
  typeId?: DeserializedType<T, 'Edm.Int32'> | null;
  rate?: DeserializedType<T, 'Edm.Double'> | null;
  effectiveFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  minimumTaxableAmount?: DeserializedType<T, 'Edm.Double'> | null;
  isProgressiveTax?: BoYesNoEnum | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  tdsType?: TdsTypeEnum | null;
  transactonThreshold?: DeserializedType<T, 'Edm.Double'> | null;
  eBooksWTaxCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  nonDeductThreshold?: BoYesNoEnum | null;
  useInApdpr?: BoYesNoEnum | null;
  withholdingTaxCodesLines?: WithholdingTaxCodesLine<T>[] | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  section2?: SectionsType<T> | null;
  natureOfAssessee?: NatureOfAssesseesType<T> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  notaFiscalCst?: NotaFiscalCstType<T> | null;
  brazilStringIndexer?: BrazilStringIndexersType<T> | null;
  currency2?: CurrenciesType<T> | null;
  paymentDrafts: PaymentDraftsType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  incomingPayments: IncomingPaymentsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
