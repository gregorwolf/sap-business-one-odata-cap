/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxInvoices } from './SalesTaxInvoices';
import { SalesTaxInvoicesRequestBuilder } from './SalesTaxInvoicesRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { SalesTaxInvoiceLine } from './SalesTaxInvoiceLine';
import { SalesTaxInvoiceOperationCode } from './SalesTaxInvoiceOperationCode';
import { SalesTaxInvoiceDocumentReference } from './SalesTaxInvoiceDocumentReference';
import { SalesTaxInvoiceLinkedDownPayment } from './SalesTaxInvoiceLinkedDownPayment';
import { BoTaxInvoiceTypes } from './BoTaxInvoiceTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCurrencySources } from './BoCurrencySources';
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
export class SalesTaxInvoicesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTaxInvoices<DeSerializersT>, DeSerializersT>
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
  ): SalesTaxInvoicesApi<DeSerializersT> {
    return new SalesTaxInvoicesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      SalesTaxInvoices<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPartnersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink('BusinessPartner', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SalesTaxInvoices;

  requestBuilder(): SalesTaxInvoicesRequestBuilder<DeSerializersT> {
    return new SalesTaxInvoicesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTaxInvoices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesTaxInvoices<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesTaxInvoices<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesTaxInvoices, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTaxInvoices,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_TYPE: EnumField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      BoTaxInvoiceTypes,
      true,
      true
    >;
    PRINTED: EnumField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DOC_DATE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOC_DUE_DATE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SEGMENT: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CONTACT_PERSON_CODE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TAX_DATE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_TO_CODE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_2: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_SOURCE: EnumField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      BoCurrencySources,
      true,
      true
    >;
    DOC_CURRENCY: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_OR_VENDOR_REF_NO: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_OR_VENDOR_NAME: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCEL_DATE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOCUMENT_TOTAL: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_TOTAL: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PAYMENT_REF_NO: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_REF_DATE: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ALTERATION_REVISION: OrderableEdmTypeField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_TAX_INVOICE_LINES: CollectionField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      SalesTaxInvoiceLine,
      true,
      true
    >;
    SALES_TAX_INVOICE_OPERATION_CODES: CollectionField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      SalesTaxInvoiceOperationCode,
      true,
      true
    >;
    SALES_TAX_INVOICE_DOCUMENT_REFERENCES: CollectionField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      SalesTaxInvoiceDocumentReference,
      true,
      true
    >;
    SALES_TAX_INVOICE_LINKED_DOWN_PAYMENTS: CollectionField<
      SalesTaxInvoices<DeSerializers>,
      DeSerializersT,
      SalesTaxInvoiceLinkedDownPayment,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      SalesTaxInvoices<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesTaxInvoices<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
        /**
         * Static representation of the {@link docType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE: fieldBuilder.buildEnumField(
          'DocType',
          BoTaxInvoiceTypes,
          true
        ),
        /**
         * Static representation of the {@link printed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED: fieldBuilder.buildEnumField('Printed', BoYesNoEnum, true),
        /**
         * Static representation of the {@link docDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_DATE: fieldBuilder.buildEdmTypeField(
          'DocDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link cardCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_CODE: fieldBuilder.buildEdmTypeField(
          'CardCode',
          'Edm.String',
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
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link docDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DocDueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link segment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT: fieldBuilder.buildEdmTypeField('Segment', 'Edm.Int32', true),
        /**
         * Static representation of the {@link contactPersonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_CODE: fieldBuilder.buildEdmTypeField(
          'ContactPersonCode',
          'Edm.Int32',
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
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipToCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TO_CODE: fieldBuilder.buildEdmTypeField(
          'ShipToCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link address2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_2: fieldBuilder.buildEdmTypeField(
          'Address2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencySource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_SOURCE: fieldBuilder.buildEnumField(
          'CurrencySource',
          BoCurrencySources,
          true
        ),
        /**
         * Static representation of the {@link docCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DocCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerOrVendorRefNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_OR_VENDOR_REF_NO: fieldBuilder.buildEdmTypeField(
          'CustomerOrVendorRefNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerOrVendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_OR_VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerOrVendorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancelDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_DATE: fieldBuilder.buildEdmTypeField(
          'CancelDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link documentTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TOTAL: fieldBuilder.buildEdmTypeField(
          'DocumentTotal',
          'Edm.Double',
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
         * Static representation of the {@link paymentRefNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_REF_NO: fieldBuilder.buildEdmTypeField(
          'PaymentRefNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentRefDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_REF_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentRefDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link alterationRevision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERATION_REVISION: fieldBuilder.buildEdmTypeField(
          'AlterationRevision',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesTaxInvoiceLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_INVOICE_LINES: fieldBuilder.buildCollectionField(
          'SalesTaxInvoiceLines',
          SalesTaxInvoiceLine,
          true
        ),
        /**
         * Static representation of the {@link salesTaxInvoiceOperationCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_INVOICE_OPERATION_CODES: fieldBuilder.buildCollectionField(
          'SalesTaxInvoiceOperationCodes',
          SalesTaxInvoiceOperationCode,
          true
        ),
        /**
         * Static representation of the {@link salesTaxInvoiceDocumentReferences} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_INVOICE_DOCUMENT_REFERENCES:
          fieldBuilder.buildCollectionField(
            'SalesTaxInvoiceDocumentReferences',
            SalesTaxInvoiceDocumentReference,
            true
          ),
        /**
         * Static representation of the {@link salesTaxInvoiceLinkedDownPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_INVOICE_LINKED_DOWN_PAYMENTS:
          fieldBuilder.buildCollectionField(
            'SalesTaxInvoiceLinkedDownPayments',
            SalesTaxInvoiceLinkedDownPayment,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTaxInvoices)
      };
    }

    return this._schema;
  }
}
