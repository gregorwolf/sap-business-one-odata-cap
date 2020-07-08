/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankStatementsRequestBuilder } from './BankStatementsRequestBuilder';
import { Moment } from 'moment';
import { BankStatementRow, BankStatementRowField } from './BankStatementRow';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BankStatements" of service "SAPB1".
 */
export class BankStatements extends Entity implements BankStatementsType {
  /**
   * Technical entity name for BankStatements.
   */
  static _entityName = 'BankStatements';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BankStatements.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Internal Number.
   * @nullable
   */
  internalNumber?: number;
  /**
   * Bank Account Key.
   * @nullable
   */
  bankAccountKey?: number;
  /**
   * Statement Number.
   * @nullable
   */
  statementNumber?: string;
  /**
   * Statement Date.
   * @nullable
   */
  statementDate?: Moment;
  /**
   * Starting Balance F.
   * @nullable
   */
  startingBalanceF?: number;
  /**
   * Ending Balance F.
   * @nullable
   */
  endingBalanceF?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Starting Balance L.
   * @nullable
   */
  startingBalanceL?: number;
  /**
   * Ending Balance L.
   * @nullable
   */
  endingBalanceL?: number;
  /**
   * Bank Statement File Hash.
   * @nullable
   */
  bankStatementFileHash?: string;
  /**
   * Bank Statement Guid.
   * @nullable
   */
  bankStatementGuid?: string;
  /**
   * Bank Statement Rows.
   * @nullable
   */
  bankStatementRows?: BankStatementRow[];
  /**
   * One-to-one navigation property to the [[HouseBankAccounts]] entity.
   */
  houseBankAccount!: HouseBankAccounts;
  /**
   * One-to-one navigation property to the [[Currencies]] entity.
   */
  currency2!: Currencies;

  /**
   * Returns an entity builder to construct instances `BankStatements`.
   * @returns A builder that constructs instances of entity type `BankStatements`.
   */
  static builder(): EntityBuilderType<BankStatements, BankStatementsTypeForceMandatory> {
    return Entity.entityBuilder(BankStatements);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BankStatements` entity type.
   * @returns A `BankStatements` request builder.
   */
  static requestBuilder(): BankStatementsRequestBuilder {
    return new BankStatementsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BankStatements`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BankStatements`.
   */
  static customField(fieldName: string): CustomField<BankStatements> {
    return Entity.customFieldSelector(fieldName, BankStatements);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { HouseBankAccounts, HouseBankAccountsType } from './HouseBankAccounts';
import { Currencies, CurrenciesType } from './Currencies';

export interface BankStatementsType {
  internalNumber?: number;
  bankAccountKey?: number;
  statementNumber?: string;
  statementDate?: Moment;
  startingBalanceF?: number;
  endingBalanceF?: number;
  currency?: string;
  startingBalanceL?: number;
  endingBalanceL?: number;
  bankStatementFileHash?: string;
  bankStatementGuid?: string;
  bankStatementRows?: BankStatementRow[];
  houseBankAccount: HouseBankAccountsType;
  currency2: CurrenciesType;
}

export interface BankStatementsTypeForceMandatory {
  internalNumber: number;
  bankAccountKey: number;
  statementNumber: string;
  statementDate: Moment;
  startingBalanceF: number;
  endingBalanceF: number;
  currency: string;
  startingBalanceL: number;
  endingBalanceL: number;
  bankStatementFileHash: string;
  bankStatementGuid: string;
  bankStatementRows: BankStatementRow[];
  houseBankAccount: HouseBankAccountsType;
  currency2: CurrenciesType;
}

export namespace BankStatements {
  /**
   * Static representation of the [[internalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_NUMBER: NumberField<BankStatements> = new NumberField('InternalNumber', BankStatements, 'Edm.Int32');
  /**
   * Static representation of the [[bankAccountKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT_KEY: NumberField<BankStatements> = new NumberField('BankAccountKey', BankStatements, 'Edm.Int32');
  /**
   * Static representation of the [[statementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATEMENT_NUMBER: StringField<BankStatements> = new StringField('StatementNumber', BankStatements, 'Edm.String');
  /**
   * Static representation of the [[statementDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATEMENT_DATE: DateField<BankStatements> = new DateField('StatementDate', BankStatements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startingBalanceF]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STARTING_BALANCE_F: NumberField<BankStatements> = new NumberField('StartingBalanceF', BankStatements, 'Edm.Double');
  /**
   * Static representation of the [[endingBalanceF]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENDING_BALANCE_F: NumberField<BankStatements> = new NumberField('EndingBalanceF', BankStatements, 'Edm.Double');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<BankStatements> = new StringField('Currency', BankStatements, 'Edm.String');
  /**
   * Static representation of the [[startingBalanceL]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STARTING_BALANCE_L: NumberField<BankStatements> = new NumberField('StartingBalanceL', BankStatements, 'Edm.Double');
  /**
   * Static representation of the [[endingBalanceL]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENDING_BALANCE_L: NumberField<BankStatements> = new NumberField('EndingBalanceL', BankStatements, 'Edm.Double');
  /**
   * Static representation of the [[bankStatementFileHash]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_STATEMENT_FILE_HASH: StringField<BankStatements> = new StringField('BankStatementFileHash', BankStatements, 'Edm.String');
  /**
   * Static representation of the [[bankStatementGuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_STATEMENT_GUID: StringField<BankStatements> = new StringField('BankStatementGUID', BankStatements, 'Edm.String');
  /**
   * Static representation of the [[bankStatementRows]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_STATEMENT_ROWS: CollectionField<BankStatements> = new CollectionField('BankStatementRows', BankStatements, new BankStatementRowField('', BankStatements));
  /**
   * Static representation of the one-to-one navigation property [[houseBankAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK_ACCOUNT: OneToOneLink<BankStatements, HouseBankAccounts> = new OneToOneLink('HouseBankAccount', BankStatements, HouseBankAccounts);
  /**
   * Static representation of the one-to-one navigation property [[currency2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_2: OneToOneLink<BankStatements, Currencies> = new OneToOneLink('Currency2', BankStatements, Currencies);
  /**
   * All fields of the BankStatements entity.
   */
  export const _allFields: Array<NumberField<BankStatements> | StringField<BankStatements> | DateField<BankStatements> | CollectionField<BankStatements> | OneToOneLink<BankStatements, HouseBankAccounts> | OneToOneLink<BankStatements, Currencies>> = [
    BankStatements.INTERNAL_NUMBER,
    BankStatements.BANK_ACCOUNT_KEY,
    BankStatements.STATEMENT_NUMBER,
    BankStatements.STATEMENT_DATE,
    BankStatements.STARTING_BALANCE_F,
    BankStatements.ENDING_BALANCE_F,
    BankStatements.CURRENCY,
    BankStatements.STARTING_BALANCE_L,
    BankStatements.ENDING_BALANCE_L,
    BankStatements.BANK_STATEMENT_FILE_HASH,
    BankStatements.BANK_STATEMENT_GUID,
    BankStatements.BANK_STATEMENT_ROWS,
    BankStatements.HOUSE_BANK_ACCOUNT,
    BankStatements.CURRENCY_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BankStatements> = new AllFields('*', BankStatements);
  /**
   * All key fields of the BankStatements entity.
   */
  export const _keyFields: Array<Field<BankStatements>> = [BankStatements.INTERNAL_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property BankStatements.
   */
  export const _keys: { [keys: string]: Field<BankStatements> } = BankStatements._keyFields.reduce((acc: { [keys: string]: Field<BankStatements> }, field: Field<BankStatements>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
