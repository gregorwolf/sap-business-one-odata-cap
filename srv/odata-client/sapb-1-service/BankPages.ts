/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankPagesRequestBuilder } from './BankPagesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BankPages" of service "SAPB1".
 */
export class BankPages extends Entity implements BankPagesType {
  /**
   * Technical entity name for BankPages.
   */
  static _entityName = 'BankPages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BankPages.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: number;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: string;
  /**
   * Reference.
   * @nullable
   */
  reference?: string;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Memo.
   * @nullable
   */
  memo?: string;
  /**
   * Debit Amount.
   * @nullable
   */
  debitAmount?: number;
  /**
   * Credit Amount.
   * @nullable
   */
  creditAmount?: number;
  /**
   * Bank Match.
   * @nullable
   */
  bankMatch?: number;
  /**
   * Data Source.
   * @nullable
   */
  dataSource?: string;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: number;
  /**
   * External Code.
   * @nullable
   */
  externalCode?: string;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Card Name.
   * @nullable
   */
  cardName?: string;
  /**
   * Statement Number.
   * @nullable
   */
  statementNumber?: number;
  /**
   * Invoice Number.
   * @nullable
   */
  invoiceNumber?: string;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Payment Reference.
   * @nullable
   */
  paymentReference?: string;
  /**
   * Invoice Number Ex.
   * @nullable
   */
  invoiceNumberEx?: string;
  /**
   * Bic Swift Code.
   * @nullable
   */
  bicSwiftCode?: string;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;

