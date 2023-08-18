/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bd_Spath } from './U_Bd_Spath';
import { U_Bd_SpathRequestBuilder } from './U_Bd_SpathRequestBuilder';
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
export class U_Bd_SpathApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bd_Spath<DeSerializersT>, DeSerializersT>
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
  ): U_Bd_SpathApi<DeSerializersT> {
    return new U_Bd_SpathApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bd_Spath;

  requestBuilder(): U_Bd_SpathRequestBuilder<DeSerializersT> {
    return new U_Bd_SpathRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bd_Spath<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bd_Spath<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bd_Spath<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bd_Spath, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bd_Spath, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_EXP_DATE: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_PATH: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FORM: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ADV_NAME: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ADV_NUM: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CL_NUM: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DFV_SHORT: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DNR: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ANR: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PP: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PWD: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FROM_DATE: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_TO_DATE: OrderableEdmTypeField<
      U_Bd_Spath<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bd_Spath<DeSerializers>>;
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
         * Static representation of the {@link uExpDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EXP_DATE: fieldBuilder.buildEdmTypeField(
          'U_ExpDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PATH: fieldBuilder.buildEdmTypeField('U_Path', 'Edm.String', true),
        /**
         * Static representation of the {@link uForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FORM: fieldBuilder.buildEdmTypeField('U_Form', 'Edm.String', true),
        /**
         * Static representation of the {@link uAdvName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ADV_NAME: fieldBuilder.buildEdmTypeField(
          'U_AdvName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAdvNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ADV_NUM: fieldBuilder.buildEdmTypeField(
          'U_AdvNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uClNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CL_NUM: fieldBuilder.buildEdmTypeField('U_ClNum', 'Edm.String', true),
        /**
         * Static representation of the {@link uDfvShort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DFV_SHORT: fieldBuilder.buildEdmTypeField(
          'U_DFVShort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDnr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DNR: fieldBuilder.buildEdmTypeField('U_DNR', 'Edm.String', true),
        /**
         * Static representation of the {@link uAnr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ANR: fieldBuilder.buildEdmTypeField('U_ANR', 'Edm.String', true),
        /**
         * Static representation of the {@link uPp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PP: fieldBuilder.buildEdmTypeField('U_PP', 'Edm.String', true),
        /**
         * Static representation of the {@link uPwd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PWD: fieldBuilder.buildEdmTypeField('U_PWD', 'Edm.String', true),
        /**
         * Static representation of the {@link uFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'U_FromDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TO_DATE: fieldBuilder.buildEdmTypeField(
          'U_ToDate',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bd_Spath)
      };
    }

    return this._schema;
  }
}
