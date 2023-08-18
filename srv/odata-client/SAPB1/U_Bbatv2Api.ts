/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bbatv2 } from './U_Bbatv2';
import { U_Bbatv2RequestBuilder } from './U_Bbatv2RequestBuilder';
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
export class U_Bbatv2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bbatv2<DeSerializersT>, DeSerializersT>
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
  ): U_Bbatv2Api<DeSerializersT> {
    return new U_Bbatv2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bbatv2;

  requestBuilder(): U_Bbatv2RequestBuilder<DeSerializersT> {
    return new U_Bbatv2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bbatv2<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bbatv2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bbatv2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bbatv2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bbatv2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bbatv2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bbatv2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CODE_ATV: OrderableEdmTypeField<
      U_Bbatv2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_TBL_NAME: OrderableEdmTypeField<
      U_Bbatv2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LANGUAG: OrderableEdmTypeField<
      U_Bbatv2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FLD_NAME: OrderableEdmTypeField<
      U_Bbatv2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DESCR: OrderableEdmTypeField<
      U_Bbatv2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FLD_TYPE: OrderableEdmTypeField<
      U_Bbatv2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bbatv2<DeSerializers>>;
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
         * Static representation of the {@link uTblName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TBL_NAME: fieldBuilder.buildEdmTypeField(
          'U_TblName',
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
         * Static representation of the {@link uFldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FLD_NAME: fieldBuilder.buildEdmTypeField(
          'U_FldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDescr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DESCR: fieldBuilder.buildEdmTypeField('U_Descr', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', U_Bbatv2)
      };
    }

    return this._schema;
  }
}
