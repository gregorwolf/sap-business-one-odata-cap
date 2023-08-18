/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bprstrt } from './U_Bprstrt';
import { U_BprstrtRequestBuilder } from './U_BprstrtRequestBuilder';
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
export class U_BprstrtApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bprstrt<DeSerializersT>, DeSerializersT>
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
  ): U_BprstrtApi<DeSerializersT> {
    return new U_BprstrtApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bprstrt;

  requestBuilder(): U_BprstrtRequestBuilder<DeSerializersT> {
    return new U_BprstrtRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bprstrt<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bprstrt<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bprstrt<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bprstrt, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bprstrt, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bprstrt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bprstrt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BPLOGIN: OrderableEdmTypeField<
      U_Bprstrt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BPDATE: OrderableEdmTypeField<
      U_Bprstrt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BPRSTRT_PROPERTY: OrderableEdmTypeField<
      U_Bprstrt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bprstrt<DeSerializers>>;
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
         * Static representation of the {@link uBplogin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BPLOGIN: fieldBuilder.buildEdmTypeField(
          'U_BPLOGIN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BPDATE: fieldBuilder.buildEdmTypeField(
          'U_BPDATE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBprstrtProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BPRSTRT_PROPERTY: fieldBuilder.buildEdmTypeField(
          'U_BPRSTRTProperty',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bprstrt)
      };
    }

    return this._schema;
  }
}
