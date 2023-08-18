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
import { TaxDefinition } from './TaxDefinition';
import type { SalesTaxAuthoritiesApi } from './SalesTaxAuthoritiesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Users, UsersType } from './Users';
import {
  SalesTaxAuthoritiesTypes,
  SalesTaxAuthoritiesTypesType
} from './SalesTaxAuthoritiesTypes';

/**
 * This class represents the entity "SalesTaxAuthorities" of service "SAPB1".
 */
export class SalesTaxAuthorities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesTaxAuthoritiesType<T>
{
  /**
   * Technical entity name for SalesTaxAuthorities.
   */
  static _entityName = 'SalesTaxAuthorities';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SalesTaxAuthorities entity
   */
  static _keys = ['Type', 'Code'];
  /**
   * Use Tax Account.
   * @nullable
   */
  useTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Type.
   */
  type!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * A Or R Tax Account.
   * @nullable
   */
  aOrRTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * A Or P Tax Account.
   * @nullable
   */
  aOrPTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Non Deductible Precent.
   * @nullable
   */
  nonDeductiblePrecent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Non Deductible Account.
   * @nullable
   */
  nonDeductibleAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred Tax Account.
   * @nullable
   */
  deferredTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Min Taxable Amount.
   * @nullable
   */
  minTaxableAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Max Taxable Amount.
   * @nullable
   */
  maxTaxableAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Flat Tax Amount.
   * @nullable
   */
  flatTaxAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Incl In Price.
   * @nullable
   */
  inclInPrice?: BoYesNoEnum | null;
  /**
   * Exempt.
   * @nullable
   */
  exempt?: BoYesNoEnum | null;
  /**
   * Ap Exp Account.
   * @nullable
   */
  apExpAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ar Exp Account.
   * @nullable
   */
  arExpAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incl In Gross Revenue.
   * @nullable
   */
  inclInGrossRevenue?: BoYesNoEnum | null;
  /**
   * Text Code.
   * @nullable
   */
  textCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Incl In First Installment.
   * @nullable
   */
  inclInFirstInstallment?: BoYesNoEnum | null;
  /**
   * Reverse Charge Percent.
   * @nullable
   */
  reverseChargePercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Tax Rcm Account.
   * @nullable
   */
  salesTaxRcmAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Rcm Clr Account.
   * @nullable
   */
  salesTaxRcmClrAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Exemption.
   * @nullable
   */
  vatExemption?: BoYesNoEnum | null;
  /**
   * Vat Exemption Base Percent.
   * @nullable
   */
  vatExemptionBasePercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Vat Exemption Percent.
   * @nullable
   */
  vatExemptionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax Definitions.
   * @nullable
   */
  taxDefinitions?: TaxDefinition<T>[] | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesTaxAuthoritiesTypes} entity.
   */
  salesTaxAuthoritiesType?: SalesTaxAuthoritiesTypes<T> | null;

  constructor(readonly _entityApi: SalesTaxAuthoritiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTaxAuthoritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  useTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  type: DeserializedType<T, 'Edm.Int32'>;
  aOrRTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  rate?: DeserializedType<T, 'Edm.Double'> | null;
  aOrPTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  nonDeductiblePrecent?: DeserializedType<T, 'Edm.Double'> | null;
  nonDeductibleAccount?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  deferredTaxAccount?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.String'>;
  minTaxableAmount?: DeserializedType<T, 'Edm.Double'> | null;
  maxTaxableAmount?: DeserializedType<T, 'Edm.Double'> | null;
  flatTaxAmount?: DeserializedType<T, 'Edm.Double'> | null;
  inclInPrice?: BoYesNoEnum | null;
  exempt?: BoYesNoEnum | null;
  apExpAccount?: DeserializedType<T, 'Edm.String'> | null;
  arExpAccount?: DeserializedType<T, 'Edm.String'> | null;
  inclInGrossRevenue?: BoYesNoEnum | null;
  textCode?: DeserializedType<T, 'Edm.Int32'> | null;
  inclInFirstInstallment?: BoYesNoEnum | null;
  reverseChargePercent?: DeserializedType<T, 'Edm.Double'> | null;
  salesTaxRcmAccount?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxRcmClrAccount?: DeserializedType<T, 'Edm.String'> | null;
  vatExemption?: BoYesNoEnum | null;
  vatExemptionBasePercent?: DeserializedType<T, 'Edm.Double'> | null;
  vatExemptionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  taxDefinitions?: TaxDefinition<T>[] | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  user?: UsersType<T> | null;
  salesTaxAuthoritiesType?: SalesTaxAuthoritiesTypesType<T> | null;
}
