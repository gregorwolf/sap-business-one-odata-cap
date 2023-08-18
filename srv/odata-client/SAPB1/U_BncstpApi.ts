/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bncstp } from './U_Bncstp';
import { U_BncstpRequestBuilder } from './U_BncstpRequestBuilder';
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
export class U_BncstpApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bncstp<DeSerializersT>, DeSerializersT>
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
  ): U_BncstpApi<DeSerializersT> {
    return new U_BncstpApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bncstp;

  requestBuilder(): U_BncstpRequestBuilder<DeSerializersT> {
    return new U_BncstpRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bncstp<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bncstp<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bncstp<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bncstp, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bncstp, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bncstp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bncstp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_EXPORT: OrderableEdmTypeField<
      U_Bncstp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_IMPORT: OrderableEdmTypeField<
      U_Bncstp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bncstp<DeSerializers>>;
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
         * Static representation of the {@link uExport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EXPORT: fieldBuilder.buildEdmTypeField(
          'U_Export',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_IMPORT: fieldBuilder.buildEdmTypeField(
          'U_Import',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bncstp)
      };
    }

    return this._schema;
  }
}
