/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Cnum } from './U_Ba_Cnum';
import { U_Ba_CnumRequestBuilder } from './U_Ba_CnumRequestBuilder';
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
export class U_Ba_CnumApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Cnum<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_CnumApi<DeSerializersT> {
    return new U_Ba_CnumApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Cnum;

  requestBuilder(): U_Ba_CnumRequestBuilder<DeSerializersT> {
    return new U_Ba_CnumRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Cnum<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Cnum<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Cnum<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Cnum, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Cnum, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_KEY: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ID: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_NAME: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FIRST: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LAST: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_NEXT: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_PREFIX: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SUFFIX: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_READ_ONLY: OrderableEdmTypeField<
      U_Ba_Cnum<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Cnum<DeSerializers>>;
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
         * Static representation of the {@link uKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_KEY: fieldBuilder.buildEdmTypeField('U_Key', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ID: fieldBuilder.buildEdmTypeField('U_ID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NAME: fieldBuilder.buildEdmTypeField('U_Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uFirst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FIRST: fieldBuilder.buildEdmTypeField('U_First', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uLast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LAST: fieldBuilder.buildEdmTypeField('U_Last', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uNext} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NEXT: fieldBuilder.buildEdmTypeField('U_Next', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PREFIX: fieldBuilder.buildEdmTypeField(
          'U_Prefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SUFFIX: fieldBuilder.buildEdmTypeField(
          'U_Suffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uReadOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_READ_ONLY: fieldBuilder.buildEdmTypeField(
          'U_ReadOnly',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Cnum)
      };
    }

    return this._schema;
  }
}
