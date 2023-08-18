/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bbflds } from './U_Bbflds';
import { U_BbfldsRequestBuilder } from './U_BbfldsRequestBuilder';
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
export class U_BbfldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bbflds<DeSerializersT>, DeSerializersT>
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
  ): U_BbfldsApi<DeSerializersT> {
    return new U_BbfldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bbflds;

  requestBuilder(): U_BbfldsRequestBuilder<DeSerializersT> {
    return new U_BbfldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bbflds<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bbflds<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bbflds<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bbflds, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bbflds, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bbflds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bbflds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BC_CODE: OrderableEdmTypeField<
      U_Bbflds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TBL_NAME: OrderableEdmTypeField<
      U_Bbflds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FLD_NAME: OrderableEdmTypeField<
      U_Bbflds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FLAG: OrderableEdmTypeField<
      U_Bbflds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FLD_TYPE: OrderableEdmTypeField<
      U_Bbflds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bbflds<DeSerializers>>;
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
         * Static representation of the {@link uTblName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TBL_NAME: fieldBuilder.buildEdmTypeField(
          'U_TblName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FLD_NAME: fieldBuilder.buildEdmTypeField(
          'U_FldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FLAG: fieldBuilder.buildEdmTypeField('U_Flag', 'Edm.String', true),
        /**
         * Static representation of the {@link uFldType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FLD_TYPE: fieldBuilder.buildEdmTypeField(
          'U_FldType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bbflds)
      };
    }

    return this._schema;
  }
}
