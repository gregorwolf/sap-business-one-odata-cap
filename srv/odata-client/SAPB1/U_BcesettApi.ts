/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bcesett } from './U_Bcesett';
import { U_BcesettRequestBuilder } from './U_BcesettRequestBuilder';
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
export class U_BcesettApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bcesett<DeSerializersT>, DeSerializersT>
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
  ): U_BcesettApi<DeSerializersT> {
    return new U_BcesettApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bcesett;

  requestBuilder(): U_BcesettRequestBuilder<DeSerializersT> {
    return new U_BcesettRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bcesett<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bcesett<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bcesett<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bcesett, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bcesett, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bcesett<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bcesett<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CPY_METHOD: OrderableEdmTypeField<
      U_Bcesett<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_RTCF: OrderableEdmTypeField<
      U_Bcesett<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FRFMUDF: OrderableEdmTypeField<
      U_Bcesett<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FBACKUP: OrderableEdmTypeField<
      U_Bcesett<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CF_FOLDER: OrderableEdmTypeField<
      U_Bcesett<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_WS_FOLDER: OrderableEdmTypeField<
      U_Bcesett<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LF_FOLDER: OrderableEdmTypeField<
      U_Bcesett<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bcesett<DeSerializers>>;
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
         * Static representation of the {@link uCpyMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CPY_METHOD: fieldBuilder.buildEdmTypeField(
          'U_CpyMethod',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uRtcf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RTCF: fieldBuilder.buildEdmTypeField('U_RTCF', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uFrfmudf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FRFMUDF: fieldBuilder.buildEdmTypeField(
          'U_FRFMUDF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFbackup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FBACKUP: fieldBuilder.buildEdmTypeField(
          'U_FBACKUP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCfFolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CF_FOLDER: fieldBuilder.buildEdmTypeField(
          'U_CFFolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uWsFolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_WS_FOLDER: fieldBuilder.buildEdmTypeField(
          'U_WSFolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLfFolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LF_FOLDER: fieldBuilder.buildEdmTypeField(
          'U_LFFolder',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bcesett)
      };
    }

    return this._schema;
  }
}
