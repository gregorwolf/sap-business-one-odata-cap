/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Smod } from './U_Ba_Smod';
import { U_Ba_SmodRequestBuilder } from './U_Ba_SmodRequestBuilder';
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
export class U_Ba_SmodApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Smod<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_SmodApi<DeSerializersT> {
    return new U_Ba_SmodApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Smod;

  requestBuilder(): U_Ba_SmodRequestBuilder<DeSerializersT> {
    return new U_Ba_SmodRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Smod<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Smod<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Smod<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Smod, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Smod, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Smod<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Smod<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SYS_INIT: OrderableEdmTypeField<
      U_Ba_Smod<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_SYS_MODE: OrderableEdmTypeField<
      U_Ba_Smod<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DEPR_CALC: OrderableEdmTypeField<
      U_Ba_Smod<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    U_THRES_VAL: OrderableEdmTypeField<
      U_Ba_Smod<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Smod<DeSerializers>>;
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
         * Static representation of the {@link uSysInit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SYS_INIT: fieldBuilder.buildEdmTypeField(
          'U_SysInit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uSysMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SYS_MODE: fieldBuilder.buildEdmTypeField(
          'U_SysMode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uDeprCalc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEPR_CALC: fieldBuilder.buildEdmTypeField(
          'U_DeprCalc',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link uThresVal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_THRES_VAL: fieldBuilder.buildEdmTypeField(
          'U_ThresVal',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Smod)
      };
    }

    return this._schema;
  }
}
