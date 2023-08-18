/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bbatv1 } from './U_Bbatv1';
import { U_Bbatv1RequestBuilder } from './U_Bbatv1RequestBuilder';
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
export class U_Bbatv1Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bbatv1<DeSerializersT>, DeSerializersT>
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
  ): U_Bbatv1Api<DeSerializersT> {
    return new U_Bbatv1Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bbatv1;

  requestBuilder(): U_Bbatv1RequestBuilder<DeSerializersT> {
    return new U_Bbatv1RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bbatv1<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bbatv1<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bbatv1<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bbatv1, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bbatv1, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bbatv1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bbatv1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CODE_ATV: OrderableEdmTypeField<
      U_Bbatv1<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_TBL_NAME: OrderableEdmTypeField<
      U_Bbatv1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LANGUAG: OrderableEdmTypeField<
      U_Bbatv1<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DESCR: OrderableEdmTypeField<
      U_Bbatv1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ALL_FLDS: OrderableEdmTypeField<
      U_Bbatv1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bbatv1<DeSerializers>>;
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
         * Static representation of the {@link uDescr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DESCR: fieldBuilder.buildEdmTypeField('U_Descr', 'Edm.String', true),
        /**
         * Static representation of the {@link uAllFlds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ALL_FLDS: fieldBuilder.buildEdmTypeField(
          'U_AllFlds',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bbatv1)
      };
    }

    return this._schema;
  }
}
