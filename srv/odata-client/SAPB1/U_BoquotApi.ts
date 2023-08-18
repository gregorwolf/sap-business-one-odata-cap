/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Boquot } from './U_Boquot';
import { U_BoquotRequestBuilder } from './U_BoquotRequestBuilder';
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
export class U_BoquotApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Boquot<DeSerializersT>, DeSerializersT>
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
  ): U_BoquotApi<DeSerializersT> {
    return new U_BoquotApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Boquot;

  requestBuilder(): U_BoquotRequestBuilder<DeSerializersT> {
    return new U_BoquotRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Boquot<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Boquot<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Boquot<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Boquot, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Boquot, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Boquot<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Boquot<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_MY_Q: OrderableEdmTypeField<
      U_Boquot<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_STATUS: OrderableEdmTypeField<
      U_Boquot<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FROM_D: OrderableEdmTypeField<
      U_Boquot<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_TO_D: OrderableEdmTypeField<
      U_Boquot<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_LAST_DS: OrderableEdmTypeField<
      U_Boquot<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Boquot<DeSerializers>>;
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
         * Static representation of the {@link uMyQ} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MY_Q: fieldBuilder.buildEdmTypeField('U_MyQ', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STATUS: fieldBuilder.buildEdmTypeField('U_Status', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uFromD} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FROM_D: fieldBuilder.buildEdmTypeField(
          'U_FromD',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uToD} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TO_D: fieldBuilder.buildEdmTypeField(
          'U_ToD',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uLastDs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LAST_DS: fieldBuilder.buildEdmTypeField(
          'U_LastDs',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Boquot)
      };
    }

    return this._schema;
  }
}
