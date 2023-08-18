/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankStatements } from './BankStatements';
import { BankStatementsRequestBuilder } from './BankStatementsRequestBuilder';
import { HouseBankAccountsApi } from './HouseBankAccountsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { BankStatementRow } from './BankStatementRow';
import { BankStatementStatusEnum } from './BankStatementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BankStatementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankStatements<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): BankStatementsApi<DeSerializersT> {
    return new BankStatementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link houseBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNT: OneToOneLink<
      BankStatements<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_2: OneToOneLink<
      BankStatements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      HouseBankAccountsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      HOUSE_BANK_ACCOUNT: new OneToOneLink(
        'HouseBankAccount',
        this,
        linkedApis[0]
      ),
      CURRENCY_2: new OneToOneLink('Currency2', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = BankStatements;

  requestBuilder(): BankStatementsRequestBuilder<DeSerializersT> {
    return new BankStatementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankStatements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BankStatements<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BankStatements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BankStatements, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BankStatements, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INTERNAL_NUMBER: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BANK_ACCOUNT_KEY: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STATEMENT_NUMBER: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_DATE: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STATUS: EnumField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      BankStatementStatusEnum,
      true,
      true
    >;
    IMPORTED: EnumField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    STARTING_BALANCE_F: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ENDING_BALANCE_F: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTING_BALANCE_L: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ENDING_BALANCE_L: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BANK_STATEMENT_FILE_HASH: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_GUID: OrderableEdmTypeField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_ROWS: CollectionField<
      BankStatements<DeSerializers>,
      DeSerializersT,
      BankStatementRow,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link houseBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNT: OneToOneLink<
      BankStatements<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_2: OneToOneLink<
      BankStatements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankStatements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link internalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'InternalNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bankAccountKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_KEY: fieldBuilder.buildEdmTypeField(
          'BankAccountKey',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link statementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'StatementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'StatementDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BankStatementStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link imported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTED: fieldBuilder.buildEnumField('Imported', BoYesNoEnum, true),
        /**
         * Static representation of the {@link startingBalanceF} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTING_BALANCE_F: fieldBuilder.buildEdmTypeField(
          'StartingBalanceF',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link endingBalanceF} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDING_BALANCE_F: fieldBuilder.buildEdmTypeField(
          'EndingBalanceF',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startingBalanceL} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTING_BALANCE_L: fieldBuilder.buildEdmTypeField(
          'StartingBalanceL',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link endingBalanceL} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDING_BALANCE_L: fieldBuilder.buildEdmTypeField(
          'EndingBalanceL',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link bankStatementFileHash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_FILE_HASH: fieldBuilder.buildEdmTypeField(
          'BankStatementFileHash',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankStatementGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_GUID: fieldBuilder.buildEdmTypeField(
          'BankStatementGUID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankStatementRows} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_ROWS: fieldBuilder.buildCollectionField(
          'BankStatementRows',
          BankStatementRow,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankStatements)
      };
    }

    return this._schema;
  }
}
