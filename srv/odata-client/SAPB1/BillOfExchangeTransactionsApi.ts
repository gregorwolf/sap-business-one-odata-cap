/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BillOfExchangeTransactions } from './BillOfExchangeTransactions';
import { BillOfExchangeTransactionsRequestBuilder } from './BillOfExchangeTransactionsRequestBuilder';
import { JournalEntriesApi } from './JournalEntriesApi';
import { BillOfExchangeTransactionLine } from './BillOfExchangeTransactionLine';
import { BillOfExchangeTransDeposit } from './BillOfExchangeTransDeposit';
import { BillOfExchangeTransBankPage } from './BillOfExchangeTransBankPage';
import { BoBotFromStatus } from './BoBotFromStatus';
import { BoBotToStatus } from './BoBotToStatus';
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
  Time,
  EnumField,
  OrderableEdmTypeField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BillOfExchangeTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BillOfExchangeTransactions<DeSerializersT>, DeSerializersT>
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
  ): BillOfExchangeTransactionsApi<DeSerializersT> {
    return new BillOfExchangeTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      BillOfExchangeTransactions<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JournalEntriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_ENTRY: new OneToOneLink('JournalEntry', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BillOfExchangeTransactions;

  requestBuilder(): BillOfExchangeTransactionsRequestBuilder<DeSerializersT> {
    return new BillOfExchangeTransactionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BillOfExchangeTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BillOfExchangeTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BillOfExchangeTransactions<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BillOfExchangeTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BillOfExchangeTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STATUS_FROM: EnumField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      BoBotFromStatus,
      true,
      true
    >;
    STATUS_TO: EnumField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      BoBotToStatus,
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TRANSACTION_TIME: OrderableEdmTypeField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    IS_BOE_RECONCILED: EnumField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TAX_DATE: OrderableEdmTypeField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BOE_TRANSACTIONKEY: OrderableEdmTypeField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BILL_OF_EXCHANGE_TRANSACTION_LINES: CollectionField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      BillOfExchangeTransactionLine,
      true,
      true
    >;
    BILL_OF_EXCHANGE_TRANS_DEPOSITS: CollectionField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      BillOfExchangeTransDeposit,
      true,
      true
    >;
    BILL_OF_EXCHANGE_TRANS_BANK_PAGES: CollectionField<
      BillOfExchangeTransactions<DeSerializers>,
      DeSerializersT,
      BillOfExchangeTransBankPage,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      BillOfExchangeTransactions<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BillOfExchangeTransactions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link statusFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_FROM: fieldBuilder.buildEnumField(
          'StatusFrom',
          BoBotFromStatus,
          true
        ),
        /**
         * Static representation of the {@link statusTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_TO: fieldBuilder.buildEnumField('StatusTo', BoBotToStatus, true),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link transactionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TIME: fieldBuilder.buildEdmTypeField(
          'TransactionTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link isBoeReconciled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BOE_RECONCILED: fieldBuilder.buildEnumField(
          'IsBoeReconciled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link postingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'PostingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link taxDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DATE: fieldBuilder.buildEdmTypeField(
          'TaxDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link boeTransactionkey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOE_TRANSACTIONKEY: fieldBuilder.buildEdmTypeField(
          'BOETransactionkey',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link billOfExchangeTransactionLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_TRANSACTION_LINES: fieldBuilder.buildCollectionField(
          'BillOfExchangeTransactionLines',
          BillOfExchangeTransactionLine,
          true
        ),
        /**
         * Static representation of the {@link billOfExchangeTransDeposits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_TRANS_DEPOSITS: fieldBuilder.buildCollectionField(
          'BillOfExchangeTransDeposits',
          BillOfExchangeTransDeposit,
          true
        ),
        /**
         * Static representation of the {@link billOfExchangeTransBankPages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_TRANS_BANK_PAGES: fieldBuilder.buildCollectionField(
          'BillOfExchangeTransBankPages',
          BillOfExchangeTransBankPage,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BillOfExchangeTransactions)
      };
    }

    return this._schema;
  }
}
