/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bbvals } from './U_Bbvals';
import { U_BbvalsRequestBuilder } from './U_BbvalsRequestBuilder';
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
export class U_BbvalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bbvals<DeSerializersT>, DeSerializersT>
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
  ): U_BbvalsApi<DeSerializersT> {
    return new U_BbvalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bbvals;

  requestBuilder(): U_BbvalsRequestBuilder<DeSerializersT> {
    return new U_BbvalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bbvals<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bbvals<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bbvals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bbvals, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bbvals, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bbvals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bbvals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BC_CODE: OrderableEdmTypeField<
      U_Bbvals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LANGUAG: OrderableEdmTypeField<
      U_Bbvals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_TBL_NAME: OrderableEdmTypeField<
      U_Bbvals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FLD_NAME: OrderableEdmTypeField<
      U_Bbvals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_REC_ID: OrderableEdmTypeField<
      U_Bbvals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_VALUE: OrderableEdmTypeField<
      U_Bbvals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bbvals<DeSerializers>>;
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
         * Static representation of the {@link uLanguag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LANGUAG: fieldBuilder.buildEdmTypeField(
          'U_Languag',
          'Edm.Int32',
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
         * Static representation of the {@link uRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REC_ID: fieldBuilder.buildEdmTypeField('U_RecID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VALUE: fieldBuilder.buildEdmTypeField('U_Value_', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bbvals)
      };
    }

    return this._schema;
  }
}
