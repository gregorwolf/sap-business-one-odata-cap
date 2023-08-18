/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Cmdim } from './U_Ba_Cmdim';
import { U_Ba_CmdimRequestBuilder } from './U_Ba_CmdimRequestBuilder';
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
  Time,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class U_Ba_CmdimApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Cmdim<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_CmdimApi<DeSerializersT> {
    return new U_Ba_CmdimApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Cmdim;

  requestBuilder(): U_Ba_CmdimRequestBuilder<DeSerializersT> {
    return new U_Ba_CmdimRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Cmdim<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Cmdim<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Cmdim<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Cmdim, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Cmdim, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Cmdim<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Cmdim<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_IMP_ID: OrderableEdmTypeField<
      U_Ba_Cmdim<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_STATUS: OrderableEdmTypeField<
      U_Ba_Cmdim<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_NUM_PROC: OrderableEdmTypeField<
      U_Ba_Cmdim<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_NUM_SAVE: OrderableEdmTypeField<
      U_Ba_Cmdim<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_IMP_DATE: OrderableEdmTypeField<
      U_Ba_Cmdim<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_IMP_TIME: OrderableEdmTypeField<
      U_Ba_Cmdim<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_IMP_USER: OrderableEdmTypeField<
      U_Ba_Cmdim<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Cmdim<DeSerializers>>;
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
         * Static representation of the {@link uImpId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_IMP_ID: fieldBuilder.buildEdmTypeField('U_ImpID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STATUS: fieldBuilder.buildEdmTypeField('U_Status', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uNumProc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NUM_PROC: fieldBuilder.buildEdmTypeField(
          'U_NumProc',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uNumSave} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NUM_SAVE: fieldBuilder.buildEdmTypeField(
          'U_NumSave',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uImpDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_IMP_DATE: fieldBuilder.buildEdmTypeField(
          'U_ImpDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uImpTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_IMP_TIME: fieldBuilder.buildEdmTypeField(
          'U_ImpTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uImpUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_IMP_USER: fieldBuilder.buildEdmTypeField(
          'U_ImpUser',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Cmdim)
      };
    }

    return this._schema;
  }
}
