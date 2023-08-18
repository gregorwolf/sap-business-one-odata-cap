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
import type { BankPagesApi } from './BankPagesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBpsDocTypes } from './BoBpsDocTypes';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Users, UsersType } from './Users';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "BankPages" of service "SAPB1".
 */
export class BankPages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankPagesType<T>
{
  /**
   * Technical entity name for BankPages.
   */
  static _entityName = 'BankPages';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BankPages entity
   */
  static _keys = ['AccountCode', 'Sequence'];
  /**
   * Account Code.
   */
  accountCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence.
   */
  sequence!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference.
   * @nullable
   */
  reference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Memo.
   * @nullable
   */
  memo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit Amount.
   * @nullable
   */
  debitAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Credit Amount.
   * @nullable
   */
  creditAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Bank Match.
   * @nullable
   */
  bankMatch?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Data Source.
   * @nullable
   */
  dataSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * External Code.
   * @nullable
   */
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Name.
   * @nullable
   */
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Number.
   * @nullable
   */
  statementNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Invoice Number.
   * @nullable
   */
  invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Created.
   * @nullable
   */
  paymentCreated?: BoYesNoEnum | null;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Number Type.
   * @nullable
   */
  docNumberType?: BoBpsDocTypes | null;
  /**
   * Payment Reference.
   * @nullable
   */
  paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Number Ex.
   * @nullable
   */
  invoiceNumberEx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bic Swift Code.
   * @nullable
   */
  bicSwiftCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Doc Nr.
   * @nullable
   */
  uBpDocNr?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bp P Date.
   * @nullable
   */
  uBpPDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Bp T Date.
   * @nullable
   */
  uBpTDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Bp C Bala.
   * @nullable
   */
  uBpCBala?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Bp N Bala.
   * @nullable
   */
  uBpNBala?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Bp G Lacc.
   * @nullable
   */
  uBpGLacc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Statu.
   * @nullable
   */
  uBpStatu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Ex Doc.
   * @nullable
   */
  uBpExDoc?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bp Pay Do.
   * @nullable
   */
  uBpPayDo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Bp Vat.
   * @nullable
   */
  uBpVat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Vat A.
   * @nullable
   */
  uBpVatA?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Bp Pc.
   * @nullable
   */
  uBpPc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Prj.
   * @nullable
   */
  uBpPrj?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp Dmcm.
   * @nullable
   */
  uBpDmcm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp F Out.
   * @nullable
   */
  uBpFOut?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Bp F In.
   * @nullable
   */
  uBpFIn?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Bp F Curr.
   * @nullable
   */
  uBpFCurr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bp F Rate.
   * @nullable
   */
  uBpFRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Bp Fvat.
   * @nullable
   */
  uBpFvat?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;

  constructor(readonly _entityApi: BankPagesApi<T>) {
    super(_entityApi);
  }
}

export interface BankPagesType<T extends DeSerializers = DefaultDeSerializers> {
  accountCode: DeserializedType<T, 'Edm.String'>;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  accountName?: DeserializedType<T, 'Edm.String'> | null;
  reference?: DeserializedType<T, 'Edm.String'> | null;
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  memo?: DeserializedType<T, 'Edm.String'> | null;
  debitAmount?: DeserializedType<T, 'Edm.Double'> | null;
  creditAmount?: DeserializedType<T, 'Edm.Double'> | null;
  bankMatch?: DeserializedType<T, 'Edm.Int32'> | null;
  dataSource?: DeserializedType<T, 'Edm.String'> | null;
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  statementNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentCreated?: BoYesNoEnum | null;
  visualOrder?: DeserializedType<T, 'Edm.Int32'> | null;
  docNumberType?: BoBpsDocTypes | null;
  paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  invoiceNumberEx?: DeserializedType<T, 'Edm.String'> | null;
  bicSwiftCode?: DeserializedType<T, 'Edm.String'> | null;
  uBpDocNr?: DeserializedType<T, 'Edm.Int32'> | null;
  uBpPDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uBpTDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uBpCBala?: DeserializedType<T, 'Edm.Double'> | null;
  uBpNBala?: DeserializedType<T, 'Edm.Double'> | null;
  uBpGLacc?: DeserializedType<T, 'Edm.String'> | null;
  uBpStatu?: DeserializedType<T, 'Edm.String'> | null;
  uBpExDoc?: DeserializedType<T, 'Edm.Int32'> | null;
  uBpPayDo?: DeserializedType<T, 'Edm.Int32'> | null;
  uBpVat?: DeserializedType<T, 'Edm.String'> | null;
  uBpVatA?: DeserializedType<T, 'Edm.Double'> | null;
  uBpPc?: DeserializedType<T, 'Edm.String'> | null;
  uBpPrj?: DeserializedType<T, 'Edm.String'> | null;
  uBpDmcm?: DeserializedType<T, 'Edm.String'> | null;
  uBpFOut?: DeserializedType<T, 'Edm.Double'> | null;
  uBpFIn?: DeserializedType<T, 'Edm.Double'> | null;
  uBpFCurr?: DeserializedType<T, 'Edm.String'> | null;
  uBpFRate?: DeserializedType<T, 'Edm.Double'> | null;
  uBpFvat?: DeserializedType<T, 'Edm.Double'> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  user?: UsersType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
}
