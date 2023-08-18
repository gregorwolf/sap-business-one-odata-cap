/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EBooks } from './EBooks';
import { EBooksRequestBuilder } from './EBooksRequestBuilder';
import { EBooksLine } from './EBooksLine';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class EBooksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EBooks<DeSerializersT>, DeSerializersT>
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
  ): EBooksApi<DeSerializersT> {
    return new EBooksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EBooks;

  requestBuilder(): EBooksRequestBuilder<DeSerializersT> {
    return new EBooksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<EBooks<DeSerializersT>, DeSerializersT> {
    return entityBuilder<EBooks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EBooks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EBooks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EBooks, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MARK: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCEL_MARK: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UID: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUER_VATID: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CPVATID: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AA: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_DATE: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    INVOICE_TYPE: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_NET_VALUE: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_VAT_AMOUNT: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_WITHHELD_AMOUNT: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_GROSS_VALUE: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LINKED_DOC_TYPE: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LINKED_DOC_ENTRY: OrderableEdmTypeField<
      EBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IS_NEGATIVE_MARK: EnumField<
      EBooks<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    E_BOOKS_LINES: CollectionField<
      EBooks<DeSerializers>,
      DeSerializersT,
      EBooksLine,
      true,
      true
    >;
    ALL_FIELDS: AllFields<EBooks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK: fieldBuilder.buildEdmTypeField('MARK', 'Edm.String', true),
        /**
         * Static representation of the {@link cancelMark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_MARK: fieldBuilder.buildEdmTypeField(
          'CancelMARK',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UID: fieldBuilder.buildEdmTypeField('UID', 'Edm.String', true),
        /**
         * Static representation of the {@link issuerVatid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUER_VATID: fieldBuilder.buildEdmTypeField(
          'IssuerVATID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cpvatid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPVATID: fieldBuilder.buildEdmTypeField('CPVATID', 'Edm.String', true),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.String', true),
        /**
         * Static representation of the {@link aa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AA: fieldBuilder.buildEdmTypeField('AA', 'Edm.String', true),
        /**
         * Static representation of the {@link issueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'IssueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link invoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TYPE: fieldBuilder.buildEdmTypeField(
          'InvoiceType',
          'Edm.String',
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
         * Static representation of the {@link totalNetValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_NET_VALUE: fieldBuilder.buildEdmTypeField(
          'TotalNetValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalVatAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_VAT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalVatAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalWithheldAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_WITHHELD_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalWithheldAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalGrossValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_GROSS_VALUE: fieldBuilder.buildEdmTypeField(
          'TotalGrossValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link linkedDocType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_DOC_TYPE: fieldBuilder.buildEdmTypeField(
          'LinkedDocType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link linkedDocEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'LinkedDocEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link isNegativeMark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEGATIVE_MARK: fieldBuilder.buildEnumField(
          'IsNegativeMark',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link eBooksLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_BOOKS_LINES: fieldBuilder.buildCollectionField(
          'EBooksLines',
          EBooksLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EBooks)
      };
    }

    return this._schema;
  }
}
