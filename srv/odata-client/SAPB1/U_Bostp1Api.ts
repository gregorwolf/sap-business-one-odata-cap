/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bostp1 } from './U_Bostp1';
import { U_Bostp1RequestBuilder } from './U_Bostp1RequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class U_Bostp1Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bostp1<DeSerializersT>, DeSerializersT>
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
  ): U_Bostp1Api<DeSerializersT> {
    return new U_Bostp1Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bostp1;

  requestBuilder(): U_Bostp1RequestBuilder<DeSerializersT> {
    return new U_Bostp1RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bostp1<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bostp1<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bostp1<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bostp1, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bostp1, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bostp1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bostp1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SEQUENCE: OrderableEdmTypeField<
      U_Bostp1<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_TPL_CODE: OrderableEdmTypeField<
      U_Bostp1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_QUERY_ID: OrderableEdmTypeField<
      U_Bostp1<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_NUM_REC: OrderableEdmTypeField<
      U_Bostp1<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_READ_LAST: OrderableEdmTypeField<
      U_Bostp1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RG_DATA: OrderableEdmTypeField<
      U_Bostp1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_Q_CAT_ID: OrderableEdmTypeField<
      U_Bostp1<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bostp1<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'U_Sequence',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uTplCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TPL_CODE: fieldBuilder.buildEdmTypeField(
          'U_TplCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uQueryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_QUERY_ID: fieldBuilder.buildEdmTypeField(
          'U_QueryID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uNumRec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NUM_REC: fieldBuilder.buildEdmTypeField(
          'U_NumRec',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uReadLast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_READ_LAST: fieldBuilder.buildEdmTypeField(
          'U_ReadLast',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uRgData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RG_DATA: fieldBuilder.buildEdmTypeField(
          'U_RgData',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uQCatId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_Q_CAT_ID: fieldBuilder.buildEdmTypeField(
          'U_QCatID',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bostp1)
      };
    }

    return this._schema;
  }
}
