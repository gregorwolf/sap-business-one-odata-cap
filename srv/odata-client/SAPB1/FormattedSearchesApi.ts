/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormattedSearches } from './FormattedSearches';
import { FormattedSearchesRequestBuilder } from './FormattedSearchesRequestBuilder';
import { UserValidValue } from './UserValidValue';
import { FieldId } from './FieldId';
import { BoFormattedSearchActionEnum } from './BoFormattedSearchActionEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { FormattedSearchByFieldEnum } from './FormattedSearchByFieldEnum';
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
export class FormattedSearchesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FormattedSearches<DeSerializersT>, DeSerializersT>
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
  ): FormattedSearchesApi<DeSerializersT> {
    return new FormattedSearchesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FormattedSearches;

  requestBuilder(): FormattedSearchesRequestBuilder<DeSerializersT> {
    return new FormattedSearchesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FormattedSearches<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FormattedSearches<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FormattedSearches<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof FormattedSearches,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FormattedSearches,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FORM_ID: OrderableEdmTypeField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_ID: OrderableEdmTypeField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION: EnumField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      BoFormattedSearchActionEnum,
      true,
      true
    >;
    QUERY_ID: OrderableEdmTypeField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INDEX: OrderableEdmTypeField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REFRESH: EnumField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FIELD_ID: OrderableEdmTypeField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORCE_REFRESH: EnumField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BY_FIELD: EnumField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BY_FIELD_EX: EnumField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      FormattedSearchByFieldEnum,
      true,
      true
    >;
    USER_VALID_VALUES: CollectionField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      UserValidValue,
      true,
      true
    >;
    FIELD_I_DS: CollectionField<
      FormattedSearches<DeSerializers>,
      DeSerializersT,
      FieldId,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FormattedSearches<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link formId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_ID: fieldBuilder.buildEdmTypeField('FormID', 'Edm.String', true),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemID', 'Edm.String', true),
        /**
         * Static representation of the {@link columnId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_ID: fieldBuilder.buildEdmTypeField(
          'ColumnID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEnumField(
          'Action',
          BoFormattedSearchActionEnum,
          true
        ),
        /**
         * Static representation of the {@link queryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_ID: fieldBuilder.buildEdmTypeField('QueryID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link index} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX: fieldBuilder.buildEdmTypeField('Index', 'Edm.Int32', false),
        /**
         * Static representation of the {@link refresh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFRESH: fieldBuilder.buildEnumField('Refresh', BoYesNoEnum, true),
        /**
         * Static representation of the {@link fieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_ID: fieldBuilder.buildEdmTypeField('FieldID', 'Edm.String', true),
        /**
         * Static representation of the {@link forceRefresh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORCE_REFRESH: fieldBuilder.buildEnumField(
          'ForceRefresh',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link byField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BY_FIELD: fieldBuilder.buildEnumField('ByField', BoYesNoEnum, true),
        /**
         * Static representation of the {@link byFieldEx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BY_FIELD_EX: fieldBuilder.buildEnumField(
          'ByFieldEx',
          FormattedSearchByFieldEnum,
          true
        ),
        /**
         * Static representation of the {@link userValidValues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_VALID_VALUES: fieldBuilder.buildCollectionField(
          'UserValidValues',
          UserValidValue,
          true
        ),
        /**
         * Static representation of the {@link fieldIDs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_I_DS: fieldBuilder.buildCollectionField(
          'FieldIDs',
          FieldId,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FormattedSearches)
      };
    }

    return this._schema;
  }
}
