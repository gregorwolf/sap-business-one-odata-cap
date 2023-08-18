/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bboatv } from './U_Bboatv';
import { U_BboatvRequestBuilder } from './U_BboatvRequestBuilder';
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
export class U_BboatvApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bboatv<DeSerializersT>, DeSerializersT>
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
  ): U_BboatvApi<DeSerializersT> {
    return new U_BboatvApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bboatv;

  requestBuilder(): U_BboatvRequestBuilder<DeSerializersT> {
    return new U_BboatvRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bboatv<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bboatv<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bboatv<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bboatv, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bboatv, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bboatv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bboatv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CODE_ATV: OrderableEdmTypeField<
      U_Bboatv<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LANGUAG: OrderableEdmTypeField<
      U_Bboatv<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_NAME: OrderableEdmTypeField<
      U_Bboatv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LEVEL: OrderableEdmTypeField<
      U_Bboatv<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ENABLE: OrderableEdmTypeField<
      U_Bboatv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bboatv<DeSerializers>>;
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
         * Static representation of the {@link uCodeAtv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CODE_ATV: fieldBuilder.buildEdmTypeField(
          'U_CodeATV',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uLanguag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LANGUAG: fieldBuilder.buildEdmTypeField(
          'U_Languag',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NAME: fieldBuilder.buildEdmTypeField('U_Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LEVEL: fieldBuilder.buildEdmTypeField('U_Level_', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uEnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ENABLE: fieldBuilder.buildEdmTypeField(
          'U_Enable',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bboatv)
      };
    }

    return this._schema;
  }
}
