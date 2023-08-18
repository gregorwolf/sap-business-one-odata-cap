/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Boword } from './U_Boword';
import { U_BowordRequestBuilder } from './U_BowordRequestBuilder';
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
export class U_BowordApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Boword<DeSerializersT>, DeSerializersT>
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
  ): U_BowordApi<DeSerializersT> {
    return new U_BowordApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Boword;

  requestBuilder(): U_BowordRequestBuilder<DeSerializersT> {
    return new U_BowordRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Boword<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Boword<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Boword<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Boword, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Boword, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FOLLOW_UP: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ACTIVITY: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FLW_TIME: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FLW_UNIT: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FLW_DUR: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FLW_DUR_UN: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_REMINDER: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_REM_TIME: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_REM_UNIT: OrderableEdmTypeField<
      U_Boword<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Boword<DeSerializers>>;
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
         * Static representation of the {@link uFollowUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FOLLOW_UP: fieldBuilder.buildEdmTypeField(
          'U_FollowUp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACTIVITY: fieldBuilder.buildEdmTypeField(
          'U_Activity',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uFlwTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FLW_TIME: fieldBuilder.buildEdmTypeField(
          'U_FlwTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uFlwUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FLW_UNIT: fieldBuilder.buildEdmTypeField(
          'U_FlwUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uFlwDur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FLW_DUR: fieldBuilder.buildEdmTypeField(
          'U_FlwDur',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uFlwDurUn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FLW_DUR_UN: fieldBuilder.buildEdmTypeField(
          'U_FlwDurUn',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uReminder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REMINDER: fieldBuilder.buildEdmTypeField(
          'U_Reminder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uRemTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REM_TIME: fieldBuilder.buildEdmTypeField(
          'U_RemTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uRemUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REM_UNIT: fieldBuilder.buildEdmTypeField(
          'U_RemUnit',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Boword)
      };
    }

    return this._schema;
  }
}
