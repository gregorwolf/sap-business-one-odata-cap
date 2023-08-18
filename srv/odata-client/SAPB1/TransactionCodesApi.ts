/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionCodes } from './TransactionCodes';
import { TransactionCodesRequestBuilder } from './TransactionCodesRequestBuilder';
import { JournalEntriesApi } from './JournalEntriesApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TransactionCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TransactionCodes<DeSerializersT>, DeSerializersT>
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
  ): TransactionCodesApi<DeSerializersT> {
    return new TransactionCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link journalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRIES: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalEntriesApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
      IncomingPaymentsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_ENTRIES: new OneToManyLink('JournalEntries', this, linkedApis[0]),
      CHART_OF_ACCOUNTS: new OneToManyLink(
        'ChartOfAccounts',
        this,
        linkedApis[1]
      ),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[2]),
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[3]
      ),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = TransactionCodes;

  requestBuilder(): TransactionCodesRequestBuilder<DeSerializersT> {
    return new TransactionCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransactionCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TransactionCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TransactionCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TransactionCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      TransactionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TransactionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link journalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRIES: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      TransactionCodes<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TransactionCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransactionCodes)
      };
    }

    return this._schema;
  }
}
