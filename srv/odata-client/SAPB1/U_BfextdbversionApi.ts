/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bfextdbversion } from './U_Bfextdbversion';
import { U_BfextdbversionRequestBuilder } from './U_BfextdbversionRequestBuilder';
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
export class U_BfextdbversionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bfextdbversion<DeSerializersT>, DeSerializersT>
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
  ): U_BfextdbversionApi<DeSerializersT> {
    return new U_BfextdbversionApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bfextdbversion;

  requestBuilder(): U_BfextdbversionRequestBuilder<DeSerializersT> {
    return new U_BfextdbversionRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bfextdbversion<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bfextdbversion<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bfextdbversion<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bfextdbversion, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        U_Bfextdbversion,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bfextdbversion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bfextdbversion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_EXT_ID: OrderableEdmTypeField<
      U_Bfextdbversion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VERSION: OrderableEdmTypeField<
      U_Bfextdbversion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STATUS: OrderableEdmTypeField<
      U_Bfextdbversion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RDATE: OrderableEdmTypeField<
      U_Bfextdbversion<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_EF_NUM: OrderableEdmTypeField<
      U_Bfextdbversion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bfextdbversion<DeSerializers>>;
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
         * Static representation of the {@link uExtId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EXT_ID: fieldBuilder.buildEdmTypeField('U_ExtID', 'Edm.String', true),
        /**
         * Static representation of the {@link uVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VERSION: fieldBuilder.buildEdmTypeField(
          'U_Version',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STATUS: fieldBuilder.buildEdmTypeField(
          'U_Status',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uRdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RDATE: fieldBuilder.buildEdmTypeField(
          'U_Rdate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uEfNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EF_NUM: fieldBuilder.buildEdmTypeField('U_EFNum', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bfextdbversion)
      };
    }

    return this._schema;
  }
}
