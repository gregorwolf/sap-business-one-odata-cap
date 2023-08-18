/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Boemail } from './U_Boemail';
import { U_BoemailRequestBuilder } from './U_BoemailRequestBuilder';
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
export class U_BoemailApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Boemail<DeSerializersT>, DeSerializersT>
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
  ): U_BoemailApi<DeSerializersT> {
    return new U_BoemailApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Boemail;

  requestBuilder(): U_BoemailRequestBuilder<DeSerializersT> {
    return new U_BoemailRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Boemail<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Boemail<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Boemail<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Boemail, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Boemail, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FOLLOW_UP: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ACTIVITY: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FLW_TIME: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FLW_UNIT: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FLW_DUR: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FLW_DUR_UN: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_REMINDER: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_REM_TIME: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_REM_UNIT: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_SAVE_MSG: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ATT_MODE: OrderableEdmTypeField<
      U_Boemail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Boemail<DeSerializers>>;
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
        /**
         * Static representation of the {@link uSaveMsg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SAVE_MSG: fieldBuilder.buildEdmTypeField(
          'U_SaveMsg',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAttMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ATT_MODE: fieldBuilder.buildEdmTypeField(
          'U_AttMode',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Boemail)
      };
    }

    return this._schema;
  }
}
