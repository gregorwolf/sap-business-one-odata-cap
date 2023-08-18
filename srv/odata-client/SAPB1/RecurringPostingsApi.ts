/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecurringPostings } from './RecurringPostings';
import { RecurringPostingsRequestBuilder } from './RecurringPostingsRequestBuilder';
import { RecurringPostingsLine } from './RecurringPostingsLine';
import { RecurringPostingsDocumentReference } from './RecurringPostingsDocumentReference';
import { BoFrequencyTypeEnum } from './BoFrequencyTypeEnum';
import { BoSubFrequencyTypeEnum } from './BoSubFrequencyTypeEnum';
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
export class RecurringPostingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RecurringPostings<DeSerializersT>, DeSerializersT>
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
  ): RecurringPostingsApi<DeSerializersT> {
    return new RecurringPostingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RecurringPostings;

  requestBuilder(): RecurringPostingsRequestBuilder<DeSerializersT> {
    return new RecurringPostingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RecurringPostings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RecurringPostings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RecurringPostings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RecurringPostings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RecurringPostings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTANCE: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REFERENCE_1: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_3: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREQUENCY: EnumField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      BoFrequencyTypeEnum,
      true,
      true
    >;
    SUB_FREQUENCY: EnumField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      BoSubFrequencyTypeEnum,
      true,
      true
    >;
    NEXT_EXECUTION: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STAMP_TAX: EnumField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AUTOMATIC_VAT: EnumField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MANAGE_W_TAX: EnumField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DEFERRED_TAX: EnumField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VALID_UNTIL: EnumField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VALID_UNTIL_DATE: OrderableEdmTypeField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RECURRING_POSTINGS_LINE_COLLECTION: CollectionField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      RecurringPostingsLine,
      true,
      true
    >;
    RECURRING_POSTINGS_DOCUMENT_REFERENCE_COLLECTION: CollectionField<
      RecurringPostings<DeSerializers>,
      DeSerializersT,
      RecurringPostingsDocumentReference,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RecurringPostings<DeSerializers>>;
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
        /**
         * Static representation of the {@link instance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE: fieldBuilder.buildEdmTypeField(
          'Instance',
          'Edm.Int32',
          false
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
         * Static representation of the {@link reference3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_3: fieldBuilder.buildEdmTypeField(
          'Reference3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEnumField(
          'Frequency',
          BoFrequencyTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link subFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_FREQUENCY: fieldBuilder.buildEnumField(
          'SubFrequency',
          BoSubFrequencyTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link nextExecution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_EXECUTION: fieldBuilder.buildEdmTypeField(
          'NextExecution',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link stampTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAMP_TAX: fieldBuilder.buildEnumField('StampTax', BoYesNoEnum, true),
        /**
         * Static representation of the {@link automaticVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_VAT: fieldBuilder.buildEnumField(
          'AutomaticVAT',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link manageWTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_W_TAX: fieldBuilder.buildEnumField(
          'ManageWTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link deferredTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_TAX: fieldBuilder.buildEnumField(
          'DeferredTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link validUntil} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_UNTIL: fieldBuilder.buildEnumField(
          'ValidUntil',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link validUntilDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_UNTIL_DATE: fieldBuilder.buildEdmTypeField(
          'ValidUntilDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link recurringPostingsLineCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRING_POSTINGS_LINE_COLLECTION: fieldBuilder.buildCollectionField(
          'RecurringPostingsLineCollection',
          RecurringPostingsLine,
          true
        ),
        /**
         * Static representation of the {@link recurringPostingsDocumentReferenceCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRING_POSTINGS_DOCUMENT_REFERENCE_COLLECTION:
          fieldBuilder.buildCollectionField(
            'RecurringPostingsDocumentReferenceCollection',
            RecurringPostingsDocumentReference,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RecurringPostings)
      };
    }

    return this._schema;
  }
}
