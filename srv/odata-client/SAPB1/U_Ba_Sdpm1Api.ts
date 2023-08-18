/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Sdpm1 } from './U_Ba_Sdpm1';
import { U_Ba_Sdpm1RequestBuilder } from './U_Ba_Sdpm1RequestBuilder';
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
export class U_Ba_Sdpm1Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Sdpm1<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_Sdpm1Api<DeSerializersT> {
    return new U_Ba_Sdpm1Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Sdpm1;

  requestBuilder(): U_Ba_Sdpm1RequestBuilder<DeSerializersT> {
    return new U_Ba_Sdpm1RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Sdpm1<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Sdpm1<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Sdpm1<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Sdpm1, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Sdpm1, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Sdpm1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Sdpm1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DP_METH_ID: OrderableEdmTypeField<
      U_Ba_Sdpm1<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LANG: OrderableEdmTypeField<
      U_Ba_Sdpm1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DESC: OrderableEdmTypeField<
      U_Ba_Sdpm1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COUNTRY: OrderableEdmTypeField<
      U_Ba_Sdpm1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Sdpm1<DeSerializers>>;
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
         * Static representation of the {@link uDpMethId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DP_METH_ID: fieldBuilder.buildEdmTypeField(
          'U_DpMethID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uLang} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LANG: fieldBuilder.buildEdmTypeField('U_Lang', 'Edm.String', true),
        /**
         * Static representation of the {@link uDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DESC: fieldBuilder.buildEdmTypeField('U_Desc', 'Edm.String', true),
        /**
         * Static representation of the {@link uCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COUNTRY: fieldBuilder.buildEdmTypeField(
          'U_Country',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Sdpm1)
      };
    }

    return this._schema;
  }
}
