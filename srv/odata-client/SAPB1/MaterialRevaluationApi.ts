/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialRevaluation } from './MaterialRevaluation';
import { MaterialRevaluationRequestBuilder } from './MaterialRevaluationRequestBuilder';
import { JournalEntriesApi } from './JournalEntriesApi';
import { UsersApi } from './UsersApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { MaterialRevaluationLine } from './MaterialRevaluationLine';
import { MaterialRevaluationDocumentReferences } from './MaterialRevaluationDocumentReferences';
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
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class MaterialRevaluationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MaterialRevaluation<DeSerializersT>, DeSerializersT>
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
  ): MaterialRevaluationApi<DeSerializersT> {
    return new MaterialRevaluationApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      MaterialRevaluation<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      MaterialRevaluation<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      MaterialRevaluation<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalEntriesApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_ENTRY: new OneToOneLink('JournalEntry', this, linkedApis[0]),
      USER: new OneToOneLink('User', this, linkedApis[1]),
      BUSINESS_PARTNER: new OneToOneLink('BusinessPartner', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = MaterialRevaluation;

  requestBuilder(): MaterialRevaluationRequestBuilder<DeSerializersT> {
    return new MaterialRevaluationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaterialRevaluation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MaterialRevaluation<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaterialRevaluation<DeSerializersT>,
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
    typeof MaterialRevaluation,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaterialRevaluation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_NUM: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_DATE: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    REFERENCE_1: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_MEMO: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_TIME: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TAX_DATE: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOC_ENTRY: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TRANS_NUM: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REVAL_TYPE: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUATION_INCOME_ACCOUNT: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUATION_EXPENSE_ACCOUNT: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_SOURCE: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SIGNATURE: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INFLATION_REVALUATION: EnumField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NAME: OrderableEdmTypeField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_REVALUATION_LINES: CollectionField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      MaterialRevaluationLine,
      true,
      true
    >;
    MATERIAL_REVALUATION_DOCUMENT_REFERENCES_COLLECTION: CollectionField<
      MaterialRevaluation<DeSerializers>,
      DeSerializersT,
      MaterialRevaluationDocumentReferences,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      MaterialRevaluation<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      MaterialRevaluation<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      MaterialRevaluation<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaterialRevaluation<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
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
         * Static representation of the {@link reference1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_1: fieldBuilder.buildEdmTypeField(
          'Reference1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_2: fieldBuilder.buildEdmTypeField(
          'Reference2',
          'Edm.String',
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
         * Static representation of the {@link journalMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_MEMO: fieldBuilder.buildEdmTypeField(
          'JournalMemo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TIME: fieldBuilder.buildEdmTypeField(
          'DocTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
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
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
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
         * Static representation of the {@link transNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_NUM: fieldBuilder.buildEdmTypeField(
          'TransNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link revalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVAL_TYPE: fieldBuilder.buildEdmTypeField(
          'RevalType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revaluationIncomeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_INCOME_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevaluationIncomeAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revaluationExpenseAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_EXPENSE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevaluationExpenseAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE: fieldBuilder.buildEdmTypeField(
          'DataSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link inflationRevaluation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFLATION_REVALUATION: fieldBuilder.buildEnumField(
          'InflationRevaluation',
          BoYesNoEnum,
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
         * Static representation of the {@link cardName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NAME: fieldBuilder.buildEdmTypeField(
          'CardName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialRevaluationLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_REVALUATION_LINES: fieldBuilder.buildCollectionField(
          'MaterialRevaluationLines',
          MaterialRevaluationLine,
          true
        ),
        /**
         * Static representation of the {@link materialRevaluationDocumentReferencesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_REVALUATION_DOCUMENT_REFERENCES_COLLECTION:
          fieldBuilder.buildCollectionField(
            'MaterialRevaluationDocumentReferencesCollection',
            MaterialRevaluationDocumentReferences,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaterialRevaluation)
      };
    }

    return this._schema;
  }
}
