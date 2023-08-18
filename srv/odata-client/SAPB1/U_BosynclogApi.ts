/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bosynclog } from './U_Bosynclog';
import { U_BosynclogRequestBuilder } from './U_BosynclogRequestBuilder';
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
export class U_BosynclogApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bosynclog<DeSerializersT>, DeSerializersT>
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
  ): U_BosynclogApi<DeSerializersT> {
    return new U_BosynclogApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bosynclog;

  requestBuilder(): U_BosynclogRequestBuilder<DeSerializersT> {
    return new U_BosynclogRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bosynclog<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bosynclog<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bosynclog<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bosynclog, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bosynclog, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bosynclog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bosynclog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_USER_ID: OrderableEdmTypeField<
      U_Bosynclog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_START: OrderableEdmTypeField<
      U_Bosynclog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_END: OrderableEdmTypeField<
      U_Bosynclog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STATUS: OrderableEdmTypeField<
      U_Bosynclog<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_SYNC_CA: OrderableEdmTypeField<
      U_Bosynclog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SYNC_CO: OrderableEdmTypeField<
      U_Bosynclog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SYNC_TA: OrderableEdmTypeField<
      U_Bosynclog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bosynclog<DeSerializers>>;
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
         * Static representation of the {@link uUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USER_ID: fieldBuilder.buildEdmTypeField(
          'U_UserID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_START: fieldBuilder.buildEdmTypeField('U_Start', 'Edm.String', true),
        /**
         * Static representation of the {@link uEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_END: fieldBuilder.buildEdmTypeField('U_End', 'Edm.String', true),
        /**
         * Static representation of the {@link uStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STATUS: fieldBuilder.buildEdmTypeField('U_Status', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uSyncCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SYNC_CA: fieldBuilder.buildEdmTypeField(
          'U_SyncCa',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSyncCo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SYNC_CO: fieldBuilder.buildEdmTypeField(
          'U_SyncCo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSyncTa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SYNC_TA: fieldBuilder.buildEdmTypeField(
          'U_SyncTa',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bosynclog)
      };
    }

    return this._schema;
  }
}
