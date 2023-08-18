/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bbhbcs } from './U_Bbhbcs';
import { U_BbhbcsRequestBuilder } from './U_BbhbcsRequestBuilder';
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
export class U_BbhbcsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bbhbcs<DeSerializersT>, DeSerializersT>
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
  ): U_BbhbcsApi<DeSerializersT> {
    return new U_BbhbcsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bbhbcs;

  requestBuilder(): U_BbhbcsRequestBuilder<DeSerializersT> {
    return new U_BbhbcsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bbhbcs<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bbhbcs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bbhbcs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bbhbcs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bbhbcs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CODE: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BC_CODE: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SORT_NUM: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CRT_DATE: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_MOD_DATE: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_USER: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_MIN_RELS: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_MAX_RELS: OrderableEdmTypeField<
      U_Bbhbcs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bbhbcs<DeSerializers>>;
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
         * Static representation of the {@link uCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CODE: fieldBuilder.buildEdmTypeField('U_Code', 'Edm.String', true),
        /**
         * Static representation of the {@link uBcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BC_CODE: fieldBuilder.buildEdmTypeField(
          'U_BC_Code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSortNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SORT_NUM: fieldBuilder.buildEdmTypeField(
          'U_SortNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uCrtDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CRT_DATE: fieldBuilder.buildEdmTypeField(
          'U_CrtDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uModDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MOD_DATE: fieldBuilder.buildEdmTypeField(
          'U_ModDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USER: fieldBuilder.buildEdmTypeField('U_User_', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uMinRels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MIN_RELS: fieldBuilder.buildEdmTypeField(
          'U_MinRels',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uMaxRels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MAX_RELS: fieldBuilder.buildEdmTypeField(
          'U_MaxRels',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bbhbcs)
      };
    }

    return this._schema;
  }
}
