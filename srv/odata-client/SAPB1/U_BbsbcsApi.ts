/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bbsbcs } from './U_Bbsbcs';
import { U_BbsbcsRequestBuilder } from './U_BbsbcsRequestBuilder';
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
export class U_BbsbcsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bbsbcs<DeSerializersT>, DeSerializersT>
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
  ): U_BbsbcsApi<DeSerializersT> {
    return new U_BbsbcsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bbsbcs;

  requestBuilder(): U_BbsbcsRequestBuilder<DeSerializersT> {
    return new U_BbsbcsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bbsbcs<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bbsbcs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bbsbcs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bbsbcs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bbsbcs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bbsbcs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bbsbcs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BC_CODE: OrderableEdmTypeField<
      U_Bbsbcs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CRT_DATE: OrderableEdmTypeField<
      U_Bbsbcs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_MOD_DATE: OrderableEdmTypeField<
      U_Bbsbcs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_USER: OrderableEdmTypeField<
      U_Bbsbcs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_MIN_RELS: OrderableEdmTypeField<
      U_Bbsbcs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_MAX_RELS: OrderableEdmTypeField<
      U_Bbsbcs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CODE_ATV: OrderableEdmTypeField<
      U_Bbsbcs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bbsbcs<DeSerializers>>;
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
         * Static representation of the {@link uBcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BC_CODE: fieldBuilder.buildEdmTypeField(
          'U_BC_Code',
          'Edm.String',
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
        /**
         * Static representation of the {@link uCodeAtv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CODE_ATV: fieldBuilder.buildEdmTypeField(
          'U_CodeATV',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bbsbcs)
      };
    }

    return this._schema;
  }
}
