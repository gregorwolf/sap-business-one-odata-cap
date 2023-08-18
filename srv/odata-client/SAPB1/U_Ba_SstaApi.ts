/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Ssta } from './U_Ba_Ssta';
import { U_Ba_SstaRequestBuilder } from './U_Ba_SstaRequestBuilder';
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
export class U_Ba_SstaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Ssta<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_SstaApi<DeSerializersT> {
    return new U_Ba_SstaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Ssta;

  requestBuilder(): U_Ba_SstaRequestBuilder<DeSerializersT> {
    return new U_Ba_SstaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Ssta<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Ssta<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Ssta<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Ssta, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Ssta, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Ssta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Ssta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STATUS_ID: OrderableEdmTypeField<
      U_Ba_Ssta<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DEF_NAME: OrderableEdmTypeField<
      U_Ba_Ssta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Ssta<DeSerializers>>;
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
         * Static representation of the {@link uStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'U_StatusID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uDefName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEF_NAME: fieldBuilder.buildEdmTypeField(
          'U_DefName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Ssta)
      };
    }

    return this._schema;
  }
}
