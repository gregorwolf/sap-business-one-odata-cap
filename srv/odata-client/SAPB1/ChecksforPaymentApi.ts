/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChecksforPayment } from './ChecksforPayment';
import { ChecksforPaymentRequestBuilder } from './ChecksforPaymentRequestBuilder';
import { JournalEntriesApi } from './JournalEntriesApi';
import { CountriesApi } from './CountriesApi';
import { Attachments2Api } from './Attachments2Api';
import { ChecksforPaymentLine } from './ChecksforPaymentLine';
import { ChecksforPaymentPrintStatus } from './ChecksforPaymentPrintStatus';
import { ChecksforPaymentDocumentReference } from './ChecksforPaymentDocumentReference';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCpCardAcct } from './BoCpCardAcct';
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
export class ChecksforPaymentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ChecksforPayment<DeSerializersT>, DeSerializersT>
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
  ): ChecksforPaymentApi<DeSerializersT> {
    return new ChecksforPaymentApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      ChecksforPayment<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      ChecksforPayment<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ChecksforPayment<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalEntriesApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_ENTRY: new OneToOneLink('JournalEntry', this, linkedApis[0]),
      COUNTRY: new OneToOneLink('Country', this, linkedApis[1]),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ChecksforPayment;

  requestBuilder(): ChecksforPaymentRequestBuilder<DeSerializersT> {
    return new ChecksforPaymentRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ChecksforPayment<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ChecksforPayment<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ChecksforPayment<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ChecksforPayment, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ChecksforPayment,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CHECK_KEY: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHECK_NUMBER: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BANK_CODE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_DATE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETAILS: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_ENTRY_REFERENCE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_DATE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PAYMENT_NO: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CHECK_AMOUNT: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TRANSFERABLE: EnumField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VENDOR_CODE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_CURRENCY: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCELED: EnumField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CARD_OR_ACCOUNT: EnumField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      BoCpCardAcct,
      true,
      true
    >;
    PRINTED: EnumField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_CODE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_JOURNAL_ENTRY: EnumField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TAX_TOTAL: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_DATE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEDUCTION_REFUND_AMOUNT: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PRINTED_BY: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COUNTRY_CODE: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTALIN_WORDS: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_NAME: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_CHECK: EnumField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    E_CHECK: EnumField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRINT_CONFIRM: EnumField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CHECKSFOR_PAYMENT_LINES: CollectionField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      ChecksforPaymentLine,
      true,
      true
    >;
    CHECKSFOR_PAYMENT_PRINT_STATUS: CollectionField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      ChecksforPaymentPrintStatus,
      true,
      true
    >;
    CHECKSFOR_PAYMENT_DOCUMENT_REFERENCES: CollectionField<
      ChecksforPayment<DeSerializers>,
      DeSerializersT,
      ChecksforPaymentDocumentReference,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      ChecksforPayment<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      ChecksforPayment<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ChecksforPayment<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ChecksforPayment<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link checkKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_KEY: fieldBuilder.buildEdmTypeField(
          'CheckKey',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link checkNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NUMBER: fieldBuilder.buildEdmTypeField(
          'CheckNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bankCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE: fieldBuilder.buildEdmTypeField(
          'BankCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH: fieldBuilder.buildEdmTypeField('Branch', 'Edm.String', true),
        /**
         * Static representation of the {@link bankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NAME: fieldBuilder.buildEdmTypeField(
          'BankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_DATE: fieldBuilder.buildEdmTypeField(
          'CheckDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link details} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAILS: fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true),
        /**
         * Static representation of the {@link journalEntryReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ENTRY_REFERENCE: fieldBuilder.buildEdmTypeField(
          'JournalEntryReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link paymentNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_NO: fieldBuilder.buildEdmTypeField(
          'PaymentNo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link checkAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CheckAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link transferable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERABLE: fieldBuilder.buildEnumField(
          'Transferable',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link vendorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CODE: fieldBuilder.buildEdmTypeField(
          'VendorCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CheckCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link canceled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELED: fieldBuilder.buildEnumField('Canceled', BoYesNoEnum, true),
        /**
         * Static representation of the {@link cardOrAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_OR_ACCOUNT: fieldBuilder.buildEnumField(
          'CardOrAccount',
          BoCpCardAcct,
          true
        ),
        /**
         * Static representation of the {@link printed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED: fieldBuilder.buildEnumField('Printed', BoYesNoEnum, true),
        /**
         * Static representation of the {@link vendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'VendorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE: fieldBuilder.buildEdmTypeField(
          'Signature',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerAccountCode',
          'Edm.String',
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
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link createJournalEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_JOURNAL_ENTRY: fieldBuilder.buildEnumField(
          'CreateJournalEntry',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link taxTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TOTAL: fieldBuilder.buildEdmTypeField(
          'TaxTotal',
          'Edm.Double',
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
         * Static representation of the {@link deductionRefundAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_REFUND_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DeductionRefundAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link printedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED_BY: fieldBuilder.buildEdmTypeField(
          'PrintedBy',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link countryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'CountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalinWords} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTALIN_WORDS: fieldBuilder.buildEdmTypeField(
          'TotalinWords',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'AddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manualCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_CHECK: fieldBuilder.buildEnumField(
          'ManualCheck',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link eCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_CHECK: fieldBuilder.buildEnumField('ECheck', BoYesNoEnum, true),
        /**
         * Static representation of the {@link printConfirm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CONFIRM: fieldBuilder.buildEnumField(
          'PrintConfirm',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link checksforPaymentLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKSFOR_PAYMENT_LINES: fieldBuilder.buildCollectionField(
          'ChecksforPaymentLines',
          ChecksforPaymentLine,
          true
        ),
        /**
         * Static representation of the {@link checksforPaymentPrintStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKSFOR_PAYMENT_PRINT_STATUS: fieldBuilder.buildCollectionField(
          'ChecksforPaymentPrintStatus',
          ChecksforPaymentPrintStatus,
          true
        ),
        /**
         * Static representation of the {@link checksforPaymentDocumentReferences} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKSFOR_PAYMENT_DOCUMENT_REFERENCES:
          fieldBuilder.buildCollectionField(
            'ChecksforPaymentDocumentReferences',
            ChecksforPaymentDocumentReference,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ChecksforPayment)
      };
    }

    return this._schema;
  }
}
