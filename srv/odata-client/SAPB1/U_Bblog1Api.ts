/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bblog1 } from './U_Bblog1';
import { U_Bblog1RequestBuilder } from './U_Bblog1RequestBuilder';
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
export class U_Bblog1Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bblog1<DeSerializersT>, DeSerializersT>
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
  ): U_Bblog1Api<DeSerializersT> {
    return new U_Bblog1Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bblog1;

  requestBuilder(): U_Bblog1RequestBuilder<DeSerializersT> {
    return new U_Bblog1RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bblog1<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bblog1<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bblog1<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bblog1, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bblog1, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bblog1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bblog1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LOG_ID: OrderableEdmTypeField<
      U_Bblog1<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LINE_NUM: OrderableEdmTypeField<
      U_Bblog1<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_TBL_NAME: OrderableEdmTypeField<
      U_Bblog1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FLD_NAME: OrderableEdmTypeField<
      U_Bblog1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VAL_OLD: OrderableEdmTypeField<
      U_Bblog1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VAL_NEW: OrderableEdmTypeField<
      U_Bblog1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bblog1<DeSerializers>>;
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
         * Static representation of the {@link uLogId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LOG_ID: fieldBuilder.buildEdmTypeField('U_LogID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'U_LineNum',
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
         * Static representation of the {@link uValOld} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VAL_OLD: fieldBuilder.buildEdmTypeField(
          'U_ValOld',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uValNew} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VAL_NEW: fieldBuilder.buildEdmTypeField(
          'U_ValNew',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bblog1)
      };
    }

    return this._schema;
  }
}