  /**
   * Returns an entity builder to construct instances `BankPages`.
   * @returns A builder that constructs instances of entity type `BankPages`.
   */
  static builder(): EntityBuilderType<BankPages, BankPagesTypeForceMandatory> {
    return Entity.entityBuilder(BankPages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BankPages` entity type.
   * @returns A `BankPages` request builder.
   */
  static requestBuilder(): BankPagesRequestBuilder {
    return new BankPagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BankPages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BankPages`.
   */
  static customField(fieldName: string): CustomField<BankPages> {
    return Entity.customFieldSelector(fieldName, BankPages);
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
import { Users, UsersType } from './Users';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

export interface BankPagesType {
  accountCode?: string;
  sequence?: number;
  accountName?: string;
  reference?: string;
  dueDate?: Moment;
  memo?: string;
  debitAmount?: number;
  creditAmount?: number;
  bankMatch?: number;
  dataSource?: string;
  userSignature?: number;
  externalCode?: string;
  cardCode?: string;
  cardName?: string;
  statementNumber?: number;
  invoiceNumber?: string;
  visualOrder?: number;
  paymentReference?: string;
  invoiceNumberEx?: string;
  bicSwiftCode?: string;
  chartOfAccount: ChartOfAccountsType;
  user: UsersType;
  businessPartner: BusinessPartnersType;
}

export interface BankPagesTypeForceMandatory {
  accountCode: string;
  sequence: number;
  accountName: string;
  reference: string;
  dueDate: Moment;
  memo: string;
  debitAmount: number;
  creditAmount: number;
  bankMatch: number;
  dataSource: string;
  userSignature: number;
  externalCode: string;
  cardCode: string;
  cardName: string;
  statementNumber: number;
  invoiceNumber: string;
  visualOrder: number;
  paymentReference: string;
  invoiceNumberEx: string;
  bicSwiftCode: string;
  chartOfAccount: ChartOfAccountsType;
  user: UsersType;
  businessPartner: BusinessPartnersType;
}

export namespace BankPages {
  /**
   * Static representation of the [[accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CODE: StringField<BankPages> = new StringField('AccountCode', BankPages, 'Edm.String');
  /**
   * Static representation of the [[sequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE: NumberField<BankPages> = new NumberField('Sequence', BankPages, 'Edm.Int32');
  /**
   * Static representation of the [[accountName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_NAME: StringField<BankPages> = new StringField('AccountName', BankPages, 'Edm.String');
  /**
   * Static representation of the [[reference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE: StringField<BankPages> = new StringField('Reference', BankPages, 'Edm.String');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<BankPages> = new DateField('DueDate', BankPages, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[memo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MEMO: StringField<BankPages> = new StringField('Memo', BankPages, 'Edm.String');
  /**
   * Static representation of the [[debitAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEBIT_AMOUNT: NumberField<BankPages> = new NumberField('DebitAmount', BankPages, 'Edm.Double');
  /**
   * Static representation of the [[creditAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_AMOUNT: NumberField<BankPages> = new NumberField('CreditAmount', BankPages, 'Edm.Double');
  /**
   * Static representation of the [[bankMatch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_MATCH: NumberField<BankPages> = new NumberField('BankMatch', BankPages, 'Edm.Int32');
  /**
   * Static representation of the [[dataSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_SOURCE: StringField<BankPages> = new StringField('DataSource', BankPages, 'Edm.String');
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<BankPages> = new NumberField('UserSignature', BankPages, 'Edm.Int32');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<BankPages> = new StringField('ExternalCode', BankPages, 'Edm.String');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<BankPages> = new StringField('CardCode', BankPages, 'Edm.String');
  /**
   * Static representation of the [[cardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NAME: StringField<BankPages> = new StringField('CardName', BankPages, 'Edm.String');
  /**
   * Static representation of the [[statementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATEMENT_NUMBER: NumberField<BankPages> = new NumberField('StatementNumber', BankPages, 'Edm.Int32');
  /**
   * Static representation of the [[invoiceNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_NUMBER: StringField<BankPages> = new StringField('InvoiceNumber', BankPages, 'Edm.String');
  /**
   * Static representation of the [[visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VISUAL_ORDER: NumberField<BankPages> = new NumberField('VisualOrder', BankPages, 'Edm.Int32');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<BankPages> = new StringField('PaymentReference', BankPages, 'Edm.String');
  /**
   * Static representation of the [[invoiceNumberEx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_NUMBER_EX: StringField<BankPages> = new StringField('InvoiceNumberEx', BankPages, 'Edm.String');
  /**
   * Static representation of the [[bicSwiftCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIC_SWIFT_CODE: StringField<BankPages> = new StringField('BICSwiftCode', BankPages, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<BankPages, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', BankPages, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<BankPages, Users> = new OneToOneLink('User', BankPages, Users);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<BankPages, BusinessPartners> = new OneToOneLink('BusinessPartner', BankPages, BusinessPartners);
  /**
   * All fields of the BankPages entity.
   */
  export const _allFields: Array<StringField<BankPages> | NumberField<BankPages> | DateField<BankPages> | OneToOneLink<BankPages, ChartOfAccounts> | OneToOneLink<BankPages, Users> | OneToOneLink<BankPages, BusinessPartners>> = [
    BankPages.ACCOUNT_CODE,
    BankPages.SEQUENCE,
    BankPages.ACCOUNT_NAME,
    BankPages.REFERENCE,
    BankPages.DUE_DATE,
    BankPages.MEMO,
    BankPages.DEBIT_AMOUNT,
    BankPages.CREDIT_AMOUNT,
    BankPages.BANK_MATCH,
    BankPages.DATA_SOURCE,
    BankPages.USER_SIGNATURE,
    BankPages.EXTERNAL_CODE,
    BankPages.CARD_CODE,
    BankPages.CARD_NAME,
    BankPages.STATEMENT_NUMBER,
    BankPages.INVOICE_NUMBER,
    BankPages.VISUAL_ORDER,
    BankPages.PAYMENT_REFERENCE,
    BankPages.INVOICE_NUMBER_EX,
    BankPages.BIC_SWIFT_CODE,
    BankPages.CHART_OF_ACCOUNT,
    BankPages.USER,
    BankPages.BUSINESS_PARTNER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BankPages> = new AllFields('*', BankPages);
  /**
   * All key fields of the BankPages entity.
   */
  export const _keyFields: Array<Field<BankPages>> = [BankPages.ACCOUNT_CODE, BankPages.SEQUENCE];
  /**
   * Mapping of all key field names to the respective static field property BankPages.
   */
  export const _keys: { [keys: string]: Field<BankPages> } = BankPages._keyFields.reduce((acc: { [keys: string]: Field<BankPages> }, field: Field<BankPages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
