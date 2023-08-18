/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Cto_Cfg } from './U_Cto_Cfg';
import { U_Cto_CfgRequestBuilder } from './U_Cto_CfgRequestBuilder';
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
export class U_Cto_CfgApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Cto_Cfg<DeSerializersT>, DeSerializersT>
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
  ): U_Cto_CfgApi<DeSerializersT> {
    return new U_Cto_CfgApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Cto_Cfg;

  requestBuilder(): U_Cto_CfgRequestBuilder<DeSerializersT> {
    return new U_Cto_CfgRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Cto_Cfg<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Cto_Cfg<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Cto_Cfg<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Cto_Cfg, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Cto_Cfg, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Cto_Cfg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Cto_Cfg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SECTION: OrderableEdmTypeField<
      U_Cto_Cfg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_KEY: OrderableEdmTypeField<
      U_Cto_Cfg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VALUE: OrderableEdmTypeField<
      U_Cto_Cfg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Cto_Cfg<DeSerializers>>;
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
         * Static representation of the {@link uSection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SECTION: fieldBuilder.buildEdmTypeField(
          'U_Section',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_KEY: fieldBuilder.buildEdmTypeField('U_Key', 'Edm.String', true),
        /**
         * Static representation of the {@link uValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VALUE: fieldBuilder.buildEdmTypeField('U_Value', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Cto_Cfg)
      };
    }

    return this._schema;
  }
}
